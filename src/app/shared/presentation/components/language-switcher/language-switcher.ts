import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

/**
 * @summary Presentation component that switches the active UI language.
 * @author [TU NOMBRE Y APELLIDO AQUÍ]
 */
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './language-switcher.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class LanguageSwitcher {
  /** Currently selected language code in the toggle group. */
  currentLang = 'en';
  /** Supported language codes available to users. */
  languages = ['en', 'es'];

  /**
   * @param translate - Translation service managing runtime locale state.
   */
  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang() || 'en';
  }

  /**
   * Changes the active application language.
   *
   * @param language - Locale code to activate.
   */
  useLanguage(language: string) {
    this.translate.use(language);
  }
}
