import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {LoggedChild} from '../models/logged-child';
import {AuthService} from './auth.service';
import {Medicine} from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  getLoggedChild(): Observable<LoggedChild> {
    const authHeaders = this.authService.getAuthHeaders();
    const mock: LoggedChild = {
      childId: 1,
      name: 'Wojtek',
      parent: {
        parentId: 1,
        name: 'Marcin',
        email: 'marcin@test.com'
      }
    };
    return of(mock);
  }

  getMedicines(): Observable<Medicine[]> {
    const authHeaders = this.authService.getAuthHeaders();
    const mock: Medicine[] = [
      {
        medicineId: 1,
        name: 'Hitaxa',
        unit: 'tabletki',
        expireDate: new Date(2021, 3, 21),
        packageSize: 100,
        currState: 20
      },
      {
        medicineId: 1,
        name: 'Hitaxa',
        unit: 'tabletki',
        expireDate: new Date(2021, 3, 21),
        packageSize: 100,
        currState: 20
      },
      {
        medicineId: 1,
        name: 'Hitaxa',
        unit: 'tabletki',
        expireDate: new Date(2021, 3, 21),
        packageSize: 100,
        currState: 20
      },
      {
        medicineId: 1,
        name: 'Hitaxa',
        unit: 'tabletki',
        expireDate: new Date(2021, 3, 21),
        packageSize: 100,
        currState: 20
      },
      {
        medicineId: 1,
        name: 'Hitaxa',
        unit: 'tabletki',
        expireDate: new Date(2021, 3, 21),
        packageSize: 100,
        currState: 20
      },
      {
        medicineId: 1,
        name: 'Hitaxa',
        unit: 'tabletki',
        expireDate: new Date(2021, 3, 21),
        packageSize: 100,
        currState: 20
      },
      {
        medicineId: 1,
        name: 'Hitaxa',
        unit: 'tabletki',
        expireDate: new Date(2021, 3, 21),
        packageSize: 100,
        currState: 20
      },
      {
        medicineId: 1,
        name: 'Hitaxa',
        unit: 'tabletki',
        expireDate: new Date(2021, 3, 21),
        packageSize: 100,
        currState: 20
      },
      {
        medicineId: 1,
        name: 'Hitaxa',
        unit: 'tabletki',
        expireDate: new Date(2021, 3, 21),
        packageSize: 100,
        currState: 20
      }
    ];
    return of(mock);
  }
}
