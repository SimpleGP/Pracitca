import { Injectable } from '@angular/core';
import {UniversityResource} from './everything-response';
import {University} from '../domain/model/university.entity';

@Injectable({
  providedIn: 'root',
})
export class UniversityAssembler {

  toEntity(resource: UniversityResource):University{
    return new University(
      resource.name ?? '',              // Es un string, ej: "Universidad Nacional..."
      resource.country ?? '',           // Es un string, ej: "Peru"
      resource.alpha_two_code ?? '',
      resource.domains?? [],// Es un string, ej: "PE"
      resource.web_pages ?? []          // Es un array de strings, ej: ["http://www.unsch.edu.pe/"]
    );
  }
  toEntities(resources: UniversityResource[]):University[]{

    return resources.map(resource => this.toEntity(resource));
  }


}
