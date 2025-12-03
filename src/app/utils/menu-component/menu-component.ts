import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/MenuItem';
import { AppText, IAppText } from '../text/appText';
import { IMenuText, MenuText } from '../text/menu';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.scss',
})
export class MenuComponent {
  //text
  appText: IAppText = AppText;
  menuText: IMenuText = MenuText;
  menu: MenuItem[] = [
    {
      label: this.menuText.home,
      icon: 'bi bi-house',
      route: '/'
    },
    {
      label: this.menuText.stockManagements,
      icon: 'bi bi-box-seam',
      children: [
        {
          label: this.menuText.categoryManagement,
          icon: 'bi bi-tags',
          route: '/categories'
        },
        {
          label: this.menuText.productManagement,
          icon: 'bi bi-bag',
          route: '/products'
        },
        {
          label: this.menuText.stockManagements,
          icon: 'bi bi-archive',
          route: '/stock-managements'
        }
      ]
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


/* 
EXAMPLE OF USING MENU COMPONENT
,
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

*/