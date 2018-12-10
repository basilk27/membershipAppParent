import { Component, OnInit } from '@angular/core';
import { MatTabGroup } from '@angular/material';
import { ManuState } from '../model/manu-state';
import { Router } from '@angular/router';
import { MenuEnablerService } from '../service/enable/menu-enabler.service';

@Component({
  selector: 'app-eet-main',
  templateUrl: './eet-main.component.html',
  styleUrls: ['./eet-main.component.css']
})
export class EetMainComponent implements OnInit {

  actionLabel: string;
  zManuState: ManuState;

  constructor( private _router: Router, private enableLoginLogoutSrv: MenuEnablerService ) {
    this.zManuState =  {
      mainManuFlag: true,
      mainButtonOn: false,
      maintenanceButtonOn: true,
      cadocsButtonOn: true,
      searchButtonOn: true,
      eeterrorsButtonOn: true,
      scheduleButtonOn: true,
      mappingButtonOn: true
    };
  }

  ngOnInit() {
    this.enableLoginLogoutSrv.actionLabelObservable.subscribe( actionLabel => this.actionLabel = actionLabel );
  }

  onSelectTabChange( event ) {
    console.log( event.index );
    let actionLabel: string;

    switch ( event.index ) {
      case 0: actionLabel = 'Create Employer EET Profile';
        break;

      case 1: actionLabel = 'Update Employer EET Profile';
        break;

      case 2: actionLabel = 'View Employer EET Profile';
        break;

      case 3: actionLabel = 'Update Employer EET Contacts';
        break;

      default:
        actionLabel = 'Undefined Tab';
    }

    this.enableLoginLogoutSrv.setActionLabel( actionLabel );
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
    this._router.navigate( [ '/eeterrors' ] );
  }

  scheduleRouter(): void {
    this._router.navigate( [ '/schedule' ] );
  }

  mappingRouter(): void {
    this._router.navigate(['/mapping']);
  }

  maintenanceRouter(): void {
    this._router.navigate(['/maintenance']);
  }
}
