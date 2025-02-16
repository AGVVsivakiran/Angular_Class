//hidden popup
show=false;
//On click show popup
openpopup(){
  this.show=true;
}
//on click on close, popup will close
closepopup(){
this.show=false;
}
// if we write this code  ( this.show=false; ) it will close when we click on any where in the overlay(class) box
}
// Listen for Escape key press and close the popup
@HostListener('document:keydown.escape')
closeOnEscape() {
  this.show = false;
  //here add import { HostListener } from '@angular/core';

}
