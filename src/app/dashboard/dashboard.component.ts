import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno =""
  pswd =""
  amount=""
  acno1=""
  pswd1=""
  amount1=""
  sdate:any

// currentuser properties
user ='';


  constructor(private fb:FormBuilder,  private ds:DataService, private router:Router) {
    this.user=this.ds.currentuser
    this.sdate=new Date();
   }
   //deposit model
   depositForm=this.fb.group({
   acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
   pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
   amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  
  })

  //withdra model
  withdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]],

  })
 
  ngOnInit(): void {
    // if(! localStorage.getItem('currentAcno')){
    //   alert('please login')
    //   this.router.navigateByUrl('')
    // }

    this.user=JSON.parse(localStorage.getItem('currentuser') || '')
    console.log(this.user);
    
  }

  deposit(){
    var acno = this.depositForm.value.acno;
    var pswd= this.depositForm.value.pswd;
    var amount= this.depositForm.value. amount

    if(this.depositForm.valid){
    this.ds.deposit(acno , pswd, amount)
    .subscribe((result:any)=>{
      alert(result.message)

    },
    result=>
    {
      alert(result.error.message)
    })
    
  }

  }
  withdraw(){
    var acno = this.withdrawForm.value. acno1;
    var pswd= this.withdrawForm.value. pswd1;
    var amount= this.withdrawForm.value. amount1;
    if(this.withdrawForm.valid){
      this.ds.withdraw(acno , pswd, amount)
      .subscribe((result:any)=>{
        alert(result.message)
  
      },
      result=>
      {
        alert(result.error.message)
      })

   

//     const result =this.ds.withdraw(acno , pswd, amount)
//     if(result){
//       alert(`${amount} is debited....Available balance is ${result}`)
//     }
// }
// else{
//   alert('invalid form')
}
}



logout(){
  alert('clicked')
  localStorage.removeItem('currentAcno');
  localStorage.removeItem('currentuser');
  this.router.navigateByUrl('')
}
delete(){
  // alert('clicked')
  this.acno=JSON.parse(localStorage.getItem('currentAcno') || '')
}
onCancel(){
  this.acno="";
}

}