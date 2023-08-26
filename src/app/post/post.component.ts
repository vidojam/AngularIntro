import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  title: string = "List of Posts";
  messagePost: string = 'Message Post';

  postParentMessage:string = 'Message coming from the post parent';

  childMessage: string = 'From Child Component';

  outputChildMessage: string = 'Message from Child Via Output';

  @Input() fromParent: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { 
    this.fromParent = ''; // Initialize with an appropriate default value
    // this.fromPostParent = ''; // Initialize with an appropriate default value
    
  }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }

}
