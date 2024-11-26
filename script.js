gsap.to("#nav",{
    backgroundColor:"#000",
    height:"130x",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,

    }
})