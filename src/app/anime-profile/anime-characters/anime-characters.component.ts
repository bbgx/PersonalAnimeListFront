import {
  CommonModule
} from '@angular/common';
import {
  Component
} from '@angular/core';
import { ScrollableListComponent } from '../../scrollable-list/scrollable-list.component';

@Component({
  selector: 'app-anime-characters',
  standalone: true,
  imports: [CommonModule, ScrollableListComponent],
  templateUrl: './anime-characters.component.html',
  styleUrl: './anime-characters.component.scss'
})
export class AnimeCharactersComponent {
  characters = [{
      name: 'Black, Jet',
      role: 'Main',
      image: 'https://cdn.myanimelist.net/images/characters/11/253723.jpg?s=6c8a19a79a88c46ae15f30e3ef5fd839',
      voiceActor: {
        name: 'Ishizuka, Unshou',
        image: 'https://cdn.myanimelist.net/images/voiceactors/2/17135.jpg?s=5925123b8a7cf9b51a445c225442f0ef',
        language: 'Japanese'
      }
    },
    {
      name: 'Character name',
      role: 'Main',
      image: 'https://i.pinimg.com/originals/33/6c/17/336c17be22afdd9d059ea80afe2336b2.jpg',
      voiceActor: {
        name: 'Voice Actor Name',
        image: 'https://static.wikia.nocookie.net/cowboybebop/images/2/23/Koichi_yamadera.jpg/',
        language: 'Japanese'
      }
    },
  ];
}
