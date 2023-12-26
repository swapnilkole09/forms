import { Component, Input, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

declare var require: any;
const CobrowseIO = require('cobrowse-sdk-js');
CobrowseIO.license = 'h5U9O61S0DG05Q';
CobrowseIO.start();
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnInit {
  labels: string[] = ['Label 3', 'Label 4'];
  title: string = '';
  currentRout!: String;
  currentFormData:any
  currentForm:any = {
    mobile:{title:"Mobile Number",lable3:'Old Mobile No :',lable4:'New Mobile No :'},
    email:{title:"Email Address",lable3:'Old Email :',lable4:'New Email :'},
    address: {
      title: 'Address Details',
      lable3: 'Address Line 1 :',
      lable4: 'Address Line 2 :',
    },
  };
  constructor(private route: Router) {}
  ngOnInit(): void {
    this.currentRout = this.route.url;
    console.log('current url', this.currentRout);
   
    let path= this.currentRout.split("/update/")[1]
   console.log('safdefsetezrg', path)
   
   this.currentFormData = this.currentForm[path]
   console.log('currentform',this.currentFormData)
    
  }


  closeModel() {
    this.showData = false;
  }

  // clientComp: any = null
  popup: any = null;
  clientComp = document.getElementById('form-clint');

  showData = false;

  ss: any = null;
  onHit(e: any) {
    e.preventDefault();
    console.log('clientComp==> ', this.clientComp);
    // this.clientComp.addEventListener("click", this.myFunction)
    // this.popup.addEventListener("click", this.myFunction2)

    CobrowseIO.client()
      .then(() => {
        CobrowseIO.createSessionCode()
          .then((code: any) => {
            console.log('your Cobrowse code is', code);
            this.ss = code;
            if (this.showData) {
              this.showData = true;
            } else {
              this.showData = false;
            }
            this.showData = !this.showData;

            // alert(`${code}`);
          })
          .catch((err: any) =>
            console.log('CobrowseIO.createSessionCode() err===>', err)
          );
      })
      .catch((err: any) => console.log('CobrowseIO.client() err===>', err));
  }

  myFunction() {
    console.log('myFunction called');
  }
  myFunction2() {
    console.log('myFunction2 called');
  }

  closePopup() {
    this.showData = false;
  }
}
