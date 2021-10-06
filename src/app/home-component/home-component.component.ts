import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponent implements OnInit {
  public modalRef: BsModalRef;
  registrationForm: FormGroup;
  address: FormGroup;
  constructor(private modalService: BsModalService, public fb: FormBuilder) {

  }

  ngOnInit(): void {

    /*this.registrationForm = new FormGroup({
        name: new FormControl('aasdsad'),
        addres: new FormControl(''),
        phone: new FormControl(''),
        address: new FormGroup({
          'city': new FormControl(''),
          'state': new FormControl(''),
          'postalCode': new FormControl('')
        })
      });
      */
    this.registrationForm = this.fb.group({
      name: [''],
      phone: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        street: [''],
        postalCode: ['']
      }),

    })

  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  submitForm() {
    console.log(this.registrationForm.value);
  }

}
