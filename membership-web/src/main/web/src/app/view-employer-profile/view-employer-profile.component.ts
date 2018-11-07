import { Component, OnInit } from '@angular/core';
import { FormBuilder,
  FormGroup,
  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employer-profile',
  templateUrl: './view-employer-profile.component.html',
  styleUrls: ['./view-employer-profile.component.css']
})
export class ViewEmployerProfileComponent implements OnInit {

  viewEmpProfileForm: FormGroup;

  sourceTypes = ['WGS 2.0 System', 'Diamond 950', 'Facets System',
    'M204', 'QCare System', 'STAR System', 'WGS 1.3 System'];

  constructor( private router: Router,
               private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.viewEmpProfileForm = this.formBuilder.group({
      clientId: [ '', Validators.required ],
      caseNumber: [ '' ],
      sourceSystem: [ '', Validators.required ]
    });
  }

  get clientIdCtrl() {
    return this.viewEmpProfileForm.get( 'clientId' );
  }

  get caseNumberCtrl() {
    return this.viewEmpProfileForm.get( 'caseNumber' );
  }

  get sourceSystemCtrl() {
    return this.viewEmpProfileForm.get( 'sourceSystem' );
  }

  onSubmit(): void {
    if ( this.viewEmpProfileForm.invalid ) {
      console.log( 'into onSubmit 2' );
      return;
    }

    console.log( 'into onSubmit 3' );
  }
}
