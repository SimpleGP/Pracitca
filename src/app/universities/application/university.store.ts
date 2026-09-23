import {computed, inject, Injectable, signal, Signal, WritableSignal} from '@angular/core';
import {University} from '../domain/model/university.entity';
import {UniversityApi} from '../infraestructure/university-api';
import {finalize} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UniversityStore {

  private readonly universityApi: UniversityApi = inject(UniversityApi);

  private readonly universityState: WritableSignal<University[]> = signal<University[]>([]);
  private readonly loadingState: WritableSignal<boolean> = signal<boolean>(false);
  private readonly errorState: WritableSignal<string> = signal<string>("");

  readonly universities: Signal<University[]> = computed(() => this.universityState());
  readonly loading: Signal<boolean> = computed(() => this.loadingState());
  readonly loadingError: Signal<string> = computed(() => this.errorState());

  // Adaptación de tu método 'search' de la imagen
  loadUniversities(): void {
    // Es buena práctica iniciarlo en true al comenzar la petición
    this.loadingState.set(true);
    this.errorState.set(""); // Limpiamos el error previo tal como en tu imagen

    // En lugar de pasar un query, llamamos al método que ya configuramos con country=Peru
    this.universityApi.getUniversities()
      .pipe(
        finalize(() => this.loadingState.set(false)) // Apagamos el loading al terminar, igual que en tu imagen
      )
      .subscribe({
        next: (universities: University[]) => this.universityState.set(universities),
        error: (error: any) => {
          console.error(error); // Imprimimos el error en consola tal como en tu imagen
          // Mensaje en inglés cumpliendo el estándar de la rúbrica (C06)
          this.errorState.set("Could not load the list of universities.");
        }
      });
  }
}
