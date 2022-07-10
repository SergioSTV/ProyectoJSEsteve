
let btn=document.getElementById('sign-up');
btn.addEventListener('click',()=>{
  Swal.fire({
    title: 'Día de suerte, precios con 50% de descuento',
    text: 'Aprovechalo solo por hoy',
    imageUrl: 'https://media.giphy.com/media/8s18yNgommwPugpxTh/giphy.gif',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
  let r = 0  
  let ask_4price=function(){Number(prompt("Ingresar precio de un producto"));}
  let confirmacion
  
  
  let nombre= prompt("Ingrese su nombre")
    !nombre ? prompt("Ingrese nombre válido"):alert("Bienvenido, " + nombre)
  
  
  
  do{ ask_4price()
      let precio=ask_4price
    Number.isNaN(precio)==true? Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ingrese valor numérico!',
      footer: '<a href="">Why do I have this issue?</a>'
    }):
      

      (r+=precio) *0.5;
        alert("El monto actual es : " + "$" + r);
          confirmacion = confirm("¿Desea continuar con su compra?");}
  
  
  while(confirmacion)
  Swal.fire({
    
    title: 'Gracias por su consulta',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://media.giphy.com/media/RipfZWzjUDH25euMpM/giphy.gif")
      left top
      no-repeat
    `
  })})

      const listaproductos=[
          {detalle:"Creatina", precio:"$3599", origen: "importado", descuento:"50%"},
          {detalle:"Colageno", precio:"$2500", origen: "importado", descuento:"50%"},
          {detalle:"Colageno Hidrolizado", precio:"$2550", origen: "importado", descuento:"50%"}
      ];
      console.table(listaproductos);
      listaproductos.push(
        {detalle:"nitrogeno", precio:"$4200", origen:"importado" }
    )
    const importados = listaproductos.filter(imp=> imp.importado);
        console.log(importados);
















     /* / let resultado = 0
let precio1 
let confirmacion
let nombre= prompt("ingrese su nombre")
if(nombre == "" );{alert("nombre no valido")
 nombre= prompt("ingrese su nombre")}

alert("Bienvenido, " + nombre);

do{ precio1= parseInt(prompt("Ingresar precio de un producto"));

if(isNaN(precio1)){alert("Ingrese un valor numerico");}

resultado= ((precio1 + resultado) *0.5);
    alert("El resultado de la suma es : " + resultado);
    confirmacion = confirm("¿Desea continuar con su compra?");}


while(confirmacion==true)
    alert("gracias por su compra");






    const productos = [
        {detalle:"creatina", precio:3599, descuento:"5%", importado:EEUU};
        {detalle:"colageno", precio:2500, descuento:"5%"};
        {detalle:"colageno hidrolizado", precio:45};]
        productos.push(
            {detalle:"nitrogeno", precio:4200, importado:EEUU }
        )
        const importados = productos.filter(imp=> imp.importado);
        console.log(importados)**/
