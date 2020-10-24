import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  newItem = "";
 imgUrl:any="";
 storedStatus:any="";
 newItemObj = {};
 arrayList = [];
 valueEdit = "";
 id="";
 editItem="";

   addToList(){
    if( this.storedStatus == true){
        this.newItemObj=this.newItem
        this.newItem = "";
        this.arrayList.push(Object.assign({url:this.imgUrl},{item:this.newItemObj})) 
        console.log(this.arrayList)
     }
   }


  fileChangeEvent(editFileInput: any){
    const reader = new FileReader();
        reader.onload = (e:any)=>{
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs=> {
              const imgBase64Path = e.target.result;
              this.imgUrl = imgBase64Path;
              this.storedStatus = true;
              return this.imgUrl;
            }
          }
          reader.readAsDataURL(editFileInput.target.files[0])
  }
  delete(id){
    for(let m = 0;m<=this.arrayList.length-1;m++){
      if(this.arrayList[id]==this.arrayList[m]){
         let temp = this.arrayList[m];
         this.arrayList[temp] = this.arrayList[m+1];
         this.arrayList[m] = this.arrayList[temp];
         -- this.arrayList.length
      }
    }
  }

    editList(id,value){
    this.id = id;
    this.editItem = value;
    if(this.storedStatus==true && this.imgUrl!==""){
      for(let x = 0;x<=this.arrayList.length-1;x++){
        if(this.arrayList[this.id]==this.arrayList[x])
         {
           this.arrayList[x]=Object.assign({url:this.imgUrl},{item:this.editItem})
           this.imgUrl=""
           this.editItem=""
         }
        console.log( this.arrayList[x])  }
    }
       this.imgUrl=""
  }


}
