import { Component, OnInit } from '@angular/core';
import { SidebarLink } from 'src/app/interfaces';

@Component({
  selector: 'beyonic-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  links: SidebarLink[] = [
    {
      name: 'Dashboard',
      route: '/',
      hasChildren: false,
      iconLink: '../../../../assets/sprite.svg#home'
    },
    {
      name: 'Balance',
      route: 'balance',
      hasChildren: true,
      iconLink: '../../../../assets/sprite.svg#balance'
    },
    {
      name: 'Transactions',
      route: 'transactions',
      hasChildren: true,
      iconLink: '../../../../assets/sprite.svg#transactions'
    },
    {
      name: 'Organization',
      route: 'organizations',
      hasChildren: false,
      iconLink: '../../../../assets/sprite.svg#organization'
    },
    {
      name: 'Groups',
      route: 'groups',
      hasChildren: false,
      iconLink: '../../../../assets/sprite.svg#groups'
    },
    {
      name: 'Zones',
      route: 'zones',
      hasChildren: false,
      iconLink: '../../../../assets/sprite.svg#zone'
    },
    {
      name: 'Settings',
      route: 'settings',
      hasChildren: false,
      iconLink: '../../../../assets/sprite.svg#settings'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
