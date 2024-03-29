function highlightImage(imageId) {
  // Remove border from all images
  const allImages = document.querySelectorAll('.card-group img');
  allImages.forEach(img => img.style.border = 'none');

  // Add green border to the clicked image
  const clickedImage = document.getElementById(imageId);
  clickedImage.style.border = '10px solid #50C878';
}

const apiUrl = 'https://id-game-checker.p.rapidapi.com/pubgm-global/';

document.addEventListener('DOMContentLoaded', function () {
    const checkButton = document.getElementById('checkButton');
    checkButton.addEventListener('click', checkGamingId);
});

async function checkGamingId() {
    const gamingIdInput = document.getElementById('gamingId');
    const resultElement = document.getElementById('result');

    const gamingId = gamingIdInput.value.trim();

    if (gamingId === '') {
        resultElement.innerText = 'Please enter a valid gaming ID.';
        return;
    }

    const url = `${apiUrl}${gamingId}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '585a9eec9bmsh9a6b17b4eb4315bp183874jsnd65d8a4f02a3',
            'X-RapidAPI-Host': 'id-game-checker.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse the response as JSON
        const username = result.data.username; // Extract the username from the response
        resultElement.innerText = `Gaming Username: ${username}`;
    } catch (error) {
        console.error(error);
        resultElement.innerText = 'Error fetching data. Please try again later.';
    }
}
