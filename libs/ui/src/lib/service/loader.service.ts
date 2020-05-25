import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export interface loaderState {
  show: boolean;
}


@Injectable({
  providedIn: 'root'
})

export class LoaderService {

  private loaderSubject = new Subject();
  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  show() {
    this.loaderSubject.next(<loaderState>{ show: true });
  }

  hide() {
    this.loaderSubject.next(<loaderState>{ show: false });
  }
}
