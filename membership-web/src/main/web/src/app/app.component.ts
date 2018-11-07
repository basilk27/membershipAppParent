import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  loginButtonOn: boolean;
//   mainManuFlag: boolean;
//   manuState: Observable<ManuState>;
//   zManuState: ManuState;

//  constructor(private httpClient: HttpClient, private meanuService: MeanuStateService) {
  constructor(private httpClient: HttpClient ) {
    this.loginButtonOn = true;
  }

  ngOnInit() {
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
    this.loginButtonOn = false;
  }
}
