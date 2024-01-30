const slide = document.querySelectorAll(".slide")
var counter = 0;

slide.forEach(
    (slide, index)=>{
        slide.computedStyleMap.left =`${index * 100}%`
    }
)

const goprev=()=>{
    counter--
    slideImage()
}
const gonext=()=>{
    counter++
    slideImage()
}

const slideImage =()=>{
    slide.forEach(
        (slides)=>{
            slides.style.transform =`translateX(-${counter *100}%)`
        }
    )
}