var personas=["Guille","Plata","Fernando","AntiWithe","Mameitor"];
var nombre1=("Fernando");
var nombre2=("Luis");
var personas2={
    "nombre": "luis",
    "Apellido":"lopez",
    genero:"Elle",
    edad:23,
    farsante:true
}

// var elNando= new miClason("Nando","Luisillo");
let variable={
    Nombrevar:"HP",
    Ramson:"16Gb"
}
let Nombrevar=variable.Nombrevar;
let Ramson=variable.Ramson;
let fraseson=`Mi compu ${Nombrevar} tiene ${Ramson} de ram`;
// var alumnos=[
//     {
//         nombresillo='fernando',
//         edad=21,
//         calificaciones=[10,8,6]
//     };
// ]
 function lafuncion(variable1){
    variable1=4
    return variable1*2;
 }
(variable1)=>{return variable1*2}
variable1=>{return variable1*2}
variable1=>variable1*2;
var articulos=[
    {nombre:"Baica",costo:150000},
    {nombre:"Chancla",costo:2000},
    {nombre:"Limon",costo:250},
    {nombre:"Aguacate",costo:30000},
    {nombre:"FrijolesGera",costo:4500},
    {nombre:"Guille",costo:0.5}
];
articulos.forEach((valor)=>{
    window.alert(valor.nombre);
})
var artCaros=articulos.filter((valor)=>{
    if(valor.costo>2000)
    return valor;
})
var articulosDescuento=articulos.map((articuloDescontado)=>{
    return{
        nombre:articuloDescontado.nombre,costo:articuloDescontado.costo*0.8
    };
})