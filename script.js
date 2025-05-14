// Get the button element
const button = document.getElementById("animateButton");

// Function to check if the animation has been triggered
function checkAnimationState() {
    const isAnimationTriggered = localStorage.getItem('animationTriggered');
    if (isAnimationTriggered === 'true') {
        button.innerHTML = "Animation Triggered!";
    } else {
        button.innerHTML = "Click Me!";
    }
}

// Function to trigger animation and store preference in localStorage
function triggerAnimation() {
    // Add animation class to button
    button.classList.add('animate-bounce');

    // Store animation state in localStorage
    localStorage.setItem('animationTriggered', 'true');

    // After animation ends, remove the class to allow it to be triggered again
    setTimeout(() => {
        button.classList.remove('animate-bounce');
    }, 500);
}

// Add event listener for button click
button.addEventListener('click', triggerAnimation);

// Check animation state when the page loads
checkAnimationState();
