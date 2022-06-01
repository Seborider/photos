import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  photoUrl: string | undefined;

  constructor(private photoservice: PhotoService) {
    this.fetchPhoto()
   }

  onClick() {
    this.fetchPhoto()
  }

  fetchPhoto(){
    this.photoservice.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
  }
  )}

  ngOnInit(): void {
  }

}
