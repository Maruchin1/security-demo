import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiEndpoints} from './ApiEndpoints';
import {AuthService} from './auth.service';
import {Parent} from '../models/parent';
import {Child} from '../models/child';
import {Medicine} from '../models/medicine';
import {Observable} from 'rxjs';
import {SecurityService} from './security.service';
import {ChildMedicine} from '../models/child-medicine';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(
    private httpClient: HttpClient,
    private auth: AuthService,
    private securityService: SecurityService
  ) {
  }

  getParentData(): Promise<Parent> {
    const request = this.httpClient.get<Parent>(
      ApiEndpoints.GET_DATA_PARENT,
      {withCredentials: true}
    );
    return request.toPromise();
  }

  getParentChilds(): Promise<Child[]> {
    const request = this.httpClient.get<Child[]>(
      ApiEndpoints.CHILDREN,
      {withCredentials: true}
    );
    return request.toPromise();
  }


  getParentMedicines(): Promise<Medicine[]> {
    const request = this.httpClient.get<Medicine[]>(
      ApiEndpoints.MEDICINES,
      {withCredentials: true}
    );
    return request.toPromise();
  }

  addChild(childName: string): Promise<any> {
    return this.httpClient.post(
      ApiEndpoints.CHILDREN,
      {name: childName},
      {withCredentials: true}
    ).toPromise();
  }

  removeChild(childId: number) {
    const request = this.httpClient.delete(
      ApiEndpoints.CHILDREN + '/' + childId,
      {withCredentials: true}
    );
    return request.toPromise();
  }

  addMedicine(medicine: Medicine): Observable<void> {
    const request = this.httpClient.post<void>(
      ApiEndpoints.MEDICINES,
      medicine,
      {withCredentials: true}
    );
    return request;
  }

  removeMedicine(medicineId: number) {
    const request = this.httpClient.delete(
      ApiEndpoints.MEDICINES + '/' + medicineId,
      {withCredentials: true}
    );
    return request.toPromise();
  }

  assignMedicineToChild(medicine: Medicine, child: Child): Promise<any> {
    const request = this.httpClient.post<void>(
      ApiEndpoints.GET_CHILD_MEDICINES,
      {medicineId: medicine.medicineId, childId: child.childId},
      {withCredentials: true}
    );
    return request.toPromise();
  }

  removeAssignedMedicine(medChildId: number) {
    const request = this.httpClient.delete(
      ApiEndpoints.GET_CHILD_MEDICINES + '/' + medChildId,
      {withCredentials: true}
    );
    return request.toPromise();
  }

  getMedicinesAssignedToChild(childId: number): Promise<ChildMedicine[]> {
    const request = this.httpClient.get<ChildMedicine[]>(
      ApiEndpoints.GET_CHILD_MEDICINES + '/' + childId,
      {withCredentials: true}
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
      {withCredentials: true}
    );
  }
}
