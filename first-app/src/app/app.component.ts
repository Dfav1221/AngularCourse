import {Component, OnInit} from '@angular/core';
import {map} from "rxjs/operators";
import {Post} from "./post.model";
import {PostsService} from "./posts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private PostService: PostsService) {
  }

  ngOnInit() {
    this.PostService.fetchPosts().subscribe(posts=>{
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.PostService.createAndStorePost(postData.title,postData.content)
    console.log(postData);
  }

  onFetchPosts() {
    this.fetchPosts();
    console.log(this.loadedPosts);
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
    this.PostService.DeletePosts().subscribe(data=>{
      this.loadedPosts = [];
    });
  }

  private fetchPosts() {

    this.isFetching = true;
    this.PostService.fetchPosts().subscribe(posts=>{
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onDeletePost(index) {
    const id = this.loadedPosts[index].id;
    this.PostService.DeletePosts(id).subscribe();
  }
}
