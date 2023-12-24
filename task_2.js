const button = document.querySelector("button");

button.addEventListener('click', () => {
   alert(`Ширина: ${window.screen.width} px. Высота: ${window.screen.height} px.`);
});