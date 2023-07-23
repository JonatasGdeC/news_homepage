const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close')
const links = document.getElementById('menu-links');

const movimentoIR = [
    {transform: "translateX(300px)"},
    {transform: "translateX(0px)"},
]
const movimentoVOLTAR = [
    {transform: "translateX(0px)"},
    {transform: "translateX(300px)"},
]

const tempoEvento = {
    duration: 200,
    iterations: 1,
}

menu.addEventListener('click', () => {
    links.classList.add('menu--aparece')
    links.animate(movimentoIR, tempoEvento)
});

menuClose.addEventListener('click', ()=>{
    links.animate(movimentoVOLTAR, tempoEvento).addEventListener('finish', () =>{
        links.classList.remove('menu--aparece')
    })
})
