let circle = document.querySelector('#circle');

window.addEventListener('mousemove',function(details){

    let xValue = details.pageX;
    let yValue = details.pageY;

    setTimeout(function(){
        circle.style.left = xValue +'px';
        circle.style.top = yValue + 'px';
    },100)
  
})

$('.navbar p').textillate({
    in:{
        effect:'fadeInUp'
    },
    loop:true,
    out:{
        effect:'fadeOutRight'
    }
})

$('.down .text p').textillate({
    autoStart:false,
    in:{
        opacity:0,
        effect:'fadeInUp',
        delay:15,
        toggleActions:'play pause resume reverse'

    },
    callback:function(){
        gsap.fromTo('.text img',{
            opacity:0,
            y:-10,
            duration:2,
            ease:'Expo.easeInOut'
        },{
            opacity:1,
            y:0
        })
    }
})
gsap.to('.fader',{
    scrollTrigger:{
        trigger:'.down',
        start:'top 12% ',
        toggleActions:'play pause resume reverse'
    },
    opacity:0,
    y:-100,
    duration:2,
    onComplete:function(){
    $('.down .text p').textillate('start')        
    }
})


