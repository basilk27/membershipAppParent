import { Injectable }       from '@angular/core';
import { ManuState }        from "../../model/manu-state";
import { BehaviorSubject,
         Observable }       from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {

  private manuState: BehaviorSubject<ManuState>;

  constructor() {
    const currentManuState: ManuState = {
//      loginButtonOn: true,
      mainManuFlag: false,
      mainButtonOn: false,
      maintenanceButtonOn: true,
      cadocsButtonOn: false,
      searchButtonOn: false,
      eeterrorsButtonOn: false,
      scheduleButtonOn: false,
      mappingButtonOn: false
    };

    this.manuState = new BehaviorSubject(currentManuState);
  }

  set manuCriteria(value: ManuState) {
    this.manuState.next(value);
  }

  getState(): Observable<ManuState> {
    return this.manuState.asObservable();
  }
}
