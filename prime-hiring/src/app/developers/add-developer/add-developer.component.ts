import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import DeveloperService from '../developer.service';
import { NativeLanguage } from '../enums/native-language-enum';
import { Technology } from '../enums/technology-enum';

@Component({
  selector: 'app-add-developer',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.css'],
})
export class AddDeveloperComponent implements OnInit {
  developerForm!: FormGroup;

  nativeLanguages = Object.values(NativeLanguage).filter(
    (value) => typeof value === 'string'
  );

  technologies = Object.values(Technology).filter(
    (value) => typeof value === 'string'
  );

  constructor(
    private fb: FormBuilder,
    private developerService: DeveloperService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.developerService.getById(params['id']).subscribe((developer) => {
          this.createForm();

          this.developerForm.patchValue({ ...developer });
        });
      }
    });

    this.createForm();
  }

  ngOnInit(): void {}

  private createForm(): void {
    this.developerForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('[- +()0-9]{6,}')],
      ],
      location: [''],
      profilePicture: [''],
      pricePerHour: ['', [Validators.required, Validators.min(0)]],
      technology: ['', Validators.required],
      description: [''],
      yearsOfExperience: ['', [Validators.required, Validators.min(0)]],
      nativeLanguage: ['', Validators.required],
      linkedinProfileLink: [''],
    });
  }

  onFormSubmit(): void {
    this.developerService
      .addDeveloper(this.developerForm.value)
      .subscribe(() => {
        this.router.navigateByUrl('developers');
      });
  }

  get isFormValid(): boolean {
    return this.developerForm.valid;
  }

  get name() {
    return this.developerForm.get('name');
  }

  get email() {
    return this.developerForm.get('email');
  }

  get phoneNumber() {
    return this.developerForm.get('phoneNumber');
  }

  get location() {
    return this.developerForm.get('location');
  }

  get pricePerHour() {
    return this.developerForm.get('pricePerHour');
  }

  get technology() {
    return this.developerForm.get('technology');
  }

  get yearsOfExperience() {
    return this.developerForm.get('yearsOfExperience');
  }

  get nativeLanguage() {
    return this.developerForm.get('nativeLanguage');
  }
}
