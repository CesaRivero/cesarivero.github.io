const colores=['green','blue','black','white'];
const coloresVarios=['darkblue','gray','red','orange']
const btn = document.getElementById('btn');
const nombre=document.getElementById('nombre');
/*const parra=document.getElementsById('segundo');*/
const cuadro= document.getElementById('centro');

btn.addEventListener('click', function(){
    const ramdomNumber=Math.floor(Math.random()*colores.length);
    console.log(ramdomNumber);

    document.body.style.backgroundColor = coloresVarios[ramdomNumber];

    nombre.style.color=coloresVarios[ramdomNumber];

    nombre.textContent=coloresVarios[ramdomNumber];

    cuadro.style.backgroundColor=colores[ramdomNumber]
    console.log('hola')
    
    
    
});