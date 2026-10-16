/**
 * Tiny read-only Firestore client over the REST API.
 * Avoids shipping the Firebase SDK (~100 kB) to a marketing site.
 * Only works for documents whose security rules allow public reads.
 */
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

/* Firestore REST wraps every value in a type tag — unwrap recursively. */
const decode = (value) => {
  if (!value || typeof value !== "object") return value;
  if ("stringValue" in value) return value.stringValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return value.doubleValue;
  if ("booleanValue" in value) return value.booleanValue;
  if ("timestampValue" in value) return value.timestampValue;
  if ("nullValue" in value) return null;
  if ("arrayValue" in value) return (value.arrayValue.values || []).map(decode);
  if ("mapValue" in value) return decodeFields(value.mapValue.fields);
  return null;
};

const decodeFields = (fields = {}) => Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, decode(v)]));

/** Fetch every document in a collection as { [docId]: data }. */
export async function fetchCollection(collection, { signal } = {}) {
  if (!PROJECT_ID) throw new Error("VITE_FIREBASE_PROJECT_ID is not set");
  const url =
    `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${collection}` +
    (API_KEY ? `?key=${API_KEY}` : "");

  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`Firestore ${collection}: HTTP ${res.status}`);
  const json = await res.json();

  return Object.fromEntries(
    (json.documents || []).map((d) => [d.name.split("/").pop(), decodeFields(d.fields)]),
  );
}
