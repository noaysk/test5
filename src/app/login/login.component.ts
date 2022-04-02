import { Component, OnInit, Sanitizer } from '@angular/core';
import User from '../User';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:User = new User();
  public warning:string = "";
  public valid: boolean;

  constructor(private auth:AuthService, private router:Router) {
    this.valid=true;
    this.user.userName = "";
    this.user.password = "";
   }

  ngOnInit(): void {
  }

  validate(validation_string: any){
    let test =  /^[A-Za-z0-9]*$/.test(validation_string) && validation_string.length != 0;
    console.log(test);
    return test;
  }

  onSubmit(f: NgForm): void {
    if(this.validate(this.user.userName) && this.validate(this.user.password)){
      this.warning = "";
      if(this.user.userName == "bob" && this.user.password == "myPassword"){
        this.router.navigate(['/contactus'])
      } else{
        this.warning = "Incorrect username / password";
      }
    //   this.auth.login(this.user).subscribe(
    //     (success) => {
    //      // store the returned token 
    //      this.auth.setToken(success.token);
    //      // redirect to the "vehicles" route
    //      this.router.navigate(['/contactus']);
    //    },      
    //    (err) => {
    //      this.warning = err.message;
    //    }
    //  );
    } else{
      this.warning = "Error in username / password"
    }
  }
}