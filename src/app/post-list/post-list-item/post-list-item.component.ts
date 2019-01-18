import { Router } from '@angular/router';
import { Post } from './../../models/post';
import { PostService } from './../../Services/post.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService,  private router: Router) { }

  ngOnInit() {
  }

  addLove() {
    this.post.loveIts++;
    this.postService.savePosts();
    this.postService.emitPosts();
  }

  removeLove() {
    this.post.loveIts--;
    this.postService.savePosts();
    this.postService.emitPosts();
  }

  removeThisPost() {
    this.postService.removePost(this.post);
  }

  onViewPost() {
    const id = this.postService.getId(this.post);
    this.router.navigate(['/posts', 'view', id]);
  }
}
