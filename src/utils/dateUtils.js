import { format, formatDistanceToNow, isToday, isYesterday } from "date-fns";

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  if (isToday(date)) {
    return "Today";
  }

  if (isYesterday(date)) {
    return "Yesterday";
  }

  const daysAgo = Math.floor((new Date() - date) / (1000 * 60 * 60 * 24));

  if (daysAgo < 7) {
    return formatDistanceToNow(date, { addSuffix: true });
  }

  return format(date, "MMM dd, yyyy");
};

export const formatFullDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "MMMM dd, yyyy");
};

export const formatDateWithTime = (dateString) => {
  const date = new Date(dateString);
  return format(date, "MMM dd, yyyy • hh:mm a");
};
