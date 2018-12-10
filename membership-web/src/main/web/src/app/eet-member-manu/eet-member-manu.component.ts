import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuEnablerService } from '../service/enable/menu-enabler.service';
import { EetMenu } from '../model/eet-menu';
import { EetMenuBuilder } from '../model/eet-menu-builder';

@Component({
  selector: 'app-eet-member-manu',
  templateUrl: './eet-member-manu.html',
  styleUrls: ['./eet-member-manu.component.css']
})
export class EetMemberManuComponent implements OnInit {

  eetMenu: EetMenu;

  constructor(private _router: Router, private enableLoginLogoutSrv: MenuEnablerService ) { }

  ngOnInit() {
    this.enableLoginLogoutSrv.eetMenuObservable.subscribe( eetMenu => this.eetMenu = eetMenu );
  }

  mainRouter(): void {
    this.enableLoginLogoutSrv.setMemberEttMenu( new EetMenuBuilder()
        .setMainManuFlag( true )
        .setMainButtonOn( false )
        .setMaintenanceButtonOn( true )
        .setCadocsButtonOn( true )
        .setSearchButtonOn( true )
        .setEeterrorsButtonOn( true )
        .setScheduleButtonOn( true )
        .setMappingButtonOn( true )
        .build());

    this.enableLoginLogoutSrv.setActionLabel('Create Employer Profile information');

    this._router.navigate(['/main']);
  }

  cadocsRouter(): void {
    this.enableLoginLogoutSrv.setMemberEttMenu(new EetMenuBuilder()
        .setMainManuFlag( true )
        .setMainButtonOn( true )
        .setMaintenanceButtonOn( false )
        .setCadocsButtonOn( false )
        .setSearchButtonOn( false )
        .setEeterrorsButtonOn( false )
        .setScheduleButtonOn( false )
        .setMappingButtonOn( false )
        .build());


    this._router.navigate(['/cadocs']);
  }

  searchRouter(): void {
    this._router.navigate( [ '/search' ] );
  }

  eeterrorsRouter(): void {
    this.enableLoginLogoutSrv.setMemberEttMenu(new EetMenuBuilder()
        .setMainManuFlag( true )
        .setMainButtonOn( true )
        .setMaintenanceButtonOn( true )
        .setCadocsButtonOn( false )
        .setSearchButtonOn( false )
        .setEeterrorsButtonOn( false )
        .setScheduleButtonOn( false )
        .setMappingButtonOn( false )
        .build());

    this.enableLoginLogoutSrv.setActionLabel('View Employer EET Error Messages');

    this._router.navigate( [ '/eeterrors' ] );
  }

  scheduleRouter(): void {
    this.enableLoginLogoutSrv.setMemberEttMenu(new EetMenuBuilder()
        .setMainManuFlag( true )
        .setMainButtonOn( true )
        .setMaintenanceButtonOn( true )
        .setCadocsButtonOn( false )
        .setSearchButtonOn( false )
        .setEeterrorsButtonOn( false )
        .setScheduleButtonOn( false )
        .setMappingButtonOn( false )
        .build());

    this.enableLoginLogoutSrv.setActionLabel('Select the Job Schedule Option');

    this._router.navigate( [ '/schedule' ] );
  }

  mappingRouter(): void {
    this.enableLoginLogoutSrv.setMemberEttMenu(new EetMenuBuilder()
        .setMainManuFlag( true )
        .setMainButtonOn( true )
        .setMaintenanceButtonOn( true )
        .setCadocsButtonOn( false )
        .setSearchButtonOn( false )
        .setEeterrorsButtonOn( false )
        .setScheduleButtonOn( false )
        .setMappingButtonOn( false )
        .build());

    this.enableLoginLogoutSrv.setActionLabel('Select the Group Mapping Option');


    this._router.navigate(['/mapping']);
  }

  maintenanceRouter(): void {
    this._router.navigate(['/maintenance']);
  }

}
