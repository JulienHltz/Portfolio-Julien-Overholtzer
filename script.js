const navBar = document.querySelector('nav')

window.addEventListener('scroll', () => {
    navBar.classList.toggle('sticky', window.scrollY > 0);
});

window.addEventListener('scroll', () => {
    navBar.classList.toggle('fixed', window.scrollY > 0);
});

// Animation Scroll (Workdiv)

function reveal() {
    var reveals = document.querySelectorAll('span');
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
    
    var colorslide = document.querySelectorAll('.workdiv h1');
    
    for (var i = 0; i < colorslide.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = colorslide[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        colorslide[i].classList.add("workdivh1");
      } else {
        colorslide[i].classList.remove("workdivh1");
      }
    }

    var containersmove = document.querySelectorAll('.containers')

    for (var i = 0; i < containersmove.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = containersmove[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          containersmove[i].classList.add("containersactive");
        } else {
          containersmove[i].classList.remove("containersactive");
        }
      }
  }
  
  window.addEventListener("scroll", reveal);

let burger = document.querySelector('.containerburger');

burger.addEventListener('click' , () =>{
  let nav = document.querySelector('nav');
  if(nav.style.display=='block'){
    nav.style.display='none';
  }
  else{
    nav.style.display='block';
  }

})

