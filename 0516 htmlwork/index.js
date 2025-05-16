

/*오류발생
let menu=document.getElementsByTagName("li");
console.log(menu);
 menu.forEach(element => {
     console.log(element);
 });
*/

let menu = document.querySelectorAll("li");
console.log(menu);

/*
menu.forEach(element =>{
    console.log(element) //출력이 안 됨
    
})
*/
/*
menu.forEach(function(element){

});
*/


menu.forEach(element =>{
    console.log(element) //출력이 안 됨 => script taf defer 추가
    element.addEventListener("click",()=>{
        //console.log(element.innerText)
        console.log(`${element.innerText}.html`)
        fetch(`${element.innerText}.html`)
        .then(resp => resp.text())
        .then(result=>{
            let main = document.querySelector("main");
            main.innerHTML=result;
        })
    });    
})

/*menu.forEach(element =>{
    console.log(element) //출력이 안 됨
    element.addEventListener("click",function()=>{
        
    });    
})
*/