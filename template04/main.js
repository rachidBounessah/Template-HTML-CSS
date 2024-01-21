let targets = document.querySelector('.wrapper')


let spans = document.querySelectorAll('.progress > span')
let spanW = document.querySelectorAll('.progress > span span')
console.log(spanW)

// window.onscroll=_=>{
//     if( window.scrollY > targets.offsetTop){
//         spans.forEach((span,i)=>{
//             span.style.width = span.dataset.width; 
            
//         })

//     }
// }


window.onload=_=>{

        spans.forEach((span)=>{
            span.style.width = span.dataset.width; 
            
        })

    
}

