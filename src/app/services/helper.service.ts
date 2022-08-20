import {Injectable} from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private _isMobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  readonly isMobile$: Observable<boolean> = this._isMobile.asObservable().pipe(distinctUntilChanged())

  constructor() {
  }

  setMobile(value: boolean) {
    this._isMobile.next(value)
  }
}
