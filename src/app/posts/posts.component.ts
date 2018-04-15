import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() me: any ;
  model: any = {
    text : ''
  };
  posts: any = [];

  constructor(private _postService: PostService,
    private route: ActivatedRoute, private router: Router) {
    this._postService.getposts()
      .subscribe((posts) => {
        this.posts = posts;
        console.log(this.posts);
      });
  }

  selectFile(a) {
    a.click();
  }
  hadleFile(event) {
    this.model.file = event.target.files[0];
  }
post() {
  console.log(this.model.text.trim() );
if ( this.model.text.trim() || this.model.file ) {
  const body: any = new FormData();
  if (this.model.file) {
    body.append('file', this.model.file, this.model.file.name);
  }
  body.append('text', this.model.text);
  body.append('username', this.me.username);
  body.append('author', this.me._id);

  this._postService.newpost(body)
  .subscribe((resp) => {
    console.log(resp);
  });
} else {
  alert('cant post empty post.');
}

}


  ngOnInit() {
  }

}
