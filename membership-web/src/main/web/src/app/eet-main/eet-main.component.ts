import { Component, OnInit } from '@angular/core';
import { MatTabGroup } from '@angular/material';
import { ManuState } from '../model/manu-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eet-main',
  templateUrl: './eet-main.component.html',
  styleUrls: ['./eet-main.component.css']
})
export class EetMainComponent implements OnInit {

  zManuState: ManuState;

  constructor( private _router: Router ) {
    this.zManuState =  {
      mainManuFlag: true,
      mainButtonOn: false,
      cadocsButtonOn: true,
      searchButtonOn: true,
      eeterrorsButtonOn: true,
      scheduleButtonOn: true,
      mappingButtonOn: true
    };
  }

  ngOnInit() {
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
}
