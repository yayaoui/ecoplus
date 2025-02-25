import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  reviews = [
    {
      name: 'Christophe Simler',
      date: 'Il y a 2 mois',
      text: 'Les travaux se sont super bien passés, j’ai pu rénover toute ma maison grâce aux aides de l’État. L’équipe a été très professionnelle, rapide et à l’écoute de mes besoins. ',
      rating: 5
    },
    {
      name: 'Jerome Michel',
      date: 'Il y a 1 semaine',
      text: 'Merci à Yazid, pour son professionnalisme, sa patience pour avoir pris le temps de mon conseiller, je le recommande vivement.',
      rating: 5
    },
    {
      name: 'Alain Poncet',
      date: 'Il y a 2 semaines',
      text: 'très satisfait de ALLAN explications très claires répondant à nos besoins',
      rating: 5
    },
    {
      name: 'Marie Dubois',
      date: 'Il y a 3 semaines',
      text: 'Service excellent et professionnel. Les conseils étaient pertinents et adaptés à mes besoins.',
      rating: 5
    },
    {
      name: 'Laurent Martin',
      date: 'Il y a 1 mois',
      text: 'Très satisfait de la prestation. Équipe réactive et compétente.',
      rating: 5
    },
    {
      name: 'Sophie Bernard',
      date: 'Il y a 1 mois',
      text: 'Excellent accompagnement dans mon projet de rénovation. Je recommande vivement.',
      rating: 5
    }
  ];

  currentIndex = 0;
  itemsPerSlide = 3;
  touchStartX = 0;
  touchEndX = 0;
  readonly SWIPE_THRESHOLD = 50;

  ngOnInit() {
    this.adjustItemsPerSlide();
    window.addEventListener('resize', this.adjustItemsPerSlide.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.adjustItemsPerSlide.bind(this));
  }

  adjustItemsPerSlide() {
    if (window.innerWidth <= 576) {
      this.itemsPerSlide = 1;
    } else if (window.innerWidth <= 992) {
      this.itemsPerSlide = 2;
    } else {
      this.itemsPerSlide = 3;
    }
    this.currentIndex = Math.min(this.currentIndex, this.getMaxIndex());
    this.updateSlidePosition();
  }

  getMaxIndex(): number {
    return Math.max(0, Math.ceil(this.reviews.length / this.itemsPerSlide) - 1);
  }

  goToSlide(index: number) {
    if (index >= 0 && index <= this.getMaxIndex()) {
      this.currentIndex = index;
      this.updateSlidePosition();
    }
  }

  nextSlide() {
    if (this.currentIndex < this.getMaxIndex()) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateSlidePosition();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.getMaxIndex();
    }
    this.updateSlidePosition();
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    event.preventDefault();
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = this.touchEndX - this.touchStartX;
    
    if (Math.abs(swipeDistance) > this.SWIPE_THRESHOLD) {
      if (swipeDistance > 0) {
        this.prevSlide();
      } else {
        this.nextSlide();
      }
    }
  }

  private updateSlidePosition() {
    const container = document.querySelector('.reviews-container') as HTMLElement;
    if (container) {
      const slideWidth = 100 / this.itemsPerSlide;
      const translateX = -(this.currentIndex * slideWidth);
      container.style.transform = `translateX(${translateX}%)`;
    }
  }

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
