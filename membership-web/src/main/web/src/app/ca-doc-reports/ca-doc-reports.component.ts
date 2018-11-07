import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ca-doc-reports',
  templateUrl: './ca-doc-reports.component.html',
  styleUrls: ['./ca-doc-reports.component.css']
})
export class CaDocReportsComponent implements OnInit {

  constructor( private _router: Router ) { }

  ngOnInit() {
  }

  goBackToMain(): void {
    this._router.navigate(['/main']);
  }
}
