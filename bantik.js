let aa = '';
document.addEventListener("click", function(isit) {

    the_class = isit.target.className;
    
    the_id = isit.target.id;
    
    if (the_class =="get_value")
    
    {
    
     aa = document.querySelector("#"+the_id ).value;
    
    }
    
    });







const xd = document.querySelector('.knopka');
xd.addEventListener("click",function(){
    let aa1 = document.querySelector('h3');
    console.log ("ФИО студента:",aa1.textContent);
    let d = document.querySelector('.kyrs').value;
    console.log("Курс:",d);
    let e = document.querySelector('.napravlenia').value;
    console.log("Направление:",e);
    let b = document.querySelector('.vvod').value;
    console.log("Группа:",b);
    let f = document.querySelector('.t').value;
    console.log("Номер телефона:",f);
    let g = document.querySelector('.e').value;
    console.log("Почта:",g);
    let h = document.querySelector('.predmet').value;
    console.log("Предмет для сдачи:",h);
 
   let a = document.querySelector('.vvod1').value;
   console.log("ФИО преподавателя:",a);
   let c = document.querySelector('.vvod2').value;
   let j = document.querySelector('.vvod3').value;
   console.log("Дата сдачи:",c,j);
   let k = document.querySelector('.vremya').value;
   console.log("Время сдачи:",k); 
   console.log("Форма сдачи:",aa);





//    if (m.value="ochnaya"){
//        console.log('Очная');
//    }
//    else{
//        console.log ('очн');
//    }
//    }
//    let m = document.querySelector('.sdacha');
//    console.log(m);
})