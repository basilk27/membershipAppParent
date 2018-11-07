import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employer-profile',
  templateUrl: './update-employer-profile.component.html',
  styleUrls: ['./update-employer-profile.component.css']
})
export class UpdateEmployerProfileComponent implements OnInit {

  updateEmpProfileForm: FormGroup;

  sourceTypes = ['WGS 2.0 System', 'Diamond 950', 'Facets System',
    'M204', 'QCare System', 'STAR System', 'WGS 1.3 System'];

  constructor( private router: Router,
               private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.updateEmpProfileForm = this.formBuilder.group({
      clientId: [ '', Validators.required ],
      caseNumber: [ '' ],
      sourceSystem: [ '', Validators.required ]
    });
  }

  get clientIdCtrl() {
    return this.updateEmpProfileForm.get( 'clientId' );
  }

  get caseNumberCtrl() {
    return this.updateEmpProfileForm.get( 'caseNumber' );
  }

  get sourceSystemCtrl() {
    return this.updateEmpProfileForm.get( 'sourceSystem' );
  }

  onSubmit(): void {
    if ( this.updateEmpProfileForm.invalid ) {
      console.log( 'into onSubmit 2' );
      return;
    }

    console.log( 'into onSubmit 3' );
  }
}
