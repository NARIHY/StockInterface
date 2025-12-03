import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-guest-component',
  standalone: false,
  templateUrl: './guest-component.html',
  styleUrls: ['./guest-component.scss'],
})
export class GuestComponent implements OnInit {

  isDarkMode = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkMode = media.matches;

    media.addEventListener('change', e => {
      this.isDarkMode = e.matches;
      this.cdr.detectChanges();
    });
  }
}
