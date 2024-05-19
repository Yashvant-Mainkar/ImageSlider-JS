const slides = document.querySelectorAll(".slide")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")

let counter = 0
console.log(slides)

slides.forEach((slide,index)=>{
        slide.style.left = `${index*100}%`
})
function Stop(){
    if(counter === 3){
        nextBtn.style.display = "none"
    }
}
function ComeBack(){
    if(counter !== 4){
        nextBtn.style.display = "inline"
    }
}

function goNext(){
    counter++
    Stop()
    slideImage()
}
function goPrev(){
    ComeBack()
    counter--
    slideImage()
}

 function slideImage(){
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
 }
 
