/**
 * Debugging Notes:
 * 
 * Problem:
 * - The fetchDataWithCallback function intermittently failed due to inconsistent error handling.
 * - Random failures were simulated but not properly passed to the callback.
 * 
 * Root Cause:
 * - The callback didn't clearly differentiate between success and error states.
 * - Errors were not consistently handled, leading to unexpected behavior.
 * 
 * Solution:
 * - Introduced proper error handling using an `if-else` block.
 * - Ensured that the callback is invoked with clear arguments:
 *    - An error message if there’s a failure.
 *    - Fetched data if the request is successful.
 * 
 * Validation:
 * - Tested multiple runs to ensure consistent behavior.
 * - Confirmed that "Error fetching data" is logged for failures.
 * - Verified that correct data is logged for successes.
 */
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const isError = Math.random() < 0.5; 
        if (isError) {
            callback("Error: Data fetch failed", null); 
        } else {
            const data = { id: 1, name: "Sample Data" }; 
            callback(null, data); 
        }
    }, 1000);
}

fetchDataWithCallback((error, data) => {
    if (error) {
        console.log("Error fetching data"); 
    } else {
        console.log("Data fetched successfully:", data); 
    }
});
