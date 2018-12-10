import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginLogoutActivateBtn } from '../../model/login-logout-activate-btn';
import { EetMenu } from '../../model/eet-menu';
import { EetMenuBuilder } from '../../model/eet-menu-builder';

@Injectable({
  providedIn: 'root'
})
export class MenuEnablerService {

  private loginLogoutBehavior = new BehaviorSubject<LoginLogoutActivateBtn>( new LoginLogoutActivateBtn(true, false ) );

  private eetMenuBehavior = new BehaviorSubject<EetMenu>( new EetMenuBuilder()
      .setMainManuFlag( false )
      .setMainButtonOn( false )
      .setMaintenanceButtonOn( false )
      .setCadocsButtonOn( false )
      .setSearchButtonOn( false )
      .setEeterrorsButtonOn( false )
      .setScheduleButtonOn( false )
      .setMappingButtonOn( false )
      .build() );

  private actionLabelBehavior = new BehaviorSubject<string>('Create Employer Profile information');

  actionLabelObservable = this.actionLabelBehavior.asObservable();

  loginLogoutObservable = this.loginLogoutBehavior.asObservable();

  eetMenuObservable = this.eetMenuBehavior.asObservable();

  constructor() { }

  setLoginLogoutButtonFlags( loginLogoutActivateBtn: LoginLogoutActivateBtn ) {
    this.loginLogoutBehavior.next( loginLogoutActivateBtn );
  }

  setMemberEttMenu( eetMenu: EetMenu ) {
    this.eetMenuBehavior.next( eetMenu );
  }

  setActionLabel( actionLabel: string ) {
    this.actionLabelBehavior.next( actionLabel );
  }
}
