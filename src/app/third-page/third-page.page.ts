import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImageServiceService } from './image-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.page.html',
  styleUrls: ['./third-page.page.scss'],
})
export class ThirdPagePage implements OnInit {

  @ViewChild('imageCanvas', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  images: string[] = [];

  constructor(private imageService: ImageServiceService, private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
            if (params['images']) {
        this.images = JSON.parse(params['images']);
      }
    });
  }

  back(){
    this.router.navigate(['/second-page'] );
 
  }
  goToFirstPage(){
    this.router.navigate(['/first-page'] );

  }
}