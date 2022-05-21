/* Parallax effect */

let cloud =  document.querySelectorAll(".header__cloud")
/* console.log(cloud); */

window.addEventListener("scroll", (e) => {
   /*  console.log(window.scrollY); */
   
   cloud.forEach(clouds => {
    //    console.log(clouds);
    let speed = clouds.getAttribute("data-speed")
       
       clouds.style.transform = `translate(-${window.scrollY}px)`
   })
})

let moon = document.querySelectorAll(".header__moon")
window.addEventListener("scroll", (y) => {
    moon.forEach(moons => {
        let speed = moons.getAttribute("data-speed")
        moons.style.transform = `translateY(-${window.scrollY / speed}%)`
    })
})

// trees start

let arca1 = document.querySelector(".header__arca1")

window.addEventListener("scroll", (y) => {
    let speed = arca1.getAttribute("data-speed")
    arca1.style.transform = `translateX(${window.scrollY / speed}%)`
})


let arca2 = document.querySelector(".header__arca2")

window.addEventListener("scroll", (y) => {
    let speed = arca2.getAttribute("data-speed")
    arca2.style.transform = `translateX(${window.scrollY / speed}%)`
})


let arca3 = document.querySelector(".header__arca3")

window.addEventListener('scroll', (y) => {
    let speed = arca3.getAttribute("data-speed")
    arca3.style.transform = `translateX(-${window.scrollY / speed}%)`
})


let arca4 = document.querySelector(".header__arca4")

window.addEventListener('scroll', (y) => {
    let speed = arca4.getAttribute("data-speed")
    arca4.style.transform = `translateX(-${window.scrollY / speed}%)`
})


// trees end


/* Parallax efect end */