var minPreloadTime = 1000; // Minimum time in milliseconds (1 second)
var shortDisplayThreshold = 1000; // Threshold for short display (1 second)
var startTime;
var assetsLoaded = false;

function preloader() {
    startTime = new Date().getTime(); // Record the start time

    // Track when the page is fully loaded
    window.addEventListener('load', function() {
        assetsLoaded = true;
        showPage();
    });

    // Monitor when the document is considered complete
    document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
            assetsLoaded = true;
            showPage();
        }
    });
}

function showPage() {
    var currentTime = new Date().getTime(); // Get the current time
    var elapsedTime = currentTime - startTime; // Calculate the elapsed time

    if (assetsLoaded) {
        // If the elapsed time is less than shortDisplayThreshold, hide the preloader immediately
        if (elapsedTime < shortDisplayThreshold) {
            document.getElementById("preloader").style.display = "none";
        } else {
            document.getElementById("preloader").style.display = "none";
        }
    } else {
        // Ensure the preloader is visible for at least minPreloadTime
        if (elapsedTime < minPreloadTime) {
            setTimeout(function() {
                document.getElementById("preloader").style.display = "none";
            }, minPreloadTime - elapsedTime); // Ensure it lasts at least minPreloadTime
        } else {
            document.getElementById("preloader").style.display = "none";
        }
    }
}

// Call the preloader function as soon as the script loads
preloader();
