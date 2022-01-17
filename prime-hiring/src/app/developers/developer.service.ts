import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import DeveloperInterface from './models/developer.model';

@Injectable({
  providedIn: 'root',
})
export default class DeveloperService {
  constructor(private http: HttpClient) {}

  getAllDevelopers(): Observable<DeveloperInterface[]> {
    return this.http.get<DeveloperInterface[]>(
      `http://localhost:3000/developers`
    );
  }

  getById(id: number): Observable<DeveloperInterface> {
    return this.http.get<DeveloperInterface>(
      `http://localhost:3000/developers/${id}`
    );
  }

  addDeveloper(developer: DeveloperInterface): Observable<any> {
    if (developer.id) {
      return this.http.put(
        `http://localhost:3000/developers/${developer.id}`,
        developer
      );
    }
    return this.http.post(`http://localhost:3000/developers/`, developer);
  }

  deleteDeveloper(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/developers/` + id);
  }
}
