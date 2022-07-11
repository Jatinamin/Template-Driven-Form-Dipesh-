import { Component, VERSION } from '@angular/core';
// import { NgForm } from `@angular/forms`;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  item:Array<any> = [];
  myForm: any
   constructor() { }
 
   ngOnInit(): void {
   }
   sendFormData(_forms:any){
 
     this.item.push(_forms)
   
   
     }
     Deleteinfo(_deta:any){
            this.item.splice(this.item.indexOf(_deta),1)
     }
 
     }
