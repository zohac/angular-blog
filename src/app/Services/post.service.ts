import { Post } from './../models/post';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
  })
export class PostService {

    posts: Post[] = [];
    postSubject = new Subject<any[]>();

    constructor() {
        this.getPosts();
    }

    emitPosts() {
        this.postSubject.next(this.posts);
    }

    addPost(newPost: Post) {
        this.posts.push(newPost);
        this.savePosts();
        this.emitPosts();
    }

    savePosts () {
        firebase.database().ref('/posts').set(this.posts);
    }

    getPosts () {
        firebase.database().ref('/posts').on('value', (data) => {
                this.posts = data.val() ? data.val() : [];
                this.emitPosts();
            }
        );
    }

    getSinglePost(id: number) {
        return new Promise(
            (resolve, reject) => {
                firebase.database().ref('/posts/' + id).once('value').then(
                    (data) => {
                        resolve(data.val());
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    removePost(post: Post) {
        this.posts.splice(this.getId(post), 1);
        this.savePosts();
        this.emitPosts();
    }

    getId(post: Post) {
        const postIndex = this.posts.findIndex(
            (postEl) => {
              if (postEl === post) {
                return true;
              }
            }
          );
        return postIndex;
    }
}
