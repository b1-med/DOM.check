var tot=0;
var item1=120;
var item2=80;
var item3=54;
var item4=9.99;
var item5=5.99;




const num= document.getElementById("number");
    var num1 =0 ;
    const sum1=0;
    var click= document.getElementById("plus");
    click.addEventListener('click', ()=> {
        localStorage.setItem("number" , num1=num1+1)
        if (num1 >= 0){ 
        document.getElementById('number').innerHTML= num1;
        }else{num1=0}
        console.log(num1)
        total(item1)
    })
    var click2= document.getElementById("-")
    click2.addEventListener('click', ()=> {
        localStorage.setItem("number" , num1=num1-1)
        if (num1 >= 0){  
        document.getElementById('number').innerHTML= num1 ;
        console.log(num1)
        }else{num1=0}
        console.log(num1)
        total(-item1)
    })

    var click3=document.getElementById('delete1')
    click3.addEventListener('click', ()=> {
        total(-item1*num1)
        localStorage.setItem("number" , num1=0)
        document.getElementById('number').innerHTML= num1;
    })
    var x=document.getElementById('number')
    
    
    



var num2= document.getElementById("number2")
    num2= 0 
    var sum2=0
    var click= document.getElementById("plus2")
    click.addEventListener('click', ()=> {
        localStorage.setItem("number2" , num2=num2+1)
        if (num2 >= 0){ 
        document.getElementById('number2').innerHTML= num2;
        }else{num2=0}
        total(item2)
    })
    var click2= document.getElementById("-2")
    click2.addEventListener('click', ()=> {
        localStorage.setItem("number2" , num2=num2-1)
        if (num2 >= 0){ 
        document.getElementById('number2').innerHTML= num2 ;
        }else{num2=0}
        total(-item2)
    })
    var click3=document.getElementById('delete2')
    click3.addEventListener('click', ()=> {
        total(-item2*num2)
        localStorage.setItem("number2" , num2=0)
        document.getElementById('number2').innerHTML= num2;
        
    })



var num3= document.getElementById("number3")
    num3= 0 
    var sum3=0
    var click= document.getElementById("plus3")
    click.addEventListener('click', ()=> {
        localStorage.setItem("number3" , num3=num3+1)
        if (num3 >= 0){ 
        document.getElementById('number3').innerHTML= num3;
        }else{num3=0}
        total(item3)
    })
    var click2= document.getElementById("-3")
    click2.addEventListener('click', ()=> {
        localStorage.setItem("number3" , num3=num3-1)
        num3=parseInt(num3)
        if (num3 >= 0){ 
        document.getElementById('number3').innerHTML= num3 ;
        }else{num3=0}
        total(-item3)
    })
    var click3=document.getElementById('delete3')
    click3.addEventListener('click', ()=> {
        total(-item3*num3)
        localStorage.setItem("number3" , num3=0)
        document.getElementById('number3').innerHTML= num3;
       
    })






    var num4= document.getElementById("number")
    num4= 0 
    var sum4=0
    var click= document.getElementById("plus4")
    click.addEventListener('click', ()=> {
        localStorage.setItem("number4" , num4=num4+1)
        if (num4 >= 0){ 
        document.getElementById('number4').innerHTML= num4;
        }else{num4=0}
        total(item4)
    })
    var click2= document.getElementById("-4")
    click2.addEventListener('click', ()=> {
        localStorage.setItem("number4" , num4=num4-1)
        if (num4 >= 0){ 
        document.getElementById('number4').innerHTML= num4 ;
        }else{num4=0}
        total(-item4)
    })
    var click3=document.getElementById('delete4')
    click3.addEventListener('click', ()=> {
        total(-item4*num4)
        localStorage.setItem("number4" , num4=0)
        document.getElementById('number4').innerHTML= num4;
        
    })



    var num5= document.getElementById("number5")
    num5= 0 
    var sum5=0
    var click= document.getElementById("plus5")
    click.addEventListener('click', ()=> {
        localStorage.setItem("number5" , num5=num5+1)
        if (num5 >= 0){ 
        document.getElementById('number5').innerHTML= num5;
        }else{num5=0}
        total(item5)
    })
    var click2= document.getElementById("-5")
    click2.addEventListener('click', ()=> {
        localStorage.setItem("number5" , num5=num5-1)
        num5=parseInt(num5)
        if (num5 >= 0){ 
        document.getElementById('number5').innerHTML= num5 ;
        }else{num5-=0}
        total(-item5)
    })
    var click3=document.getElementById('delete5')
    click3.addEventListener('click', ()=> {
        total(-item5*num5)
        localStorage.setItem("number5" , num5=0)
        document.getElementById('number5').innerHTML= num5;
        
    })
    
function total(x){
    var dp=5;
    tot=tot+x
    
    document.getElementById('tot').innerHTML=  "&euro;"+ tot ;
    var price=tot+dp
    document.getElementById('price').innerHTML=  "&euro;"+ price ;

}

var nbr=0
function coloring(clicked){
    
    let button=document.getElementById(clicked);
    
    button.addEventListener('click', ()=> {
        
        localStorage.setItem(clicked , nbr=nbr+1)
        console.log(nbr)
        if(nbr%2 == 0){
            button.style.color='rgb(172, 103, 103)'
        }else{
            button.style.color='black'
        }
    })
    
} //you have to double click on it ......it's just this way cause it's easier 


    