import { Component, HostListener, Input } from '@angular/core';
import { MD_SIZE_PX } from '@shared/utils/constants';


@Component({
  selector: 'ws-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title?: string;
  public width: number = window?.innerWidth;

  public collapsed = true;

  public get isDesk(): boolean {
    return (this.width > MD_SIZE_PX);
  }

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.width = window.innerWidth;
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
