
let secStats= document.querySelector('.stats')
let numStats= document.querySelectorAll('.stats .box .number')
let started =true;
//###################################

let secOurskil = document.querySelector('.our-skills')
let skill = document.querySelectorAll('.skill .the-progress span')
let span = document.querySelectorAll('.skill h3 span')
console.log(span)


window.onscroll=_=>{

    if(window.scrollY >= secOurskil.offsetTop -200 ){

        skill.forEach(skil=>{
            skil.style.width=`${skil.dataset.width}%`;
        })

    }
    if(window.scrollY >= secStats.offsetTop){
        numStats.forEach(num=>{

            if(started){
                let goal = num.dataset.goal;
                let count =setInterval(()=>{
                    num.textContent++
                    if(num.textContent === goal){
                        clearInterval(count)
                    }
                },2000/goal)
            }

        })
        started=false;
    }
}




let countDowDate = new Date("Oct 28, 2023 23:59:59").getTime()

let counter = setInterval(_=>{
    let dateNow = new Date().getTime()
    let dateDif = countDowDate - dateNow
    
    let days =Math.floor(dateDif / (1000*60*60*24))
    let hours =Math.floor(dateDif % (1000*60*60*24) / (60*60*1000))
    let minutes =Math.floor(dateDif % (1000*60*60) / (60*1000))
    let seconds =Math.floor(dateDif % (1000*60) / 1000)


    
    document.querySelector('.days').innerHTML=days<10? `0${days}`:days
    document.querySelector('.hours').innerHTML=hours<10? `0${hours}`:hours
    document.querySelector('.minutes').innerHTML=minutes<10? `0${minutes}`:minutes
    document.querySelector('.seconds').innerHTML=seconds <10? `0${seconds}`:seconds

},1000)