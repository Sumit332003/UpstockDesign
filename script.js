 

 
function Dom(){
    var video = document.querySelector("#video1");
    var video2 = document.querySelector("#video2");
    var video3 = document.querySelector("#video3");
    var video4 = document.querySelector("#video4");
    var video5 = document.querySelector("#video5");
    var btn = document.querySelector("button");
    // var lik = document.querySelector(".like");
   var i=0; 
 
    btn.addEventListener("click",function(){
        if(i==0){
            video.style.marginTop ="-75vh";
            video.style.transition=".7s";
            i=1;
        }
        else if(i==1){
            video2.style.marginTop ="-75vh";
            video2.style.transition=".7s";
            i=3;
        }
        else if(i==3){
            video3.style.marginTop ="-75vh";
            video3.style.transition=".7s";
            i=4;
        }
        else if(i==4){
            video4.style.marginTop ="-75vh";
            video4.style.transition=".7s";
           i=0;
        }
      
   
        

    
        
    })
    

    // lik.addEventListener("click",function(){
    //     lik.style.transition=".9s";
    //     lik.style.backgroundColor = "red";
    //     lik.style.border = "1px solid transparent";
       
        
    // })


}
Dom();


function anim(){

var g = gsap.timeline();

g.from(".txtContaner h1",{
    delay:.8,
    y:100,
    // duration:.6,
    opacity:0,
    stagger:.1,
   
})
g.to(".papaCont",{
    height:"200px",
})
// g.to(".txtContaner h1",{
    
//     fontSize:" 4vw",
// })
g.to(".leftVideoConta",{
    delay:.8,
    duration:2,
    width:"50vw",

    // ease:esing,
    display:"flex",
 
})

g.to(".txtbottomCon",{
    duration:1,
    display:"flex",

})
g.from(".textCont h3",{
    y:100,
    stagger:.2,
    duration:.7,
    opacity:0,
})
g.from(".videoContaner",{
    y:100,
    duration:1,
    opacity:0,
})
g.to("button",{
   
    opacity:1,
})
g.to(".parent",{
    backgroundColor:"black",
    color:"white",
})
}
anim();

