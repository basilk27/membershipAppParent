import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { FormBuilder,
         FormGroup,
         Validators }         from '@angular/forms';
import { LoginService }       from '../service/login/login.service';
import { Login }              from '../model/login';
import { LoginStatus }        from '../model/login-status';
//import { MeanuStateService }  from '../service/state/meanu-state.service';
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
               private formBuilder: FormBuilder) {
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

    this.loginService.login( loginModel )
      .subscribe( (res: LoginStatus) => { this.loginStatus = res; },
        ( err: LoginStatus ) => { this.loginStatus = err; } );

//
//    console.log('into onSubmit 44444');
//    if ( this.loginStatus.loginFlag === false ) {
//      return;
//    }

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
