import { Component, OnInit } from '@angular/core';
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
  constructor(private ds:DataService,private router:Router) { //(1st execute)
  //it automatically invokes when the object is created
  //object initialization
}

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
    var acno = this.acno;
    var pswd= this.pswd;
    var userDetailes= this.ds.userDetails;
    const result = this.ds.login(acno,pswd)
    if(result){
      alert('login successful')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('lofin failed')
    }


    // if(acno in userDetailes){
    //   if(pswd==userDetailes[acno]['password']){
    //     alert('Login Succesful')
    //     this.router.navigateByUrl('dashboard')
    //   }
    //   else{
    //     alert('Ivalid Password')
    //   }
    // }
    // else{
    //   alert('Invalid Userdetails')
    // }
//   }



  
  // login(a:any , p:any){
  //   // alert('login clicked')
  //   var acno = a.value;
  //   var pswd= p.value;
  //   var userDetailes= this.userDetails;


  //   if(acno in userDetailes){
  //     if(pswd==userDetailes[acno]['password']){
  //       alert('Login Succesful')
  //     }
  //     else{
  //       alert('Ivalid Password')
  //     }
  //   }
  //   else{
  //     alert('Invalid Userdetails')
  //   }
  // }

}

}

