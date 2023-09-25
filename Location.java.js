// Create a function to fetch and display the user's location
function fetchUserLocation() {
    // Send a GET request to the ipinfo.io API
    fetch('https://ipinfo.io/json')
        .then(response => {
            // Check if the response status is OK (200)
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Unable to fetch location data.');
            }
        })
        .then(data => {
            // Extract the relevant location information from the API response
            const location = data.city + ', ' + data.region;

            // Update the content of the user-location span with the user's location, wrapping it in a <strong> element with the "bold-text" class
            document.getElementById('user-location').innerHTML = `Currently in - <strong class="bold-text">${location}</strong>`;


            // Update the 📍 emoji span
            document.getElementById('pin-emoji').textContent = '📍';
        })
        .catch(error => {
            // Handle any errors that occur during the fetch operation
            console.error('Error fetching location:', error);
            document.getElementById('user-location').textContent = 'Location unavailable';
        });
}

// Call the fetchUserLocation function to get and display the user's location
fetchUserLocation();
