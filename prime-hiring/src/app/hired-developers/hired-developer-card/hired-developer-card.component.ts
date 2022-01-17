import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import DeveloperInterface from 'src/app/developers/models/developer.model';
import HiredDeveloperService from '../hired-developer.service';

@Component({
  selector: 'app-hired-developer-card',
  templateUrl: './hired-developer-card.component.html',
  styleUrls: ['./hired-developer-card.component.css'],
})
export class HiredDeveloperCardComponent implements OnInit {
  @Input() developer!: DeveloperInterface;
  @Input() formGroupName!: string;

  checked = true;

  formCard = new FormGroup({});

  constructor(
    private rootFormGroup: FormGroupDirective,
    private hiredDeveloperService: HiredDeveloperService
  ) {}

  ngOnInit(): void {
    this.formCard = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
  }

  onCheckboxChange(e: any) {
    const checkSelectedArray: FormArray = this.formCard.get(
      'developerIds'
    ) as FormArray;

    if (e.target.checked) {
      checkSelectedArray.push(new FormControl(e.target.value));
    } else {
      let index = checkSelectedArray.controls.findIndex(
        (x) => x.value === e.target.value
      );
      if (index !== -1) {
        checkSelectedArray.removeAt(index);
      }
    }
    this.getHiredRange();
  }

  getHiredRange(): void {
    console.log(
      this.hiredDeveloperService
        .getAllByDeveloperId(this.developer.id)
        .subscribe((developer) => {})
    );
  }
}
