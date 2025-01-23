import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentTheme$;
  isNavbarCollapsed = true;

  constructor(
    private themeService: ThemeService,
    private router: Router
  ) {
    this.currentTheme$ = this.themeService.theme$;
  }

  ngOnInit() {
    // Subscribe to theme changes to update icons
    this.currentTheme$.subscribe(theme => {
      const darkIcon = document.querySelector('.theme-icon-dark') as HTMLElement;
      const lightIcon = document.querySelector('.theme-icon-light') as HTMLElement;
      
      if (theme === 'dark') {
        darkIcon?.classList.remove('d-none');
        lightIcon?.classList.add('d-none');
      } else {
        darkIcon?.classList.add('d-none');
        lightIcon?.classList.remove('d-none');
      }
    });

    // Close navbar on route change
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeNavbar();
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
    
    if (navbarCollapse?.classList.contains('show')) {
      navbarToggler?.click();
    }
  }
}