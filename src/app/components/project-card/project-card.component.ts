import { Component, OnInit } from '@angular/core';

interface ProjectImage {
  url: string;
  caption: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
  startDate: Date;
  endDate: Date;
  budget: number;
  progress: number;
  images: ProjectImage[];
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  projects: Project[] = [];
  isEditing = false;

  constructor() {
    // Sample data - replace with actual data from your service
    this.projects = [
      {
        id: '1',
        name: 'Home Renovation Project',
        description: 'Complete renovation of a 3-bedroom house including kitchen and bathrooms',
        status: 'in-progress',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-03-31'),
        budget: 50000,
        progress: 65,
        images: [
          {
            url: '../../../assets/projects/31.jpg',
            caption: 'Kitchen Before Renovation'
          },
          {
            url: '../../../assets/projects/33.jpg',
            caption: 'Kitchen In Progress'
          },
          {
            url: '../../../assets/projects/34.jpg',
            caption: 'Kitchen After Renovation'
          }
        ]
      },
      {
        id: '2',
        name: 'Solar Panel Installation',
        description: 'Installation of solar panels for renewable energy solution',
        status: 'planning',
        startDate: new Date('2024-02-15'),
        endDate: new Date('2024-03-15'),
        budget: 25000,
        progress: 0,
        images: [
          {
            url: 'assets/images/projects/solar-design.jpg',
            caption: 'Solar Panel Design'
          },
          {
            url: 'assets/images/projects/roof-inspection.jpg',
            caption: 'Roof Inspection'
          }
        ]
      }
    ];
  }

  ngOnInit(): void {
  }

  getStatusBadgeClass(status: string): string {
    const statusMap: { [key: string]: string } = {
      'planning': 'bg-info',
      'in-progress': 'bg-primary',
      'completed': 'bg-success',
      'on-hold': 'bg-warning'
    };
    return statusMap[status] || 'bg-secondary';
  }

  addNewProject(): void {
    // Implement project creation logic
    console.log('Adding new project');
  }

  editProject(project: Project): void {
    // Implement project editing logic
    console.log('Editing project:', project);
  }

  deleteProject(project: Project): void {
    if (confirm(`Are you sure you want to delete project "${project.name}"?`)) {
      // Implement project deletion logic
      console.log('Deleting project:', project);
    }
  }

  viewProjectDetails(project: Project): void {
    // Implement project details view logic
    console.log('Viewing project details:', project);
  }
}
