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

fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });

// DARK/LIGHT TOGGLE

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function applyManualTheme(theme) {
  document.documentElement.classList.remove('dark', 'light');
  if (theme === 'dark' || theme === 'light') {
    document.documentElement.classList.add(theme);
  }
}

function applySystemTheme() {
  document.documentElement.classList.remove('dark', 'light');
  // CSS @media rule takes over again
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    applyManualTheme(savedTheme);
  } else {
    applySystemTheme();
  }
}

// React to system changes only if there's no manual theme
prefersDark.addEventListener('change', () => {
  if (!localStorage.getItem('theme')) {
    applySystemTheme();
  }
});

function setupThemeToggleButtons() {
  // Select the toggle buttons after the header has been loaded
  const toggleButton = document.getElementById('theme-toggle');
  const resetButton = document.getElementById('theme-reset');

  // Check if buttons exist before adding event listeners
  if (toggleButton && resetButton) {
    toggleButton.addEventListener('click', () => {
      const current = localStorage.getItem('theme');
      let newTheme;

      if (current === 'dark') {
        newTheme = 'light';
      } else if (current === 'light') {
        newTheme = 'dark';
      } else {
        // No override yet, flip current system setting
        newTheme = prefersDark.matches ? 'light' : 'dark';
      }

      localStorage.setItem('theme', newTheme);
      applyManualTheme(newTheme);
    });

    resetButton.addEventListener('click', () => {
      localStorage.removeItem('theme');
      applySystemTheme();
    });
  }
}

// Initialize on page load
loadTheme();