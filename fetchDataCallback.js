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
