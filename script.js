
preLoader()
function preLoader(){
    var tl = gsap.timeline();
    tl.to(".preLoader-front", {
        duration: 1.2,
        height:"100%",
        top: "-100%",
        ease: "Expo.easeInOut",
    });

    tl.to(".preLoader-front", {
        duration: 1,
        width: "100%",
        top: "-200%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.to(".preLoader-back", {
        duration: 1,
        width: "100%",
        top: "-200%",
        ease: "Expo.easeInOut",
        delay: -1
    });
    
    
}

var box = document.querySelector(".box");

box.addEventListener("click", function(e){
    console.log("hello")
    
   
    
})

