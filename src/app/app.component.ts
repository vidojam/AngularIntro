import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];
  post: any; // Define 'post' property with the appropriate type
  postTitle: any;

  objArray: Array<any> = []



  // for postTitle only, must be... any
  // objArray: Array<any> = [
  //   { id: 1, postTitle: 'Post 1' },
  //   { id: 2, postTitle: 'Post 2' },
  //   { id: 3, postTitle: 'Post 3' },
  //   { id: 4, postTitle: 'Post 4' },
  //   { id: 5, postTitle: 'Post 5' },
  // ]


  
  constructor() {  
    // for (let i = 0; i < this.postArray.length; i++)
    //   console.log(this.postArray[i])
  }

  addNew() {
    this.objArray.push({ id: 6, postTitle: 'Post 6'});
  }

  onDelete(index: any) {
    this.objArray.indexOf(this.post);
    this.objArray.splice(index, 1)
  }

// Post Form...  
// export class AppComponent {
//   postTitle: string = "";
//   postDetails: string = "";
//   imageURL: string = "";
//   postURL: string ="";
//   addBackground: boolean= true;
//   constructor() {  
    
//   }


  
}