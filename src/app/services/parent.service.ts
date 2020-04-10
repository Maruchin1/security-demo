import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiEndpoints} from './ApiEndpoints';
import {AuthService} from './auth.service';
import {Parent} from '../models/parent';
import {Child} from '../models/child';
import {Medicine} from '../models/medicine';
import {Observable} from 'rxjs';
import {SecurityService} from './security.service';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  requestHeaders: HttpHeaders = new HttpHeaders({
    Authorization: this.auth.getAuthToken()
  });

  constructor(
    private httpClient: HttpClient,
    private auth: AuthService,
    private securityService: SecurityService
  ) {
    this.requestHeaders = new HttpHeaders({
      Authorization: this.auth.getAuthToken()
    });
  }

  getParentData(): Promise<Parent> {
    const request = this.httpClient.get<Parent>(
      ApiEndpoints.GET_DATA_PARENT,
      {headers: this.requestHeaders}
    );
    return request.toPromise();
  }

  getParentChilds(): Promise<Child[]> {
    const request = this.httpClient.get<Child[]>(
      ApiEndpoints.CHILDREN,
      {headers: {Authorization: this.auth.getAuthToken()}}
    );
    return request.toPromise();
  }


  getParentMedicines(): Promise<Medicine[]> {
    const request = this.httpClient.get<Medicine[]>(
      ApiEndpoints.MEDICINES,
      {headers: {Authorization: this.auth.getAuthToken()}}
    );
    return request.toPromise();
  }

  addChild(childName: string): Promise<any> {
    return this.httpClient.post(
      ApiEndpoints.CHILDREN,
      {name: childName},
      {
        headers: {
          Authorization: this.auth.getAuthToken(),
          'Content-Type': 'application/json'
        }
      }
    ).toPromise();
  }

  removeChild(childId: number) {
    console.log(this.auth.getAuthToken());
    const request = this.httpClient.delete(
      ApiEndpoints.CHILDREN + '/' + childId,
      {headers: {Authorization: this.auth.getAuthToken()}}
    );
    return request.toPromise();
  }

  addMedicine(medicine: Medicine): Observable<void> {
    console.log('add medicine');
    const request = this.httpClient.post<void>(
      ApiEndpoints.MEDICINES,
      medicine,
      {headers: {Authorization: this.auth.getAuthToken()}}
    );
    return request;
  }

  removeMedicine(medicineId: number) {
    const request = this.httpClient.delete(
      ApiEndpoints.MEDICINES + '/' + medicineId,
      {headers: {Authorization: this.auth.getAuthToken()}}
    );
    return request.toPromise();
  }

  searchMedicine(name: string): Observable<Medicine[]> {
    const secure = this.securityService.getSecureSqlInjection();
    let url;
    if (secure) {
      url = ApiEndpoints.SAFE_SEARCH_MEDICINE;
    } else {
      url = ApiEndpoints.UNSAFE_SEARCH_MEDICINE;
    }
    console.log(url);
    return this.httpClient.get<Medicine[]>(
      url + '/' + name,
      {headers: {Authorization: this.auth.getAuthToken()}}
    );
  }
}
