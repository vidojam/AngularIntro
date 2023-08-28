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

  onKeyup($event: any) {
    // console.log('Keyup event working');
    console.log($event.keyCode);
  }



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