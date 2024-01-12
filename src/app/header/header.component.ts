import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  navbarVisible: boolean = true;
  isSearchBoxExpanding: boolean = false;
  dropdownVisible: boolean = false;
  userProfileImageUrl = "https://play-lh.googleusercontent.com/KQyO1eE9c1nGD5EnHMEtA6pafHgnl6Vhgcarr3689fST8eYsU-f11GEDevwieynh5A=w240-h480-rw";

  constructor(private router: Router, private eRef: ElementRef) {}

  @ViewChild('searchBox') searchBox!: ElementRef;
  @ViewChild('dropdownMenu', { static: false }) dropdownMenu!: ElementRef;
  @ViewChild('dropdownToggle', { static: false })
  dropdownToggle!: ElementRef;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: { target: any; }) {
    if (this.dropdownVisible && !this.dropdownMenu.nativeElement.contains(event.target) &&
        !this.dropdownToggle.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    this.dropdownVisible = false;
    console.log('clicked outside');
  }

  hideNavbar() {
    this.navbarVisible = false;
    this.isSearchBoxExpanding = true;
  }

  beginSearchBoxShrink() {
    this.isSearchBoxExpanding = false;
    this.navbarVisible = true;
  }

  handleTransitionEnd(event: TransitionEvent) {
    if(event.propertyName === 'width' && !this.isSearchBoxExpanding) {
      this.navbarVisible = true;
    }
  }

  onLoginClick() {
    this.router.navigate(['/login']);
  }

  onRegisterClick() {
    this.router.navigate(['/register']);
  }

  isUserAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !!token;
  }

  onLogoutClick() {
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }

}
