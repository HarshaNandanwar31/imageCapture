import { OnInit } from '@angular/core';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { ImageServiceService } from '../third-page/image-service.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {

  @ViewChild('canvasElement', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  images: string[] = [];
  load:boolean=true;

  constructor(private router: Router, private imageService: ImageServiceService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.displayDefaultMessage();
  }

  displayDefaultMessage() {
    const context = this.canvas?.nativeElement.getContext('2d');
    if (context) {
      context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      context.font = '16px Arial';
      context.fillStyle = 'gray';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText('No image captured', this.canvas.nativeElement.width / 2, this.canvas.nativeElement.height / 2);
    }
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    if (image?.dataUrl) {
      this.images.push(image.dataUrl!);
      this.imageService.setImage(image.dataUrl || '');
      const context = this.canvas.nativeElement.getContext('2d');
      const img = new Image();
      img.src = image.dataUrl || '';

      img.onload = () => {
        context?.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        context?.drawImage(img, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      };
    } else {
      this.displayDefaultMessage();
    }
  }

  goToSecondPage() {
    this.load=false

    setTimeout(()=>{
      this.router.navigate(['/second-page'], { queryParams: { images: JSON.stringify(this.images) } });
      this.load=true
    
    },2000)

  }

}
