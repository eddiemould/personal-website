// AUTO CHANGING DATE TEXT

const updateDate = () => {
  const today = new Date();
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const fullDate = today.toLocaleDateString('en-US', options);
  const formattedDate = fullDate.replace(',', '');
  
  const dateSpan = document.getElementById('date');
  if (dateSpan) {
    dateSpan.textContent = formattedDate;
  }
};

// ADD HEADER & FOOTER TO Ids 'header-placeholder' & 'footer-placeholder'

fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
    // After the header is loaded, update the date
    updateDate();
    setupThemeToggleButtons();  // Set up theme toggle buttons if needed
});

// OVERLAY IMAGE

fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });

const overlay = document.getElementById('image-overlay');
const overlayImage = document.getElementById('overlay-image');

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    overlayImage.src = img.src;
    overlay.classList.add('active');
  });
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
  overlayImage.src = '';
});

// CLOSE IMG WITH ESC KEY

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    overlay.classList.remove('active');
  }
});

// Initialize on page load
loadTheme();