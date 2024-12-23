import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuValue: boolean = false;
  menuIcon: string = 'bi bi-list';
  openMenu() {
    this.menuValue = !this.menuValue;
    this.menuIcon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }


  closeMenu() {
    this.menuValue = false;
    this.menuIcon = 'bi bi-list';
  }

  activeIndex = -1;

  setActive(event: Event) {
    const target = event.target as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      const children = parent.children;
      for (let i = 0; i < children.length; i++) {
        if (children[i] === target) {
          this.activeIndex = i;
        }
      }
    }
  }
}
