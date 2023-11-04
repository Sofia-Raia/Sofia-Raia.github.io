
const descuentos = {
    e: 0.2,
    t: 0.5,
    j: 0.85
}
const precio=200;

const calcular= (cantidad,descuento) => precio *cantidad* descuento;
const resumen = (e) => {
    const inputCant = document.querySelector("input[name='cantidad']");// como selecionar por name.
    const cantidad= parseInt(inputCant.value);
    const inputDesc = document.querySelector("select[name='descuento']");
    const opcion= inputDesc.value;
    const descuento = descuentos[opcion]
    const total = calcular(cantidad,descuento);
    const label =document.getElementById("labelT");
    label.innerText= "Total a pagar $" + total;

}
const borrar = (e) => {
    const nombre= document.getElementById("nombre");
    nombre.value="";
    const apellido=document.getElementById("apellido");
    apellido.value=""
    const mail=document.getElementById("email");
    mail.value="";
    const cantidad=document.getElementById("cantidad");
    cantidad.value= 0;
    const categoria=document.getElementById("categoria");
    categoria.value= "";
    const total=document.getElementById("labelT");
    total.innerText = "Total a pagar $";
}

