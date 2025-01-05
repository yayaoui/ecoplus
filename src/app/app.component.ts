import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Renov';

  ngOnInit() {
    const darkModeToggle = document.getElementById('darkModeToggle') as HTMLInputElement | null;
    const body = document.body;

    // Check local storage for dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
      body.classList.add('dark-mode');
      if (darkModeToggle?.checked !== undefined) {
        darkModeToggle.checked = true;
      }
    }

    // Toggle dark mode on switch change
    if (darkModeToggle) {
      darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
          body.classList.add('dark-mode');
          localStorage.setItem('dark-mode', 'enabled');
        } else {
          body.classList.remove('dark-mode');
          localStorage.setItem('dark-mode', 'disabled');
        }
      });
    }
  }
}
