/**
 * Use to get the duration between two date strings
 * @param startDate August 2023
 * @param endDate Present or Septepmber 2023
 * 
 * @example GetDuration('January 2023', 'August 2023') // 8 months
 * @example GetDuration('January 2023', 'Present') // X months/years
 */
export const GetDuration = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years === 0) {
    return `${months} month${months > 1 ? "s" : ""}`;
  } else if (months === 0) {
    return `${years} years`;
  } else {
    return `${years} years ${months} months`;
  }
};