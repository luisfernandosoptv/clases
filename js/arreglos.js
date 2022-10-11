// let nombre=["Venadito","WithoutColor","Mameitor","Milton","Oriental"];
// let nombresNuevos=nombre.filter(e=>{
//     if(nombre.length>7)
//     {
//         return nombre;
//     }
// })
let nombres1=[
    {
        nombre:"Guillermo",
        edad: 37,
        sexo:"M"
    },
    {
        nombre:"Venadito",
        edad: 22,
        sexo:"M"
    },
    {
        nombre:"Silver",
        edad: 22,
        sexo:"M"
    },
    {
        nombre:"Foñaño",
        edad: 22,
        sexo:"M"
    },
    {
        nombre:"Viqui",
        edad: 55,
        sexo:"F"
    }
    
]
let hombres=nombres1.filter(persona=>{
    if(persona.sexo=="M"&&persona.edad<25)
    {
        console.log("Evaluando a "+persona.nombre);
        return persona;
    }

})
let sueldos=nombres1.map(persona=>{
    let sueldo=0;
    // return`Hola ${persona.nombre} tienes ${persona.edad} de años`;
    if(persona.edad>25){
        sueldo=500000
    }
    return {NombreCulero:persona.nombre,sueldito:sueldo}
})
let mujer=nombres1.find(personas=>{
    if(personas.nombre.includes("Vi"))
    {
        return true;
    }
})
nombres1.forEach(personas=>{
    console.log(personas.nombres1);
    })

let hayMayores=nombres1.some(personas=>{
    if(personas.edad>25)
    {
        return true;
    }
})
let contenedor=document.getElementById("contenedor");
let input=document.querySelector("#input");
let botoncito=document.querySelector("#botoncito");
botoncito.addEventListener("click",()=>{
    contenedor.innerText=input.value;
    contenedor.className="sombreado";
})
input.addEventListener("keyup",()=>{
    if(input.value.length>5)
    {
        contenedor.innerText=input.value;
        contenedor.className="exito";
    }
    else    
    {
        contenedor.innerText=input.value;
        contenedor.className="fallo";   
    }
})