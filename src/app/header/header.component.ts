import { Component, ElementRef, ViewChild } from '@angular/core';
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

  constructor(private router: Router) {}

  @ViewChild('searchBox') searchBox!: ElementRef;

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

}
