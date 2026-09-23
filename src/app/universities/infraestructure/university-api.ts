import { inject,Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UniversityAssembler} from './university-assembler';
import {environment} from '../../../environments/environment';
import {map, Observable} from 'rxjs';
import {University} from '../domain/model/university.entity';
import {UniversityResource} from './everything-response';

@Injectable({
  providedIn: 'root',
})
export class UniversityApi {

  private readonly http=inject(HttpClient);
  private readonly assembler=inject(UniversityAssembler);
  private readonly endPoint =`${environment.universityApiBaseUrl}${environment.universityApiEndpoint}`;


  getUniversities(): Observable<University[]> {
    return this.http.get<UniversityResource[]>(this.endPoint, {
      params: {
        country: 'Peru' // Parámetro requerido por el caso
      }
    }).pipe(
      // Transformas el arreglo de recursos (JSON) a un arreglo de entidades
      map(resources => resources.map(resource => this.assembler.toEntity(resource)))
    );
}
}


