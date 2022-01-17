import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import HiredDeveloperInterface from './models/hired-developer';

@Injectable({
  providedIn: 'root',
})
export default class HiredDeveloperService {
  constructor(private http: HttpClient) {}

  getAllHiredDevelopers(): Observable<HiredDeveloperInterface[]> {
    return this.http.get<HiredDeveloperInterface[]>(
      `http://localhost:3000/hireddevelopers`
    );
  }

  getAllByDeveloperId(
    developerId: number
  ): Observable<HiredDeveloperInterface[]> {
    return this.http.get<HiredDeveloperInterface[]>(
      `http://localhost:3000/hireddevelopers/?developerId=${developerId}`
    );
  }

  addHiredDeveloper(hiredDeveloper: HiredDeveloperInterface): Observable<any> {
    return this.http.post(
      `http://localhost:3000/hireddevelopers/`,
      hiredDeveloper
    );
  }

  addHiredDevelopers(
    hiredDevelopers: HiredDeveloperInterface[]
  ): Observable<any> {
    hiredDevelopers.forEach((hiredDeveloper) => {
      return this.http.post(
        `http://localhost:3000/hireddevelopers/`,
        hiredDeveloper
      );
    });
    return this.http.post(
      `http://localhost:3000/hireddevelopers/`,
      hiredDevelopers
    );
  }
}
