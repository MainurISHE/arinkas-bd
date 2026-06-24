import { Component, ElementRef, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-music-player',
  standalone: true,
  templateUrl: './music-player.html',
  styleUrl: './music-player.scss'
})
export class MusicPlayerComponent {

  @ViewChild('audio')
  audio!: ElementRef<HTMLAudioElement>;

  isPlaying = signal(false);

  toggleMusic() {

    const player = this.audio.nativeElement;

    if (this.isPlaying()) {

      player.pause();
      this.isPlaying.set(false);

      return;
    }

    player.play();
    this.isPlaying.set(true);

  }

}