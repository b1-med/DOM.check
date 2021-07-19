
let carts= document.querySelectorAll('.add-cart');
for ( var i=0; i < carts.length; i++) {
    carts[i].addEventListener('click' , ()=> {
        cartnumber();
    })
}
function cartnumber () {
    var productnumber=localStorage.getItem('cartnumber')
    productnumber= parseInt(productnumber)
    
    if (productnumber) {
        localStorage.setItem ('cartnumber', productnumber +1)
      } else {
        localStorage.setItem ('cartnumber', productnumber )
      }
}