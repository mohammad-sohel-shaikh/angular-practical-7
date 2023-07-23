import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';
import {Post} from '../models/post.model'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  id: any = '';
  post:Post | undefined;
  constructor(private route: ActivatedRoute, private postService: PostService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.postService.getPost(this.id).subscribe((post) => {
      this.post=post
      })
    console.log(this.id);

  }
}
