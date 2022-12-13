function run(){
    let simbolos = '0123456789abcdef'
    let color = '#'

    for(let i = 0; i < 6; i++)
        color += simbolos[Math.floor(Math.random() * 16)]
      
    const hexArgb = (color) => {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        return [r, g, b];
    }

    document.body.style.background = color
    let texto = document.getElementById("hex")
    texto.innerHTML = color

    document.getElementById("rgb").innerHTML = "rgb(" + hexArgb(color) + ")";
}