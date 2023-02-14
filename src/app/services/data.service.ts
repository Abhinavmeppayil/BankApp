import { transition } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//global http hader object
const options={
  headers: new HttpHeaders()
  
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  //current user
  currentuser = ''
  //current aacount number
  currentAcno="";


  constructor(private http:HttpClient) 
  {
    // this.getDetails
   }
  //saveDetails-- to save data to ythe localstorage

  saveDetails(){
    //DATABASE
    localStorage.setItem('DataBase',JSON.stringify(this.userDetails))

    //currentuser

    localStorage.setItem('currentuser',JSON.stringify(this.currentuser))

    //currentAccountNumber

    localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
  }

  // getDetails(){
  //   if(localStorage.getItem('DataBase')){
  //     this.userDetails=JSON.parse(localStorage.getItem('DataBase')|| '')
  //   }
  //   if(localStorage.getItem('currentuser')){
  //     this.currentuser=JSON.parse(localStorage.getItem('currentuser')|| '')
  //   }
  //   if(localStorage.getItem('currentAcno')){
  //     this.currentAcno=JSON.parse(localStorage.getItem('currentAcno')|| '')
  //   }
  // }
 


  //database creation 


  userDetails: any = {
    1000: { acno: 1000, username: 'Abhinav', password: 1000, balance: 1000, transaction: [] },
    1001: { acno: 1001, username: 'Soorya', password: 1001, balance: 1000, transaction: [] },
    1002: { acno: 1002, username: 'Anujith', password: 1000, balance: 1000, transaction: [] }
  }
  register(acno: any, username: any, password: any,) {

    const data = {
      acno,
      password,
      username
    }
    return this.http.post('http://localhost:3000/register',data)
    // let userDetails = this.userDetails
    // if (acno in userDetails) {
    //   return false;
    // }
    // else {
    //   userDetails[acno] = {
    //     acno,
    //     password,
    //     username,
    //     balance: 0,
    //     transaction: []

    //   }
    //  this. saveDetails()
    //   console.log(userDetails);
    //   return true

    // }

  }
  login(acno: any, pswd: any) {



    const data ={
      acno,
      pswd
    }
    return this.http.post('http://localhost:3000/login',data);

  }



    getToken(){
      //fetch token from localstorage
      const token = JSON.parse(localStorage.getItem('token') || '')

      //append token inside the header

      let headers= new HttpHeaders()
      

      if(token){
       options. headers=headers.append('x-access-token',token)
      }
      return options//to get token
    }

    

  
  deposit(acno: any, pswd: any, amt: any) {

    const data ={
      acno,
      pswd,
      amount:amt
    }
    return this.http.post('http://localhost:3000/deposit',data,this.getToken())
  }

    // var amount = parseInt(amt)
    // let userDetails = this.userDetails

    // if (acno in userDetails) {
    //   if (pswd == userDetails[acno]['password']) {
    //     userDetails[acno]['balance'] += amount;
    //     userDetails[acno]['transaction'].push({
    //       Type: 'credit',
    //       Amount: amount

    //     })
    //     this. saveDetails()
    //     console.log(userDetails);
        

    //     return userDetails[acno]['balance']
    //   }
    //   else {
    //     alert('password missmatch')
    //     return false
    //   }

    // }
    // else {
    //   alert('invalid data')
    //   return false
    // }
  
  // withdraw(acno:any,){

  // }
  withdraw(acno: any, pswd: any, amt: any) {
    const data ={
      acno,
      pswd,
      amount:amt
    }
    return this.http.post('http://localhost:3000/withdraw',data,this.getToken())
    // var amount = parseInt(amt)
    // let userDetails = this.userDetails

    // if (acno in userDetails) {
    //   if (pswd == userDetails[acno]['password']) {
    //     if (userDetails[acno]['balance'] > amount) {
    //       userDetails[acno]['balance'] -= amount;
    //       userDetails[acno]['transaction'].push({
    //         Type: 'Debit',
    //         Amount: amount

    //       })
    //       this. saveDetails()
    //       return userDetails[acno]['balance']
    //     }
    //     else {
    //       alert('Transaction Failed')
    //       return false
    //     }
    //   }
    //   else {
    //     alert('password missmatch')
    //     return false
    //   }

    // }
    // else {
    //   alert('invalid data')
    //   return false
    // }
  }
  getTransaction(acno: any) {
    // return this.userDetails[acno]['transaction']//details of transtion
    const data ={
      acno
  }
  return this.http.post('http://localhost:3000/transaction',data,this.getToken())
}
}


