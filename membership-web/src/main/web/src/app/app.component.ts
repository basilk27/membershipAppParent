import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginLogoutActivateBtn } from './model/login-logout-activate-btn';
import { MenuEnablerService } from './service/enable/menu-enabler.service';
// import { MeanuStateService } from './service/state/meanu-state.service';
// import { ManuState } from './model/manu-state';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ngMemberEET';

  loginLogoutActivateBtn: LoginLogoutActivateBtn;

// bmk delete  loginButtonOn: boolean;
// bmk delete  logoutButtonOn: boolean;
//   mainManuFlag: boolean;
//   manuState: Observable<ManuState>;
//   zManuState: ManuState;

//  constructor(private httpClient: HttpClient, private meanuService: MeanuStateService) {
  constructor(private httpClient: HttpClient,
              private router: Router,
              private enableLoginLogoutSrv: MenuEnablerService ) {
// bmk delete    this.loginButtonOn = true;
// bmk delete    this.logoutButtonOn = false;
  }

  ngOnInit() {
      this.enableLoginLogoutSrv.loginLogoutObservable.subscribe( activateBtn => this.loginLogoutActivateBtn = activateBtn );
//    this.manuState = this.meanuService.getState();
    // this.loginFlag =
//    this.manuState.subscribe( aManu => { this.zManuState = aManu; } );
//    console.log('BBBBB  ' + this.zManuState.loginButtonOn);
//    console.log('NNNNN  ' + this.zManuState.mainManuFlag);

//    this.mainManuFlag = false;
    console.log('BBBBBBBBBBBBBBB -- Looks like we get to App Component ngOnInit()');
//    this.httpClient.get('/api/home' ).subscribe( data => {});
  }

  onLoginClick(): void {
    this.enableLoginLogoutSrv.setLoginLogoutButtonFlags( new LoginLogoutActivateBtn(false, false ) );
  }

  onLogoutClick(): void {
    this.enableLoginLogoutSrv.setLoginLogoutButtonFlags( new LoginLogoutActivateBtn(true, false ) );
      this.router.navigate(['welcome']);

      console.log('DoTO on logout???, you will need to remove the JWT token');
  }
}
