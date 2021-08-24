import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./post.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content}
    this.http.post(
      'https://angularcourse-e4d64-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      postData
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>(
      'https://angularcourse-e4d64-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    )
      .pipe(map((responseData: { [key: string]: Post }) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (!responseData.hasOwnProperty(key))
            continue;
          postsArray.push({...responseData[key], id: key});
        }
        return postsArray;
      }));
  }


  DeletePosts(id?:string) {
    if(id){
      return this.http.delete('https://angularcourse-e4d64-default-rtdb.europe-west1.firebasedatabase.app/posts.json/'+id);
    }
    return this.http.delete('https://angularcourse-e4d64-default-rtdb.europe-west1.firebasedatabase.app/posts.json');

  }
}
