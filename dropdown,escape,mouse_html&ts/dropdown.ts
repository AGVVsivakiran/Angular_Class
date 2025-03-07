import { Component, inject, ViewChild, ElementRef, HostListener } from '@angular/core';
export class YourComponent {
//flag dropdown
flagdropdown=false;
@ViewChild('dropdownContainer', { static: false }) dropdownContainer!: ElementRef;
patientflag(){
this.flagdropdown=!this.flagdropdown;
}
// Detect clicks outside the dropdown container
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.flagdropdown && this.dropdownContainer && !this.dropdownContainer.nativeElement.contains(event.target)) {
      this.flagdropdown = false;
    }
  }

  // Detect Escape key press to close the dropdown
  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.flagdropdown = false;
  }
}