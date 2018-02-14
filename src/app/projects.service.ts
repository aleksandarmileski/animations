import {Injectable} from '@angular/core';
import {Project} from './project';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ProjectsService {

    projects: Project[] = [
        new Project('Skopje 2014', 'Bezveznite statui vo Skup', 'active'),
        new Project('Hotel Rusia', 'Od samsonenko hotelot', 'critical'),
        new Project('Shirok Sokak', 'Piazza Bitola', 'active'),
        new Project('Markovi kuli', 'Restavracija na Markovite kuli vo Prilep', 'inactive')
    ];

    constructor() {
    }

    getProjects(): Observable<Project[]> {
        return Observable.of(this.projects).delay(500);
    }

}
