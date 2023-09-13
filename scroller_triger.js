var v2 = gsap.timeline()
v2.from(".page1 .box",{
    scale:0,
    rotate:360,
    duration:1,
})


v2.from(".page2 .box",{
    scale:0,
    rotate:360,
    duration:3,
    scrollTrigger:
    {
        trigger:".page2 .box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true
    }
})


v2.from(".page3 .box",{
    scale:0,
    rotate:360,
    duration:3,
    scrollTrigger:
    {
        trigger:".page3 .box",
        scroller:"body",
        // markers:true,
        // start:"top 60%",
        // end:"top 30%",
        scrub:true
    }
})

