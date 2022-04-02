import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  valid: boolean = true;
  warning: string = "";

  constructor() {
      this.name = "";
      this.email = "";
      this.message = "";
   }

  ngOnInit(): void {
  }

  validate(){
    return this.name && this.email && this.message;
  }

  onSubmit(f: any){
    if(this.validate()){
      this.warning = "";

    }
    else{
      this.warning = "Please fill out all fields";
    }

  }

}
