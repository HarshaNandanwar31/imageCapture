import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  public imageDataUrl: string;

  setImage(dataUrl: string) {
    this.imageDataUrl = dataUrl;
  }

  getImage() {
    return this.imageDataUrl;
  }
}
