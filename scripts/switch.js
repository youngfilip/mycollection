const darkModeButton = document.getElementById('dark-mode-button');
const darkModeIcon = document.getElementById('dark-mode-icon');
const youtubeLogo = document.getElementById('youtube-logo'); // Select the YouTube logo
const menuIcon = document.getElementById('menu-icon'); // Select the menu icon
const homeIcon = document.getElementById('home-icon'); // Select the home icon
const exploreIcon = document.getElementById('Explore-icon'); // Select the home icon
const subscriptionIcon = document.getElementById('subscription-icon'); // Select the home icon
const originalsIcon = document.getElementById('originals-icon'); // Select the home icon
const youtubeMusicIcon = document.getElementById('youtube-music-icon'); // Select the home icon
const libraryIcon = document.getElementById('library-icon'); // Select the home icon

// Function to update icons based on the current mode
function updateDarkModeIcons() {
  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.src = 'icons/toggle-on.png'; // Switch to "on" icon
    youtubeLogo.src = 'icons/youtube-logo-white.png'; // Switch to white logo
    menuIcon.src = 'icons/menu-white.png'; // Switch to dark mode menu icon
    homeIcon.src = 'icons/home-white.png'; // Switch to dark mode home icon
    exploreIcon.src = 'icons/explore-white.png'; // Switch to dark mode explore icon
    subscriptionIcon.src = 'icons/subscription-white.png'; // Switch to dark mode subscription icon
    originalsIcon.src = 'icons/originals-white.png'; // Switch to dark mode originals icon
    youtubeMusicIcon.src = 'icons/youtube-music-white.png'; // Switch to dark mode YouTube Music icon
    libraryIcon.src = 'icons/library-white.png'; // Switch to dark mode library icon
  } else {
    darkModeIcon.src = 'icons/toggle-off.png'; // Switch to "off" icon
    youtubeLogo.src = 'icons/youtube-logo-black.svg'; // Switch to default logo
    menuIcon.src = 'icons/menu-black.png'; // Switch to default menu icon
    homeIcon.src = 'icons/home-black.png'; // Switch to default home icon
    exploreIcon.src = 'icons/explore-black.png'; // Switch to default explore icon
    subscriptionIcon.src = 'icons/subscription-black.png'; // Switch to default subscription icon
    originalsIcon.src = 'icons/originals-black.png'; // Switch to default originals icon
    youtubeMusicIcon.src = 'icons/youtube-music-black.png'; // Switch to default YouTube Music icon
    libraryIcon.src = 'icons/library-black.png'; // Switch to default library icon
  }
}

// Add event listener for the toggle button
darkModeButton.addEventListener('click', () => {
  // Toggle the dark mode class on the body
  document.body.classList.toggle('dark-mode');

  // Update the icons after toggling
  updateDarkModeIcons();
});

// Ensure the icons match the initial state on page load
updateDarkModeIcons();