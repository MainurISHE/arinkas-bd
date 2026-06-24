import { Component } from '@angular/core';
import { AuroraBackgroundComponent } from '../../shared/components/aurora-background/aurora-background';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AuroraBackgroundComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

}