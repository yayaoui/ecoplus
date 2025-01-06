import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reviews = [
    {
      name: 'Christophe Simler',
      date: 'Il y a 2 mois',
      text: 'Un conseiller toujours très agréable et très professionnel, je recommande.',
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

  ngOnInit() {
    // Initialize any necessary setup
  }

  nextSlide() {
    const maxIndex = this.reviews.length - this.itemsPerSlide;
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updateSlidePosition();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlidePosition();
    }
  }

  private updateSlidePosition() {
    const container = document.querySelector('.reviews-container') as HTMLElement;
    if (container) {
      const cardWidth = container.offsetWidth / this.itemsPerSlide;
      const newPosition = -this.currentIndex * cardWidth;
      container.style.transform = `translateX(${newPosition}px)`;
    }
  }

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
