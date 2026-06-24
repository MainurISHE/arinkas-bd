import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { GalleryImage } from './gallery.types';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Gallery implements AfterViewInit {
  @ViewChild('swiperContainer')
  swiperContainer!: ElementRef;

  images: GalleryImage[] = [
    {
      id: 1,
      image: 'assets/images/gallery/photo1.jpg',
      alt: 'Арина 1',
    },
    {
      id: 2,
      image: 'assets/images/gallery/photo2.jpg',
      alt: 'Арина 2',
    },
    {
      id: 3,
      image: 'assets/images/gallery/photo3.jpg',
      alt: 'Арина 3',
    },
    {
      id: 4,
      image: 'assets/images/gallery/photo4.jpg',
      alt: 'Арина 4',
    },
    {
      id: 5,
      image: 'assets/images/gallery/photo5.jpg',
      alt: 'Арина 5',
    },
    {
      id: 6,
      image: 'assets/images/gallery/photo6.jpg',
      alt: 'Арина 6',
    },
    {
      id: 7,
      image: 'assets/images/gallery/photo7.jpg',
      alt: 'Арина 7',
    },
    {
      id: 8,
      image: 'assets/images/gallery/photo8.jpg',
      alt: 'Арина 8',
    },
    {
      id: 9,
      image: 'assets/images/gallery/photo9.jpg',
      alt: 'Арина 9',
    },
  ];

  ngAfterViewInit(): void {
    const swiper = this.swiperContainer.nativeElement;

    swiper.effect = 'coverflow';
    swiper.grabCursor = true;
    swiper.centeredSlides = true;
    swiper.slidesPerView = 'auto';
    swiper.loop = true;

    swiper.speed = 700;

    swiper.spaceBetween = 30;

    swiper.mousewheel = true;

    swiper.pagination = {
      clickable: true,
    };

    swiper.coverflowEffect = {
      rotate: 15,
      stretch: 0,
      depth: 220,
      modifier: 1.6,
      scale: 0.88,
      slideShadows: false,
    };

    swiper.initialize();
  }
}
