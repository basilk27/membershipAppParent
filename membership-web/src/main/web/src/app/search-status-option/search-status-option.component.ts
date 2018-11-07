import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-status-option',
  templateUrl: './search-status-option.component.html',
  styleUrls: ['./search-status-option.component.css']
})
export class SearchStatusOptionComponent implements OnInit {

  searchStatusOptionForm: FormGroup;

  statusTypes = ['All', 'ABEND', 'Completed', 'No File Received', 'Requester', 'Running'];

  sourceTypes = ['WGS 2.0 System', 'Diamond 950', 'Facets System',
    'M204', 'QCare System', 'STAR System', 'WGS 1.3 System'];

  constructor( private router: Router,
               private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.searchStatusOptionForm = this.formBuilder.group({
      sourceSystem: [ '', Validators.required ],
      statusTypes: [ '', Validators.required ]
    });
  }

  get statusTypesCtrl() {
    return this.searchStatusOptionForm.get( 'statusTypes' );
  }

  get sourceSystemCtrl() {
    return this.searchStatusOptionForm.get( 'sourceSystem' );
  }

  onSubmit(): void {
    if ( this.searchStatusOptionForm.invalid ) {
      console.log( 'into onSubmit 2' );
      return;
    }

    console.log( 'into onSubmit 3' );
  }
}
