import { SECONDSIN14DAYS } from "../constants";

export function getDocumentIdForTimestamp(timestamp: number): string {
    const startOfPeriod = Math.floor(timestamp / SECONDSIN14DAYS);
    const result = startOfPeriod.toString();

    // Ensure at least 4 digits by adding preceding zeros
    const paddedResult = result.padStart(4, "0");

    return paddedResult;
}
