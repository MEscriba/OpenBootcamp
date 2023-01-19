

//esta sintaxis es para precargar el document antes de ejecutar la funcion
//es lo mismo que hacer $(document).ready(()=> { bla bla bla metes el comportamiento aca })

$(() => {

    $('#boton').click(() => {
        alert('ojota')
    })
    $('#boton').mouseenter((elem)=> {
        elem.target.style.color= "blue"
    })
    $('#boton').mouseleave((elem) => {
        elem.target.style.color = "black"
    })

    $('#boton').click(()=> {
        console.log('Hola, estoy utilizando jQuery')
    })
})


