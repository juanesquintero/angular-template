import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isRequestInprogress: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  set loading(loading: boolean) {
    this.isRequestInprogress.next(loading);
  }
}
