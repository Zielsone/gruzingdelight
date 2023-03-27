document.addEventListener('DOMContentLoaded', function(){


    const navi = document.querySelector('.navbar-nav')

    function scr1(){
        window.scrollY =1;
    }

    function addShadow(){
        if(window.scrollY >=0){
            navi.classList.add('shadow-bg');
        }
        else{
            navi.classList.remove('shadow-bg');
        }
    }

    scr1();
   addShadow();

    function scr1(){
        window.scrollY =1;
    }










})