function stickyNav(){
    const nav = document.querySelector('nav');
    var offsetNav = nav.offsetTop;

    window.addEventListener("scroll", function(){
        var scrollPosition = window.scrollY;

        if(scrollPosition >= offsetNav){
            nav.classList.add('sticky')
        } else{
            nav.classList.remove('sticky')
        }
    })
}

function showMenu(){
    const iconMenu = document.querySelector(".icon-menu");
    const NavUl = document.querySelector(".NavUl");

    let isOpen = false;

    iconMenu.addEventListener("click", function(){
        
        if(isOpen == false){
            NavUl.style.display = "flex";
            isOpen = true;
        } else{
            NavUl.style.display = "none";
            isOpen = false;
        }
    })

    window.addEventListener("resize", function(){
        windowSize = window.innerWidth;

        if(windowSize > 650){
            NavUl.style.display = "flex";
        }
    })
}



function gallery(){
    const full = document.querySelector('#full');
    const full_img = document.querySelector('#full_img');
    const exit = document.querySelector('#exit');
    const allPhoto = document.querySelectorAll('.gallery img');

    function disableScroll() {
        TopScroll = window.pageYOffset || document.documentElement.scrollTop;
        LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
        
        window.onscroll = function() {
        window.scrollTo(LeftScroll, TopScroll);
            };
        }
        
        function enableScroll() {
        window.onscroll = function() {};
        }


    for(let photo of allPhoto){
        photo.addEventListener("click", function(){
            full.style.display = 'flex';
            full_img.src = photo.src;
            disableScroll();
        })
    }

    exit.addEventListener("click", function(){
        full.style.display = 'none';
        enableScroll();
    })
}


window.onload = function(){
    stickyNav();
    showMenu();
    gallery();
}