import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {

  images: string[] = [];
  load: boolean = true

  constructor(private router: Router, private route: ActivatedRoute,) {
    this.route.queryParams.subscribe(params => {
      if (params['images']) {
        this.images = JSON.parse(params['images']);
      }
    });
  }

  ngOnInit() {

  }

  nextPage() {
    this.load = false
    setTimeout(()=>{
      this.router.navigate(['/third-page'], { queryParams: { images: JSON.stringify(this.images) } });
      this.load = true
  }, 2000)
   
  }

  back() {
    this.router.navigate(['/first-page']);

  }
}
