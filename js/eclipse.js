const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        // Si se activa el modo oscuro, se guarda en el almacenamiento local
        localStorage.setItem('theme', 'dark');
    } else {
        // Si se desactiva el modo oscuro, se guarda en el almacenamiento local
        localStorage.setItem('theme', 'light');
    }
});

// Verificar el tema guardado en el almacenamiento local al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }
});