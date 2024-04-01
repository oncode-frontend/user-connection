fetch(window).then((response)=>{
    console.log(response.status); // Will show you the status
    if (!response.ok) {
        throw new Error("HTTP status " + response.status);
    }
    return response.json();
});