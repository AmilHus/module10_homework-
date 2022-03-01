const btn = document.querySelector(".btn");

btn.addEventListener("click", () =>{
    window.alert(`Ширина Экрана: ${window.screen.width}px \nВысота Экрана: ${window.screen.height}px`);
})