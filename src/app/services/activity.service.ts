import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() {
  }

  showOrHide(visible: boolean): boolean {
    return !visible
  }
}
