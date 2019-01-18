import { Routes, RouterModule } from '@angular/router';
import { PostService } from './Services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import { SinglePostComponent } from './post-list/single-post/single-post.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';

const appRoutes: Routes = [
    { path: 'posts', component: PostListComponent },
    { path: 'new', component: NewPostComponent },
    { path: 'posts/view/:id', component: SinglePostComponent },
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: '**', redirectTo: 'posts' }
  ];

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        NewPostComponent,
        HeaderComponent,
        SinglePostComponent,
        PostListItemComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        PostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
