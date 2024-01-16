import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private searchTerms = new Subject<string>();
  searchResults: any[] = [];
  faMagnifyingGlass = faMagnifyingGlass;
  navbarVisible: boolean = true;
  isSearchBoxExpanding: boolean = false;
  dropdownVisible: boolean = false;
  userProfileImageUrl = "https://play-lh.googleusercontent.com/KQyO1eE9c1nGD5EnHMEtA6pafHgnl6Vhgcarr3689fST8eYsU-f11GEDevwieynh5A=w240-h480-rw";
  showSearchResultsDropdown!: boolean;

  constructor(private router: Router, private http: HttpClient) {}

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

  searchAnime(term: string): void {
    if (term) {
      this.showSearchResultsDropdown = true;
      this.searchTerms.next(term);
    } else {
      this.showSearchResultsDropdown = false;
    }
  }

  hideSearchResults() {
    this.showSearchResultsDropdown = false;
  }

  showSearchResults(value: string) {
    if (value) {
      this.searchAnime(value);
    }
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.http.get(`https://localhost:7012/api/v1/Anime?Q=${term}&limit=5`)),
    ).subscribe(results => {
      this.searchResults = (results as any).data;
      console.log(results);
    })
  }

  hideNavbar() {
    this.navbarVisible = false;
    this.isSearchBoxExpanding = true;
  }

  beginSearchBoxShrink() {
    this.isSearchBoxExpanding = false;
    this.navbarVisible = true;
  }

  expandSearchBox() {
    this.isSearchBoxExpanding = true;
  }

  handleTransitionEnd(event: TransitionEvent) {
    if(event.propertyName === 'width' && !this.isSearchBoxExpanding) {
      this.navbarVisible = true;
    }
  }

  handleSearchBoxTransitionEnd() {
    if (this.isSearchBoxExpanding && this.searchBox.nativeElement.value && this.searchResults.length > 0) {
      this.showSearchResultsDropdown = true;
    }
    this.isSearchBoxExpanding = false;
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
