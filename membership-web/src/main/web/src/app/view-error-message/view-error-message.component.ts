import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-error-message',
  templateUrl: './view-error-message.component.html',
  styleUrls: ['./view-error-message.component.css']
})
export class ViewErrorMessageComponent implements OnInit {

  viewErrorMessageForm: FormGroup;

  statusTypes = ['Open', 'Complete', 'Bypass'];

  sourceTypes = ['WGS 2.0 System', 'Diamond 950', 'Facets System',
    'M204', 'QCare System', 'STAR System', 'WGS 1.3 System'];

  constructor( private router: Router,
               private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.viewErrorMessageForm = this.formBuilder.group({
      clientId: [ '', Validators.required ],
      statusType: [ '', Validators.required ],
      sourceSystem: [ '', Validators.required ]
    });
  }

  get clientIdCtrl() {
    return this.viewErrorMessageForm.get( 'clientId' );
  }

  get statusTypeCtrl() {
    return this.viewErrorMessageForm.get( 'statusType' );
  }

  get sourceSystemCtrl() {
    return this.viewErrorMessageForm.get( 'sourceSystem' );
  }

  onSubmit(): void {
    if ( this.viewErrorMessageForm.invalid ) {
      console.log( 'into onSubmit 2' );
      return;
    }

    console.log( 'into onSubmit 3' );
  }
}
