import { Component, OnInit } from '@angular/core';
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

// currentuser properties
user ='';


  constructor(private ds:DataService) {
    this.user=this.ds.currentuser
   }

  ngOnInit(): void {
  }

  deposit(){
    var acno = this.acno;
    var pswd= this.pswd;
    var amount= this.amount

    const result =this.ds.deposit(acno , pswd, amount)
    if(result){
      alert(`${amount} is credited....Available balance is ${result}`)
    }
    // alert('deposit succesful')

  }
  withdraw(){
    var acno = this.acno1;
    var pswd= this.pswd1;
    var amount= this.amount1;

    const result =this.ds.withdraw(acno , pswd, amount)
    if(result){
      alert(`${amount} is debited....Available balance is ${result}`)
    }
}

}