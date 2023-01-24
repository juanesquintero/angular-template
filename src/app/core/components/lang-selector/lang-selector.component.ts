import { LocaleService } from '@core/services/locale/locale.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ws-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent {
  constructor(public locale: LocaleService) { }
}
