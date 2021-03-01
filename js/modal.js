 let imagenes = document.querySelectorAll('.gallery-img');
 let modal = document.querySelector('#modal');
 let img = document.querySelector('#modal-img');
 let btn = document.querySelector('#modal-btn');

 for(let i = 0; i < imagenes.length; i++){
     imagenes[i].addEventListener('click', function(e){
         modal.classList.toggle("modal-open");
         let src = e.target.src;
         img.setAttribute("src",src);
     });
 }

 btn.addEventListener('click', function(){
    modal.classList.toggle("modal-open");
 });



 