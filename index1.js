var q1 = document.querySelector(".card");
q1.addEventListener("click", function () {
  document.body.style.backgroundImage = 'url("confetti.jpg")';
});
/*const  btn64= document.getElementsByClassName('button-64 ');
  const btnGroup1 = document.getElementsById('btnGroup');

  btn64.addEventListener('click', () => {
    btn64.style.display = 'none';
    btnGroup1.style.display = 'block'; 
   });*/
   function showButtons() {
    document.querySelector('.button-64').style.display = 'none';
    document.getElementById('button1').classList.remove('hidden');
    document.getElementById('button2').classList.remove('hidden');
    document.getElementById('button1').classList.add('highlighted');
    document.getElementById('button2').classList.add('highlighted');
  }
    
    