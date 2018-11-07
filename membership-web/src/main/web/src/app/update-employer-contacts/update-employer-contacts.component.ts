import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employer-contacts',
  templateUrl: './update-employer-contacts.component.html',
  styleUrls: ['./update-employer-contacts.component.css']
})
export class UpdateEmployerContactsComponent implements OnInit {

  updateEmpContactProfileForm: FormGroup;

  sourceTypes = ['WGS 2.0 System', 'Diamond 950', 'Facets System',
    'M204', 'QCare System', 'STAR System', 'WGS 1.3 System'];

  constructor( private router: Router,
               private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.updateEmpContactProfileForm = this.formBuilder.group({
      clientId: [ '', Validators.required ],
      caseNumber: [ '' ],
      sourceSystem: [ '', Validators.required ]
    });
  }

  get clientIdCtrl() {
    return this.updateEmpContactProfileForm.get( 'clientId' );
  }

  get caseNumberCtrl() {
    return this.updateEmpContactProfileForm.get( 'caseNumber' );
  }

  get sourceSystemCtrl() {
    return this.updateEmpContactProfileForm.get( 'sourceSystem' );
  }

  onSubmit(): void {
    if ( this.updateEmpContactProfileForm.invalid ) {
      console.log( 'into onSubmit 2' );
      return;
    }

    console.log( 'into onSubmit 3' );
  }
}
