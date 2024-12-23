import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('400ms ease-out', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ]),
      transition(':leave', [
        animate('300ms ease-in', 
          style({ opacity: 0, transform: 'translateY(10px)' })
        )
      ])
    ])
  ]
})
export class CompanyProfileComponent {
  selectedTab: string = 'mision';

  getTabIcon(tab: string): string {
    const icons: { [key: string]: string } = {
      'mision': 'fa-solid fa-circle-up',
      'vision': 'fa-solid fa-eye',
      'enfoque': 'fa-solid fa-users-gear'
    };
    return icons[tab] || '';
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
