import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import HiredDeveloperService from '../hired-developer.service';
import DeveloperService from '../../developers/developer.service';
import DeveloperInterface from 'src/app/developers/models/developer.model';
import HiredDeveloperInterface from '../models/hired-developer';

@Component({
  selector: 'app-add-hired-developers',
  templateUrl: './add-hired-developers.component.html',
  styleUrls: ['./add-hired-developers.component.css'],
})
export class AddHiredDevelopersComponent implements OnInit {
  hiredDeveloperForm!: FormGroup;

  developers = new Array<DeveloperInterface>();

  developerIds!: number[];

  minDate!: Date;

  constructor(
    private fb: FormBuilder,
    private hiredDeveloperService: HiredDeveloperService,
    private developerService: DeveloperService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      if (params['selectedDeveloperIds']) {
        this.developerIds = params['selectedDeveloperIds'].split(',');
        this.developerIds.map((developerId) => {
          this.developerService.getById(developerId).subscribe((developer) => {
            this.developers.push(developer);
          });
        });
      } else {
        this.developerService.getAllDevelopers().subscribe((response) => {
          this.developers = response;
        });
      }
    });
    this.createForm();
  }

  ngOnInit(): void {
    this.minDate = new Date();
  }

  private createForm(): void {
    this.hiredDeveloperForm = this.fb.group({
      id: [''],
      developerIdForm: this.fb.group({
        developerIds: this.fb.array([], Validators.required),
      }),
      start: ['', Validators.required],
      end: ['', Validators.required],
    });
  }

  hiredDeveloperIdsList(): FormArray {
    return this.hiredDeveloperForm
      .get('developerIdForm')
      ?.get('developerIds') as FormArray;
  }

  developerForm(developerId: any, start: any, end: any): FormGroup {
    return this.fb.group({
      id: [''],
      developerId: developerId,
      start: start,
      end: end,
    });
  }
  hiredDeveloperRecords(): FormArray {
    let recordsFormArray = this.fb.array([]);

    this.hiredDeveloperIdsList().value.forEach((developerId: number) => {
      recordsFormArray.push(
        this.developerForm(
          developerId,
          this.hiredDeveloperForm.get('start'),
          this.hiredDeveloperForm.get('end')
        )
      );
    });
    return recordsFormArray;
  }

  onFormSubmit(): void {
    this.hiredDeveloperRecords().value.forEach(
      (hiredDeveloper: HiredDeveloperInterface) => {
        this.hiredDeveloperService
          .addHiredDeveloper(hiredDeveloper)
          .subscribe();
      }
    );

    this.router.navigateByUrl('developers');
  }

  get developerIdsList() {
    return this.hiredDeveloperIdsList();
  }
  get start() {
    return this.hiredDeveloperForm.get('start');
  }
  get end() {
    return this.hiredDeveloperForm.get('end');
  }
}
