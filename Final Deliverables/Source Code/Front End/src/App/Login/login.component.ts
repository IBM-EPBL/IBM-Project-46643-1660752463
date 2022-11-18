import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata={
    email:"",
    password:""
  }
  submit=false;
  errorMessage="";
  loading=false;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.canAuthenticated();
  }
  onSubmit(){
    console.log(this.formdata);
    this.loading=true;
    this.auth
    .login(this.formdata.email,this.formdata.password)
    .subscribe({
      next:data=>{
        this.auth.storeToken(data.idToken);
        this.auth.canAuthenticated();
      },
      error:data=>{
        if(data.error.error.message=="INVALID_EMAIL"||data.error.error.message=="INVALID_PASSWORD"){
          this.errorMessage="Invalid credential"
        }else{
          this.errorMessage="Unknown Error!"
        }
        }

    }).add(()=>{
      this.loading=false
    })

  }
}
