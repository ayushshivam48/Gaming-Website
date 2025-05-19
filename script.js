    // Toggle Left Sidebar (GameZone Menu)
    const logoBtn = document.getElementById('logo-btn');
    const leftSidebar = document.getElementById('left-sidebar');

    logoBtn.addEventListener('click', () => {
    leftSidebar.classList.toggle('active');
    });

    // Toggle Profile Sidebar
    const profileBtn = document.getElementById('profile-btn');
    const profileSidebar = document.getElementById('profile-sidebar');

    profileBtn.addEventListener('click', () => {
    profileSidebar.classList.toggle('active');
    });

    // Close Sidebars When Clicking Outside
    document.addEventListener('click', (event) => {
    if (!logoBtn.contains(event.target) && !leftSidebar.contains(event.target)) {
        leftSidebar.classList.remove('active');
    }
    if (!profileBtn.contains(event.target) && !profileSidebar.contains(event.target)) {
        profileSidebar.classList.remove('active');
    }
    });

    // Search Functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    // Function to handle search
    const handleSearch = () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
        // Add logic to filter and display search results
    } else {
        alert('Please enter a search term.');
    }
    };

    // Trigger search on button click
    searchButton.addEventListener('click', handleSearch);

    // Trigger search on Enter key press
    searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
    });

    // Get the video element and game details container
    const videoElement = document.querySelector('.hero-section video');
    const imageElement = document.getElementById('game-icon');
    const gameDetailsContainer = document.querySelector('.game-details');
    const gameNameElement = document.querySelector('.game-info h2');
    const gameDescriptionElement = document.querySelector('.game-info p');
    const gameRatingElement = document.querySelector('.game-info .rating');
    const playButton = document.getElementById('play-button'); // Get the play button

    let currentVideo = videoElement.src; // Store the initial video source

    const updateGameDetails = (videoUrl, imageSrc, gameDetails, playLink) => {
      if (videoUrl !== currentVideo) { // Only change video if the source is different
        videoElement.src = videoUrl;
        videoElement.load();
        currentVideo = videoUrl; // Update the current video source
      }

    imageElement.src = imageSrc;  // Set the hero image
    imageElement.alt = gameDetails.name + " Icon";

    // Update game details
    gameNameElement.textContent = gameDetails.name;
    gameDescriptionElement.textContent = gameDetails.description;
    gameRatingElement.textContent = gameDetails.rating;

    // Update the play button link
    playButton.href = playLink;  // Set the href attribute
    playButton.target = "_blank"; // Open in a new tab (optional)
    };

    // Add click event listeners to all game cards
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach((card) => {
    card.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth' // Optional: Add smooth scrolling
        });
        const videoUrl = card.getAttribute('data-video');
        const imageSrc = card.getAttribute('data-image');
        const gameDetails = JSON.parse(card.getAttribute('data-details'));
        const playLink = card.getAttribute('data-playnow'); // Get play link
        updateGameDetails(videoUrl, imageSrc, gameDetails, playLink);
    });
});
