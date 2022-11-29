import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname ="";
  acno ="";
  pswd ="";
  
  

  constructor( private fb:FormBuilder,private ds:DataService , private router:Router){

  }
  //registratiom model
  registerForm=this.fb.group({
    acno:[''],
    uname:[''],
    pswd:['']
  })
  //control pass to ts to html file
  

  ngOnInit(): void {
  }
  register(){
    console.log(this.registerForm);
    
  var uname=this.registerForm.value.uname;
  var acno= this.registerForm.value.pswd;
  var pswd = this.registerForm.value.pswd;

  const result = this.ds.register(acno,uname,pswd);
  if(result){
       alert('Register Succesful')
       this.router.navigateByUrl('')
  }
else{
  alert('User Aleready Registered')
  this.router.navigateByUrl('register')
}
   
  }
  
}
