import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface UnsplashResponse {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID 9HR1PyXQl550zpuy5AIq9nWRU9__3ud9achm6FPdxrA'
      }
    })
  }
}
