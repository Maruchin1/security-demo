import {Injectable} from '@angular/core';
import {UserRole} from '../models/user-role';
import {Observable, of, Subject} from 'rxjs';
import {LoginParentData} from '../models/login-parent-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiEndpoints} from './ApiEndpoints';
import {RegisterParentData} from '../models/register-parent-data';
import {map, take} from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Parent } from '../models/parent';
import { Child } from '../models/child';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  
  requestHeaders: HttpHeaders = new HttpHeaders({
    Authorization: this.auth.getAuthToken()
  });

  constructor(
    private httpClient: HttpClient, private auth: AuthService
  ) {
    this.requestHeaders = new HttpHeaders({
      Authorization: this.auth.getAuthToken()
    });
    }

  getParentData(): Promise<Parent> {
    const request = this.httpClient.get<Parent>(
      ApiEndpoints.GET_DATA_PARENT,
      {headers: this.requestHeaders }
    );
    return request.toPromise()
  }

  getParentChilds(): Promise<Child[]> {
    const request = this.httpClient.get<Child[]>(
      ApiEndpoints.CHILDRENS,
      {headers: { 'Authorization': this.auth.getAuthToken() }}
    );
    return request.toPromise()
  }

  
  getParentMedicines(): Promise<Medicine[]> {
    const request = this.httpClient.get<Medicine[]>(
      ApiEndpoints.MEDICINES,
      {headers: { 'Authorization': this.auth.getAuthToken() }}
    );
    return request.toPromise()
  }

  addChild(childName: string): Promise<any> {
    return this.httpClient.post(
      ApiEndpoints.CHILDRENS, 
      { name: childName },
      {headers: { 'Authorization': this.auth.getAuthToken(),
                  'Content-Type': 'application/json' }}
      ).toPromise();
  }

  removeChild(childId: number) {
    console.log(this.auth.getAuthToken())
    const request = this.httpClient.delete(
      ApiEndpoints.CHILDRENS + "/" + childId,
      {headers: { 'Authorization': this.auth.getAuthToken() }}
    );
    return request.toPromise()
  }

  removeMedicine(medicineId: number) {
    const request = this.httpClient.delete(
      ApiEndpoints.MEDICINES + "/" + medicineId,
      {headers: { 'Authorization': this.auth.getAuthToken() }}
    );
    return request.toPromise()
  }
}
