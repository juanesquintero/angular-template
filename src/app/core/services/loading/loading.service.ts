import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private requestInProgress: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public get isLoading() : Observable<boolean> {
    return this.requestInProgress.pipe(delay(0));
  }

  public set loading(loading: boolean) {
    this.requestInProgress.next(loading);
  }

  constructor() { }
}
