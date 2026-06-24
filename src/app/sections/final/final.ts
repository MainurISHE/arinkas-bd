import { Component, signal } from '@angular/core';
import confetti from 'canvas-confetti'

@Component({
  selector: 'app-final',
  standalone: true,
  templateUrl: './final.html',
  styleUrl: './final.scss'
})
export class FinalComponent {

  showMessage = signal(false);

  showSurprise() {

    this.showMessage.set(true);

    confetti({
      particleCount: 180,
      spread: 120,
      origin: {
        y: 0.6
      }
    });

  }

}