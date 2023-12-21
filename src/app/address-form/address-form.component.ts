import { Component } from '@angular/core';

declare var require: any;
const CobrowseIO = require('cobrowse-sdk-js')
CobrowseIO.license = "h5U9O61S0DG05Q"
CobrowseIO.start()
@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  closeModel() {
    this.showData = false
  }

  // clientComp: any = null
  popup: any = null
  clientComp = document.getElementById('form-clint')    


  showData = false;

  ss: any = null;
  onHit(e: any) {

    e.preventDefault();
    console.log('clientComp==> ', this.clientComp)
    // this.clientComp.addEventListener("click", this.myFunction)
    // this.popup.addEventListener("click", this.myFunction2)

    CobrowseIO.client().then(() => {
      CobrowseIO.createSessionCode().then((code: any) => {
        console.log('your Cobrowse code is', code);
        this.ss = code;
        if (this.showData) {
          this.showData = true;
        } else {
          this.showData = false;
        }
        this.showData = !this.showData;



        // alert(`${code}`);
      }).catch((err: any) => console.log("CobrowseIO.createSessionCode() err===>", err));
    }).catch((err: any) => console.log("CobrowseIO.client() err===>", err))

  }

  myFunction() {
    console.log('myFunction called')
  }
  myFunction2() {
    console.log('myFunction2 called')
  }

  closePopup() {
    this.showData = false
  }

}
