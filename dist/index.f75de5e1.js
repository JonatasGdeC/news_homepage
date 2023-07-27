const menu = document.getElementById("menu");
const menuClose = document.getElementById("menu-close");
const links = document.getElementById("menu-links");
const body = document.querySelector("body");
const movimentoIR = [
    {
        transform: "translateX(256px)"
    },
    {
        transform: "translateX(0px)"
    }
];
const movimentoVOLTAR = [
    {
        transform: "translateX(0px)"
    },
    {
        transform: "translateX(256px)"
    }
];
const tempoEvento = {
    duration: 200,
    iterations: 1
};
menu.addEventListener("click", ()=>{
    links.classList.add("menu--aparece");
    body.style.background = "#ccc";
    links.animate(movimentoIR, tempoEvento);
});
menuClose.addEventListener("click", ()=>{
    links.animate(movimentoVOLTAR, tempoEvento).addEventListener("finish", ()=>{
        links.classList.remove("menu--aparece");
        body.style.background = "#fff";
    });
});

//# sourceMappingURL=index.f75de5e1.js.map
