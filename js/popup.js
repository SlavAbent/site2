function Popup(){
    this.modal = document.querySelector('.modal');
    this.overlay = document.querySelector('.overlay');
    var popup = this;
    this.open = function(content){
      popup.modal.innerHTML = content;
      popup.modal.classList.add('open');
      popup.overlay.classList.add('open');
    }
    this.close = function(){
      popup.overlay.classList.remove('open');
      popup.modal.classList.remove('open');
    }
    this.overlay.onclick = popup.close;
}

window.onload = function(){
  var p = new Popup();
  setTimeout(function(){ 
    p.open('<h2>WELCOME TO THE UNIVERSE!</h2><h2>WELCOME TP PATHFINDER INITIATIVE</h2>');
  }, 3000);
}