function ColorAleatori(){
    let simbolos = '0123456789abcdef'
    let color = '#'

    for(let i = 0; i < 6; i++)
        color += simbolos[Math.floor(Math.random() * 16)]
    
    document.body.style.background = color
}