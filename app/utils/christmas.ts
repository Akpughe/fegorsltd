/**
 * Utility function to check if the current date falls within the Christmas season.
 * Christmas season is defined as November 15 to January 5 (inclusive).
 *
 * @returns {boolean} True if the current date is within the Christmas season, false otherwise.
 */
export function isChristmasSeason(): boolean {
  const now = new Date();
  const month = now.getMonth() + 1; // getMonth() returns 0-11
  const day = now.getDate();

  // Christmas season: November 15 to January 15
  if (month === 11 && day >= 15) return true; // November 15+
  if (month === 12) return true; // All of December
  if (month === 1 && day <= 5) return true; // January 1-5
  return false;
}
