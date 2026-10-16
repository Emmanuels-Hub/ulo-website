/**
 * Derive what the competition page should show from the admin `status`
 * plus the dates, so a forgotten status toggle can't leave registration open
 * after the deadline has passed.
 */
export const getPhase = (c, now) => {
  const deadline = c.registrationDeadline ? new Date(c.registrationDeadline).getTime() : null;
  const deadlinePassed = deadline !== null && now > deadline;

  if (c.status === "open" && !deadlinePassed) return "open";
  if (c.status === "open" && deadlinePassed) return "closed";
  return c.status || "upcoming";
};

export const PHASE_COPY = {
  upcoming: { badge: "Coming soon", tone: "soft" },
  open: { badge: "Registration open", tone: "live" },
  closed: { badge: "Competition in progress", tone: "dark" },
  ended: { badge: "Edition ended", tone: "soft" },
};

export const prizePool = (prizes = []) => prizes.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
