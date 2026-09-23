import { Component } from '@angular/core';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    LanguageSwitcher,
    RouterOutlet
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
