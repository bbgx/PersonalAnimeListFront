import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [HttpClientModule],
    imports: [CommonModule, RouterOutlet, HttpClientModule, HeaderComponent]
})
export class AppComponent {
  title = 'WeebWatchList';
}
