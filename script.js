// Toggle Dark Mode
document.getElementById('toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('toggle-mode').textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
