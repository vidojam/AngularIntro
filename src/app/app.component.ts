import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  bool:boolean = true;

  // event binding in angular
  buttonClick () {
    console.log('Button Click Event worked');
  }

  // console.log('Keyup event working');
  // console.log($event.keyCode);

  // Event filtering - gets Enter key pressed in inspector
  // onKeyup() {
  //     console.log('Enter key pressed');
  // }

  // How we get the value in the text box
  // onKeyup($event: any) {
  //     console.log($event.target.value);
  // }

  // Get variable username is used to capture the parameter
  onKeyup(username: any) {
      console.log(username);
  }

  


  // onKeyup($event: any) {
  //   // console.log('Keyup event working');
  //   // console.log($event.keyCode);
    
  //   if($event.keyCode == 13 ){
  //     console.log('Enter key pressed');
  //   }
  // }



  // message: string = 'Message From Typescript Component File'
  // imgUrl: string = 'https://plus.unsplash.com/premium_photo-1669497495583-d552beb8ece4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1462&q=80';


// export class AppComponent implements AfterViewInit {
  // title = 'AngularIntro';
  // parentMessage: string = 'Message changed';
  // // message!:string;
  // fromChildOutput!:string;
  


  // @ViewChild(PostComponent) childComp: PostComponent | undefined;

  constructor() {
    // No need to initialize message here anymore
  }

//   ngAfterViewInit() {
//     console.log(this.childComp);
//     if (this.childComp) {
//       this.message = this.childComp.childMessage;
//     }
//   }
//   reciveMessage($event: any) {
//     this.fromChildOutput = $event;
//   }
}