import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-schedule-option',
  templateUrl: './job-schedule-option.component.html',
  styleUrls: ['./job-schedule-option.component.css']
})
export class JobScheduleOptionComponent implements OnInit {

  jobScheduleOptionForm: FormGroup;

  jobTypes = ['Create Job Schedule', 'Update Job Schedule', 'View Job Schedule'];

  sourceTypes = ['WGS 2.0 System', 'Diamond 950', 'Facets System',
    'M204', 'QCare System', 'STAR System', 'WGS 1.3 System'];

  constructor( private router: Router,
               private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.jobScheduleOptionForm = this.formBuilder.group({
      clientId: [ '', Validators.required ],
      jobType: [ '', Validators.required ],
      sourceSystem: [ '', Validators.required ]
    });
  }

  get clientIdCtrl() {
    return this.jobScheduleOptionForm.get( 'clientId' );
  }

  get jobTypeCtrl() {
    return this.jobScheduleOptionForm.get( 'jobType' );
  }

  get sourceSystemCtrl() {
    return this.jobScheduleOptionForm.get( 'sourceSystem' );
  }

  onSubmit(): void {
    if ( this.jobScheduleOptionForm.invalid ) {
      console.log( 'into onSubmit 2' );
      return;
    }

    console.log( 'into onSubmit 3' );
  }
}
