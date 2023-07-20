export default function timeSincePublished(publishedTime: string): string {
	const now = new Date();
	const elapsedMilliseconds = now.getTime() - new Date(publishedTime).getTime();
	const elapsedSeconds = Math.round(elapsedMilliseconds / 1000);
	const elapsedMinutes = Math.round(elapsedSeconds / 60);
	const elapsedHours = Math.round(elapsedMinutes / 60);
	const elapsedDays = Math.round(elapsedHours / 24);

	if (elapsedDays > 0) {
		return `${elapsedDays} day${elapsedDays > 1 ? "s" : ""} ago`;
	} else if (elapsedHours > 0) {
		return `${elapsedHours} hour${
			elapsedHours > 1 ? "s" : ""
		} ago`;
	} else if (elapsedMinutes > 0) {
		return `${elapsedMinutes} minute${
			elapsedMinutes > 1 ? "s" : ""
		} ago`;
	} else if (elapsedMilliseconds > 30 * 24 * 60 * 60 * 1000) {
		return "Long time ago";
	} else {
		return "just now";
	}
}
