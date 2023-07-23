import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../service/comment.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  id: any;
  post:any;
  newComment!:string;
  constructor(
    private router: Router,
    private postService: PostService,
    private commentService: CommentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getPost(this.id)
  }

  getPost(id: number) {
    this.postService.getPost(id).subscribe((post) => {
      this.post=post
    })
  }
  addComment(comment:string,id:number){

  }
}

