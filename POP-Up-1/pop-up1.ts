import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

export class YourComponent {
  flagimageprimary = false;

  @ViewChild('dropdownContainer', { static: false }) dropdownContainer!: ElementRef;

  constructor(private eRef: ElementRef) {}

  flagprimary() {
    this.flagimageprimary = !this.flagimageprimary;
  }

  // Close dropdown when clicking outside the whole input group
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (
      this.flagimageprimary && 
      this.dropdownContainer &&
      !this.dropdownContainer.nativeElement.contains(event.target)
    ) {
      this.flagimageprimary = false;
    }
  }

  // Close dropdown on Escape key press
  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.flagimageprimary = false;
  }
}
