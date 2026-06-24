import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Gallery } from '../../sections/gallery/gallery';
import { Congratulation } from '../../sections/congratulation/congratulation';
import { FinalComponent } from '../../sections/final/final';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Gallery, Congratulation, FinalComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
