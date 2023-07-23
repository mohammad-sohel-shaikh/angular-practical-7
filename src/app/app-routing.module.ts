import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: "", redirectTo: 'posts', pathMatch: "full" },
  { path: "posts",component:PostListComponent },
  { path: "post/:id", component:PostDetailsComponent },
  { path: "add-comment/:id", component:AddCommentComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
