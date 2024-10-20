"use strict";
const toggleTheme = () => {
    const body = document.body;
    const isDark = body.classList.toggle('light-theme');
    if (isDark) {
        console.log('Switched to light theme');
    }
    else {
        console.log('Switched to dark theme');
    }
};
const button = document.createElement('button');
button.innerText = "Toggle Theme";
button.style.padding = "10px 20px";
button.style.margin = "20px 0";
button.addEventListener('click', toggleTheme);
document.body.appendChild(button);
