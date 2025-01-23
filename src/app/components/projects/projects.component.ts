import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private router: Router) {}

  viewProjectDetails(projectId: number): void {
    // Navigate to project details page
    // this.router.navigate(['/projects', projectId]);
    console.log('Viewing project details:', projectId);
  }
}
