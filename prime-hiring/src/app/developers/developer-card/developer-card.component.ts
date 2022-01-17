import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import DeveloperInterface from '../models/developer.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-developer-card',
  templateUrl: './developer-card.component.html',
  styleUrls: ['./developer-card.component.css'],
})
export class DeveloperCardComponent implements OnInit {
  @Input() developer!: DeveloperInterface;
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onChange: EventEmitter<number> = new EventEmitter();
  @Output() onHire: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  onDeleteClicked() {
    this.onDelete.emit(this.developer.id);
  }

  onHireClicked() {
    this.onHire.emit(this.developer.id);
  }

  onCheckBoxChecked() {
    this.onChange.emit(this.developer.id);
  }

  onDeveloperEdit() {
    this.router.navigate(['developers/add', this.developer.id]);
  }
}
