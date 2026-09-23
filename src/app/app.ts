import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UniversityPageComponent} from './universities/presentation/university-page/university-page';
import {Layout} from './shared/presentation/components/layout/layout';
import {Footer} from './shared/presentation/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [UniversityPageComponent, Layout, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pc1u20221e121');
}
