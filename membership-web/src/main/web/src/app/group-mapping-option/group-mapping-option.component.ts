import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-mapping-option',
  templateUrl: './group-mapping-option.component.html',
  styleUrls: ['./group-mapping-option.component.css']
})
export class GroupMappingOptionComponent implements OnInit {

  groupMappingOptionForm: FormGroup;

  optionTypes = ['View Group Mapping'];

  sourceTypes = ['WGS 2.0 System', 'Diamond 950', 'Facets System',
    'M204', 'QCare System', 'STAR System', 'WGS 1.3 System'];

  constructor( private router: Router,
               private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.groupMappingOptionForm = this.formBuilder.group({
      clientId: [ '', Validators.required ],
      optionType: [ '', Validators.required ],
      sourceSystem: [ '', Validators.required ]
    });
  }

  get clientIdCtrl() {
    return this.groupMappingOptionForm.get( 'clientId' );
  }

  get optionTypesCtrl() {
    return this.groupMappingOptionForm.get( 'optionType' );
  }

  get sourceSystemCtrl() {
    return this.groupMappingOptionForm.get( 'sourceSystem' );
  }

  onSubmit(): void {
    if ( this.groupMappingOptionForm.invalid ) {
      console.log( 'into onSubmit 2' );
      return;
    }

    console.log( 'into onSubmit 3' );
  }
}
