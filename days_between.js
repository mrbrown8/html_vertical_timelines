function calculateDaysBetweenDates(date1, date2) {
    // Convert the date strings to Date objects
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    // Check if the dates are valid
    if (isNaN(startDate) || isNaN(endDate)) {
        throw new Error("Invalid date format. Please use a valid date string.");
    }

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = endDate - startDate;

    // Convert milliseconds to days
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const differenceInDays = differenceInMilliseconds / millisecondsInADay;

    return Math.abs(Math.round(differenceInDays)); // Return the absolute value of the difference
}

// Example usage:
const daysBetween = calculateDaysBetweenDates("2023-10-01", "2023-10-15");
console.log(daysBetween); // Output: 14
