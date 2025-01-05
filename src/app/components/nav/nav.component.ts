import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  currentTheme$;

  constructor(private themeService: ThemeService) {
    this.currentTheme$ = this.themeService.theme$;
  }

  ngOnInit() {
    // Subscribe to theme changes to update icons
    this.currentTheme$.subscribe(theme => {
      const darkIcon = document.querySelector('.theme-icon-dark');
      const lightIcon = document.querySelector('.theme-icon-light');
      
      if (theme === 'dark') {
        darkIcon?.classList.remove('d-none');
        lightIcon?.classList.add('d-none');
      } else {
        darkIcon?.classList.add('d-none');
        lightIcon?.classList.remove('d-none');
      }
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}