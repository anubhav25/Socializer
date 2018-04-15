import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: any;
  @Input() me: any;
  liked: Boolean = false ;
  constructor(private _postService: PostService) {
   }
  like () {
    this.liked = true;
    this._postService.like(this.me._id, this.post._id )
    .subscribe((resp) => {
      if (!resp.resp) {
        this.liked = false ;
      }
    });
  }
  delete() {
    if (this.me.admin) {
      this._postService.delete(this.post.author, this.post._id)
        .subscribe((resp) => {
          if (!resp.resp) {
            this.liked = false;
          }
        });
    } else {
      this._postService.delete(this.me.username, this.post._id)
        .subscribe((resp) => {
          if (!resp.resp) {
            this.liked = false;
          }
        });
    }
  }
  unlike() {
    this.liked = false;
    this._postService.unlike(this.me._id, this.post._id)
      .subscribe((resp) => {
        if (!resp.resp) {
          this.liked = true;
        }
      });
  }
  comment(text) {
    if (text.value.trim()) {
      this.post.comment.push({
    author: this.me.username,
    comment: text.value
      });
    this._postService.comment(this.me.username, this.post._id, text.value)
      .subscribe((resp) => {
        console.log(resp);
      });
    }
  }
  ngOnInit() {
    this.liked = this.post.likes.includes(this.me._id) ;
  }

}
