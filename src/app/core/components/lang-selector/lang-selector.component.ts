import { LocaleService } from '@core/services/locale/locale.service';
import { Component, HostListener } from '@angular/core';

const MD_SIZE_PX = 768;

@Component({
  selector: 'ws-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent {
  private width: number = window?.innerWidth;

  public get mdSize(): boolean {
    return (this.width > MD_SIZE_PX);
  }

  constructor(public locale: LocaleService) {}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.width = window.innerWidth;
  }
}
