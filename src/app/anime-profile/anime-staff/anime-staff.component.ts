import { Component } from '@angular/core';
import { ScrollableListComponent } from '../../scrollable-list/scrollable-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anime-staff',
  standalone: true,
  imports: [ CommonModule, ScrollableListComponent ],
  templateUrl: './anime-staff.component.html',
  styleUrl: './anime-staff.component.scss'
})
export class AnimeStaffComponent {
  staff = [{
    name: 'Cook, Justin',
    role: 'Producer / Director',
    image: 'https://cdn.myanimelist.net/images/voiceactors/2/12472.jpg',
  },
  {
    name: 'Maseba, Yutaka',
    role: 'Producer',
    image: 'https://cdn.myanimelist.net/images/voiceactors/3/40216.jpg',
  },
];
}
