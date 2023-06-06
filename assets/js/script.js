// ====== NAVBAR ======

var iconBars = document.querySelector('.icon-bars');
var navBar = document.querySelector('.nav-bar');

iconBars.addEventListener('click', () => {
  navBar.classList.toggle("active")
})

// ====== END NAVBAR ======

window.addEventListener('scroll', function(){
  var card = document.querySelectorAll('.fade-up')
  
  for (var i = 0; i < card.length; i++) {
    var distance = card[i].getBoundingClientRect().top;
    var height = window.innerHeight/1.3;
    
    card[i].classList.add('transform-up');

    if(distance <= height){
      card[i].classList.add('show-card')
      return;
    }
    else {
      card[i].classList.remove('show-card')
    }
    
  }
})