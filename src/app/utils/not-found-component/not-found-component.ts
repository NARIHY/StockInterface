import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-component',
  standalone: false,
  templateUrl: './not-found-component.html',
  styleUrl: './not-found-component.scss',
})
export class NotFoundComponent {
  isDarkMode = false;

  ngOnInit() {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkMode = mq.matches;

    // changement du thème en direct
    mq.addEventListener('change', e => {
      this.isDarkMode = e.matches;
    });
  }
}
