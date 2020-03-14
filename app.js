const memeForm = document.getElementById('meme-form');
const memeContainer = document.querySelector('.meme-container');
const submitButton = document.querySelector('button');
const urlInput = document.getElementById('url-input');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');


submitButton.addEventListener('click', function() {
  event.preventDefault();
  makeMeme(urlInput.value, text1.value.toUpperCase(), text2.value.toUpperCase());
  memeForm.reset();
});

function makeMeme(url, text1, text2) {
  const memeDiv = document.createElement('div');
  const memeOverlay = document.createElement('div');

  memeDiv.classList.add('meme-div'); 
  memeDiv.style.backgroundImage = `url(${url})`;
  memeDiv.innerHTML = `<div class="top-text"><h1 class="meme-text">${text1}</h1></div><div class="bottom-text"><h1 class="meme-text">${text2}</h1></div>`;

  memeOverlay.innerHTML = `<div><button>DELETE</button></div>`;
  memeOverlay.classList.add('meme-overlay');

  memeDiv.append(memeOverlay);
  memeContainer.append(memeDiv);
}

memeContainer.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.parentElement.parentElement.remove();
  }
});