import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import DeveloperService from '../developer.service';
import DeveloperInterface from '../models/developer.model';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css'],
})
export class DeveloperListComponent implements OnInit {
  developers!: DeveloperInterface[];

  selectedDevelopersForm!: FormGroup;

  constructor(
    private developerService: DeveloperService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.fetchData();
  }

  private createForm(): void {
    this.selectedDevelopersForm = this.fb.group({
      selectedDeveloperIds: this.fb.array([], Validators.required),
    });
  }

  fetchData() {
    this.developerService.getAllDevelopers().subscribe((response) => {
      this.developers = response;
    });
  }

  getSelectedDeveloperIds(): FormArray {
    return this.selectedDevelopersForm.get('selectedDeveloperIds') as FormArray;
  }

  onDeveloperChecked(id: number): void {
    let index = this.getSelectedDeveloperIds().controls.findIndex(
      (x) => x.value === id
    );
    if (index === -1) {
      this.getSelectedDeveloperIds().push(new FormControl(id));
    } else {
      this.getSelectedDeveloperIds().removeAt(index);
    }
  }

  onDeveloperHired(id: number): void {
    this.getSelectedDeveloperIds().clear();
    this.getSelectedDeveloperIds().push(new FormControl(id));
    this.onSubmit();
  }

  onDeveloperDeleted(id: number): void {
    const index = this.developers.findIndex((d) => d.id === id);

    if (index !== -1) {
      this.developers.slice(index, 1);
      this.developerService.deleteDeveloper(id).subscribe(() => {
        this.fetchData();
      });
    }
  }

  onSubmit() {
    this.router.navigate([
      '/hireddevelopers/add/',
      this.selectedDevelopersForm.value,
    ]);
  }
}
