import { Component, OnInit, inject } from '@angular/core';
import { UniversityStore } from '../../application/university.store';
import { University } from '../../domain/model/university.entity';

/**
 * @summary Presentation component that displays a grid of Peruvian universities.
 * @author [TU NOMBRE Y APELLIDO AQUÍ]
 */
@Component({
  selector: 'app-university-page',
  standalone: true,
  imports: [],
  templateUrl: './university-page.html',
  styleUrls: ['./university-page.css']
})
export class UniversityPageComponent implements OnInit {

  protected readonly store: UniversityStore = inject(UniversityStore);

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.store.loadUniversities();
  }

  shareUniversity(university: University): void {
    const url = university.web_pages[0] || 'https://enlinea.sunedu.gob.pe/';
    const shareData = {
      title: university.name,
      text: `Check out ${university.name}`,
      url: url
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      navigator.clipboard.writeText(url)
        .then(() => alert('URL copied to clipboard!'))
        .catch(err => console.error('Error copying text: ', err));
    }
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.onerror = null;
    imgElement.src = 'https://via.placeholder.com/150?text=No+Logo';
  }

}
