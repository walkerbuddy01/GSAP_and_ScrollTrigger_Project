


let counter = document.querySelector(".line1-part h5");
let count = 0;
let tl = gsap.timeline();
tl.from(".line h1", {
    y: 500,
    duration: 0.8,
    delay: 0.1,
    stagger: 0.15
})
tl.from(".line h2, .line1-part h6", {
    opacity: 0,
    duration: 0.6,
    onStart: () => {
        const interval = setInterval(() => {
            if (counter.innerText < 100) {
                counter.innerText = count++
            }
        }, 35)
        setTimeout(() => {
            clearInterval(interval);
        }, 4800)
    }

})



tl
    .to(".line h1, .line h2,.line1-part h5, .line1-part h6 ", {
        opacity: 0,
        duration: 0.8,
        delay: 3.2,
        stagger: 0.15
    })
    .to(".loader", {
        y: "-100%",
        duration: 0.7,
        delay: 0,
    })
    .to(".loader", {
        display: "none",
        duration: 0
    })


















wordSlidingLoader();

