import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { MusicPlayerComponent } from './shared/music-player/music-player';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MusicPlayerComponent,
    Home
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}