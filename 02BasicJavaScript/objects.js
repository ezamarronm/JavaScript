function Auto(marca, modelo, annio){
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio; 
}

var autoNuevo = new Auto("Toyota", "Corolla", "2020");
var lista = []
for (let i = 0; i < 30; i++) {
  lista.push ( new Auto("Toyota " + i, "Corolla " + i, 2020 + i) )
  
}

var articulos = [
  {nombre: "Bicicleta", costo: 3000},
  {nombre: "TV", costo: 2500},
  {nombre: "libro", costo: 320},
  {nombre: "celular", costo: 20000},
  {nombre: "teclado", costo: 500},
  {nombre: "audifonos", costo: 1700}
];

// var articulosFiltrados = articulos.filter(
//   function (articulo) {
//     return articulo.costo <= 500
    
//   });

//   var nombreArticulos = articulos.map(
//     function (articulo) {
//       return articulo.nombre
//     }
//   );

// var encuentraArticulo = articulos.find(
//   function (articulo) {
//     return articulo.nombre === "Laptop";
//   }
// );

// encuentraArticulo
 articulos.forEach( articulo => {
  console.log(articulo.nombre);   
 });

 articulosBaratos = articulos.some(
  function (articulo) {
    return articulo.costo <= 700;
  }
 );

 articulosBaratos