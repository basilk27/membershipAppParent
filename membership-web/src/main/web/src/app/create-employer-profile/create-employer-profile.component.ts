import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employer-profile',
  templateUrl: './create-employer-profile.component.html',
  styleUrls: ['./create-employer-profile.component.css']
})
export class CreateEmployerProfileComponent implements OnInit {

  createEmpProfileForm: FormGroup;

  sourceTypes = ['WGS 2.0 System', 'Diamond 950', 'Facets System',
    'M204', 'QCare System', 'STAR System', 'WGS 1.3 System'];

  constructor( private router: Router,
               private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.createEmpProfileForm = this.formBuilder.group({
      clientId: [ '', Validators.required ],
      caseNumber: [ '' ],
      sourceSystem: [ '', Validators.required ]
    });
  }

  get clientIdCtrl() {
    return this.createEmpProfileForm.get( 'clientId' );
  }

  get caseNumberCtrl() {
    return this.createEmpProfileForm.get( 'caseNumber' );
  }

  get sourceSystemCtrl() {
    return this.createEmpProfileForm.get( 'sourceSystem' );
  }

  onSubmit(): void {
    if ( this.createEmpProfileForm.invalid ) {
      console.log( 'into onSubmit 2' );
      return;
    }

    console.log( 'into onSubmit 3' );
  }
}
