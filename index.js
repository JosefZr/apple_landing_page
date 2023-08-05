let image = document.querySelector('.main-image');
let otherphones = document.querySelectorAll('.choices .phones img');
let landing = document.querySelector('.landing');
let bodyColor = document.querySelector('body');
let textOpen = document.querySelectorAll('.menu li a');

otherphones.forEach(phone => {
    phone.addEventListener('click', event => {
        image.src = event.target.src;
    });
});

otherphones.forEach(phone => {
    phone.addEventListener("click", event => {
        landing.style.background = event.target.dataset.color;
        let textColor = event.target.dataset.body;
        bodyColor.style.color = textColor;
        textOpen.forEach(link => {
            link.style.color = textColor;
        });
    });
});

//start burger icon

let burger =document.querySelector('.burger .toggle-menu ');
let tlinks = document.querySelector('.navbar .menu');

burger.onclick = function(e){
  
    //stop propagation
    e.stopPropagation();
    
    //toggle class "open" on botton
    this.classList.toggle("menu-active");
  
    //toggle class "open" on links
    tlinks.classList.toggle("open");
  };
  document.body.addEventListener('click', function () {
    burger.classList.remove("menu-active");
    tlinks.classList.remove("open");
});
//click anywhere outside menu and toggle
document.addEventListener("click",(e)=>{
    if(e.target !== burger  && e.target!== tlinks ){
  
      //check if menu is open 
      if(tlinks.classList.contains("open")){
          //toggle class "open" on botton
          togglebtn.classList.toggle("menu-active");
  
          //toggle class "open" on links
          tlinks.classList.toggle("open");
      }
    }
  })
  //stop propagation on the manu links
  tlinks.onclick = function(e){
    e.stopPropagation();
  }