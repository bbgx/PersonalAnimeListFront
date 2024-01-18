import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scrollable-list',
  standalone: true,
  imports: [ FontAwesomeModule ],
  templateUrl: './scrollable-list.component.html',
  styleUrl: './scrollable-list.component.scss'
})
export class ScrollableListComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  @Input()
  containerSelector!: string;

  scrollLeft() {
    const container = document.querySelector(this.containerSelector);
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }

  scrollRight() {
    const container = document.querySelector(this.containerSelector);
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }
}
