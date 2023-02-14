import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  //(3rd execute)


  aim = 'your perfect banking partner'
  account ='Enter your account here'
  acno =''
  pswd=''


  //class - collection of properties and function
  //properties/variables
  //functions/methods - user defined functions
  
  //dependancy injuction
  constructor(private fb:FormBuilder  ,private ds:DataService,private router:Router) { //(1st execute)
  //it automatically invokes when the object is created
  //object initialization

}
loginForm =this.fb.group({
acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
pswd:['',[Validators.required,Validators.pattern('[a-zA-Z,0-9]*')]]

})

  ngOnInit(): void {  //(2nd execute)
  }
  //its a lifecycle hooks of angualr
  //when the component is created at the same time it will initialize or  authorize
acnoChange(event:any){

  console.log(event);
  this.acno=event.target.value;
  console.log(this.acno);
  
  
}


pswdChange( event:any){
  this.pswd=event.target.value
  console.log(this.pswd);
  
}
  login(){
    // alert('login clicked')
    
    var acno = this.loginForm.value.acno;
    var pswd= this.loginForm.value.pswd;
    // var userDetailes= this.ds.userDetails;
   
    if(this.loginForm.valid){
      this.ds.login(acno,pswd)
      .subscribe((result:any)=>{
        localStorage.setItem('currentuser',JSON.stringify(result.currentuser));
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno));
        localStorage.setItem('token',JSON.stringify(result.token));
        alert(result.message);
        this.router.navigateByUrl('dashboard')
      },
      result=>{
        alert(result.error.message)
        
       }
       )
      }
}
}