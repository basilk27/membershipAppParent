import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,
         FormGroup,
         Validators } from '@angular/forms';
import { LoginService } from '../service/login/login.service';
import { Login } from '../model/login';
import { LoginStatus } from '../model/login-status';
import { MenuEnablerService } from '../service/enable/menu-enabler.service';
import { LoginLogoutActivateBtn } from '../model/login-logout-activate-btn';
import { EetMenuBuilder } from '../model/eet-menu-builder';
// import { MeanuStateService }  from '../service/state/meanu-state.service';
// import { ManuState }          from '../model/manu-state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  displayManu: boolean;
  loginForm: FormGroup;
  loginStatus: LoginStatus;
  invalidAuth: boolean;

  constructor( private router: Router,
               private loginService: LoginService,
               private formBuilder: FormBuilder,
               private enableLoginLogoutSrv: MenuEnablerService ) {
    this.displayManu = false;
    this.invalidAuth = false;
  }

  ngOnInit() {
    this.loginStatus = new LoginStatus( false, '');

    this.loginForm = this.formBuilder.group({
      username: [ '', Validators.required ],
      password: [ '', Validators.required ]
    });
  }

  get usernameCtrl() {
    return this.loginForm.get( 'username' );
  }

  get passwordCtrl() {
    return this.loginForm.get( 'password' );
  }

  onSubmit(): void {
    if ( this.loginForm.invalid ) {
      console.log('into onSubmit 2');
      return;
    }

    console.log('into onSubmit 3');

    const loginModel = new Login( this.loginForm.get('username').value,
      this.loginForm.get( 'password' ).value);

//    const loginStatus: LoginStatus = this.loginService.login( loginModel );
    /*
        this.loginService.login( loginModel )
          .subscribe((status: LoginStatus) => {
            this.loginStatus = new LoginStatus( false, '');
            status;
            if (status.code === 'FAILURE') {
              this.alertStyle = 'alert alert-danger';
            }
          });
    */

// bb    this.loginService.login( loginModel )
// bb      .subscribe( (res: LoginStatus) => { this.loginStatus = res; },
// bb        ( err: LoginStatus ) => { this.loginStatus = err; } );

//
//    console.log('into onSubmit 44444');
//    if ( this.loginStatus.loginFlag === false ) {
//      return;
//    }
    this.enableLoginLogoutSrv.setLoginLogoutButtonFlags( new LoginLogoutActivateBtn(false, true ) );
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

    this.router.navigate(['main']);
  }

  /*
      if ( loginStatus.loginFlag === false ) {
        this.invalidAuth = true;
        // bmk we have work todo here
        // this.loginForm.
        return;
      }
      console.log(this.loginForm.value);

      this.router.navigate(['main']);
    }
    */
}
