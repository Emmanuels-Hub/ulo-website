import React, { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './path-to-your-firebase-config'; // Update this path!

export default function SubscriptionButton({ currentUser }) {
  const [isProcessing, setIsProcessing] = useState(false);

  // Paystack configuration
  const config = {
    reference: (new Date()).getTime().toString(), // Unique transaction reference
    email: currentUser.email, // The user's logged-in email
    amount: 500000, // Amount in KOBO (e.g., 500000 kobo = 5000 NGN)
    publicKey: 'pk_test_YOUR_PAYSTACK_PUBLIC_KEY', // Replace with your actual public key
  };

  const initializePayment = usePaystackPayment(config);

  // ─── ON SUCCESSFUL PAYMENT ──────────────────────────────────────────
  const onSuccess = async (reference) => {
    setIsProcessing(true);
    try {
      // 1. Calculate expiry date (e.g., 30 days from now)
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);

      // 2. Update the user's document in Firestore
      const userRef = doc(db, "users", currentUser.uid); // Assuming you use Firebase Auth UID
      await updateDoc(userRef, {
        isPremium: true,
        subscriptionExpiry: expiryDate
      });

      alert("Payment successful! You are now a Premium Member 🎉");
      // Optional: Refresh the page or update global state to reflect premium status
      
    } catch (error) {
      console.error("Error updating user status:", error);
      alert("Payment received, but failed to update profile. Please contact support.");
    } finally {
      setIsProcessing(false);
    }
  };

  // ─── ON CLOSED MODAL ──────────────────────────────────────────────
  const onClose = () => {
    console.log("Payment modal closed by user.");
  };

  return (
    <button
      onClick={() => initializePayment(onSuccess, onClose)}
      disabled={isProcessing}
      className="px-8 py-4 bg-green-500 text-white font-black rounded-xl hover:bg-green-600 transition-colors shadow-lg disabled:opacity-50"
    >
      {isProcessing ? "Activating Premium..." : "Upgrade to Premium (₦5,000/mo)"}
    </button>
  );
}