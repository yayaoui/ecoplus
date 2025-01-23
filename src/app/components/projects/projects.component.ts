import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  expandedCards: { [key: number]: boolean } = {};

  toggleCard(cardId: number): void {
    this.expandedCards[cardId] = !this.expandedCards[cardId];
  }

  isCardExpanded(cardId: number): boolean {
    return this.expandedCards[cardId] || false;
  }
}
