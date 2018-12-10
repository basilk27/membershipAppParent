import { Component, OnInit } from '@angular/core';
import { ManuState } from '../model/manu-state';
import { Router } from '@angular/router';
import { MenuEnablerService } from '../service/enable/menu-enabler.service';

@Component({
  selector: 'app-job-schedule',
  templateUrl: './job-schedule.component.html',
  styleUrls: ['./job-schedule.component.css']
})
export class JobScheduleComponent implements OnInit {

  actionLabel: string;
  zManuState: ManuState;

  constructor( private _router: Router, private enableLoginLogoutSrv: MenuEnablerService  ) {
    this.zManuState =  {
      mainManuFlag: true,
      mainButtonOn: true,
      maintenanceButtonOn: true,
      cadocsButtonOn: false,
      searchButtonOn: false,
      eeterrorsButtonOn: false,
      scheduleButtonOn: false,
      mappingButtonOn: false
    };

  }

  ngOnInit() {
    this.enableLoginLogoutSrv.actionLabelObservable.subscribe( actionLabel => this.actionLabel = actionLabel );
  }

  mainRouter(): void {
    this._router.navigate(['/main']);
  }

  cadocsRouter(): void {
    this._router.navigate(['/cadocs']);
  }

  searchRouter(): void {
    this._router.navigate( [ '/search' ] );
  }

  eeterrorsRouter(): void {
    this._router.navigate( [ '/search' ] );
  }

  scheduleRouter(): void {
    this._router.navigate( [ '/schedule' ] );
  }

  mappingRouter(): void {
    this._router.navigate(['/mapping']);
  }
}
