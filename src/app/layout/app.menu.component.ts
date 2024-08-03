import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
        ],
      },
      {
        label: 'Accounts',
        items: [
          {
            label: 'Bank',
            icon: 'pi pi-fw pi-credit-card',
            routerLink: ['/accounts/banks'],
          },
          {
            label: 'Government',
            icon: 'pi pi-fw pi-building-columns',
            routerLink: ['/accounts/government'],
          },
          {
            label: 'Websites',
            icon: 'pi pi-fw pi-sitemap',
            routerLink: ['/accounts/websites'],
          },
        ],
      },
      {
        label: 'Incoming Expenses',
        items: [
          {
            label: 'Priority',
            icon: 'pi pi-fw pi-exclamation-circle',
            routerLink: ['/expenses/priorities'],
            badge: 'NEW',
          },
          {
            label: 'Gift',
            icon: 'pi pi-fw pi-gift',
            routerLink: ['/expenses/gifts'],
          },
          {
            label: 'Loan',
            icon: 'pi pi-fw pi-receipt',
            routerLink: ['/expenses/loans'],
          },
          {
            label: 'Personal',
            icon: 'pi pi-fw pi-money-bill',
            routerLink: ['/expenses/personal'],
          },
        ],
      },
      {
        label: 'Help',
        items: [
          {
            label: 'Documentation',
            icon: 'pi pi-fw pi-question',
            routerLink: ['/documentation'],
          },
        ],
      },
    ];
  }
}
