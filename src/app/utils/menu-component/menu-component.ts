import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/MenuItem';
import { AppText, IAppText } from '../text/appText';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.scss',
})
export class MenuComponent {
  //text
  appText: IAppText = AppText;
  menu: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'bi bi-speedometer2',
      route: '/dashboard'
    },
    {
      label: 'Utilisateurs',
      icon: 'bi bi-people',
      children: [
        { label: 'Liste', route: '/users' },
        { label: 'Créer', route: '/users/create' }
      ]
    },
    {
      label: 'Paramètres',
      icon: 'bi bi-gear',
      route: '/settings'
    }
  ];


  isDarkMode = false;

  ngOnInit() {
    this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Écoute le changement de thème en temps réel
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.isDarkMode = e.matches;
    });
  }
}
