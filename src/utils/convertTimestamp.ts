import { Timestamp } from "firebase/firestore";
import moment from "moment";

export const convertTimestamp = (timestamp: Timestamp) => {
  if (!timestamp) return null;
  const { seconds, nanoseconds } = timestamp;
  const milliseconds = seconds * 1000 + nanoseconds / 1000000; // Convert to milliseconds
  const date = moment(milliseconds);
  return date.format("MMM Do 'YY, hh:mma"); // Format the date
};
