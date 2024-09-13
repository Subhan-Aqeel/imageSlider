const images = document.querySelectorAll('.image')
const slider = document.querySelector("#slide")
const left = document.querySelector("#left")
const right = document.querySelector("#right")

var count = 1;

right.addEventListener("click",()=>{
   if (count < images.length ) {
      slider.style.transform = `translateX(-${count*450}px)` 
      count++
   }else{
      slider.style.transform = `translateX(0px)`
      count = 1 
   }
})
left.addEventListener('click',()=>{
   if (count > 1) {
    slider.style.transform = `translateX(-${(count-2) * 450}px)`
    count--
   }else{
    slider.style.transform = `translateX(-${-(images.length - 1)*450}px)`
    count = images.length
   }
})


