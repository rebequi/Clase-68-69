const divTarjeta = document.querySelector("#tarjeta-operaciones")
const selectDeTipoDeFiltro = document.getElementById("filtro-tipo")
const selectDeFiltroCategoria = document.getElementById("filtro-categoria")

const operaciones = [

    {
        descripcion: 'descripcion',
        categoria: 'Categoria',
        fecha: 'fecha',
        monto: 'monto',
        tipo: 'tipo',
    },

    {
        descripcion: 'vinos',
        categoria: 'comida',
        fecha: '25/09/2021',
        monto: 5000,
        tipo: 'gasto',
    },
    {
        descripcion: 'almuerzo',
        categoria: 'comida',
        fecha: '25/09/2021',
        monto: 23000,
        tipo: 'ganancia',
    },
    {
        descripcion: 'comida gato',
        categoria: 'comida',
        fecha: '25/09/2021',
        monto: 5000,
        tipo: 'gasto',
    },
    {
        descripcion: 'parque',
        categoria: 'salidas',
        fecha: '25/09/2021',
        monto: 5000,
        tipo: 'gasto',
    },
    {
        descripcion: 'cine',
        categoria: 'salidas',
        fecha: '25/09/2021',
        monto: 5000,
        tipo: 'gasto',
    },

    {
        descripcion: 'pago casa',
        categoria: 'alquiler',
        fecha: '25/09/2021',
        monto: 5000,
        tipo: 'ganancia',
    },
];


const mostrarOperacionesEnHTML = (array) => {
    let acc = ""

    array.map((operacion) => {
        acc +=
            `
            <div class="fila">
        <p>${operacion.descripcion}</p>
        <p>${operacion.categoria}</p>
        <p>${operacion.fecha}</p>
        <p>${operacion.tipo}</p>
        <p>${operacion.monto}</p>
        
        </div>
            `

    })

    divTarjeta.innerHTML = acc
}
mostrarOperacionesEnHTML(operaciones)

const aplicarFiltros = ()=> {
    const tipo = selectDeTipoDeFiltro.value
    const filtradoPorTipo = operaciones.filter((operacion)=>{
        if(tipo === "todos") {
            return operacion
        }
        return operacion.tipo === tipo
    })

    const categoria = selectDeFiltroCategoria.value
    const filtradoFinal = filtradoPorTipo.filter((operacion)=> {
        if(tipo === "todos") {
            return operacion
        }
        return operacion.categoria === categoria
    })
    return filtradoFinal
}

selectDeTipoDeFiltro.onchange = () => {
    const arrayFiltrado = aplicarFiltros()
    mostrarOperacionesEnHTML(arrayFiltrado)
} 

selectDeFiltroCategoria.onchange = () => {
    const arrayFiltrado = aplicarFiltros()
    mostrarOperacionesEnHTML(arrayFiltrado)
}
