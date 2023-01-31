import { LocaleService } from '@core/services/locale/locale.service';
import { LG_SIZE_PX, MD_SIZE_PX } from '@shared/utils/constants';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ws-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent {
  @Input() width!: number;

  public get isLong() : boolean {
    return this.width > LG_SIZE_PX && this.width < MD_SIZE_PX
  }

  constructor(public locale: LocaleService) { }
}
