import {
  CommonModule
} from '@angular/common';
import {
  Component, OnInit
} from '@angular/core';
import { ScrollableListComponent } from '../../scrollable-list/scrollable-list.component';
import { AnimeCharacterService } from '../../anime-character.service';

interface VoiceActor {
  id: number;
  name: string;
  language: string;
  voiceActorImage: string;
}

interface Character {
  id: number;
  animeId: number;
  name: string;
  role: string;
  characterImage: string;
  voiceActors: VoiceActor[];
}

@Component({
  selector: 'app-anime-characters',
  standalone: true,
  imports: [CommonModule, ScrollableListComponent],
  templateUrl: './anime-characters.component.html',
  styleUrl: './anime-characters.component.scss'
})
export class AnimeCharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: AnimeCharacterService) { }

  ngOnInit() {
    const animeMalId = 1;
    this.characterService.getCharactersByAnimeMalId(animeMalId).subscribe( data => {
      this.characters = data.map((character: { voiceActors: any[]; }) => ({
        ...character,
        voiceActors: character.voiceActors.filter((va: { language: string; }) => va.language === 'Japanese')
      }));
    }, error => {
      console.log(error);
    })
  }
}
