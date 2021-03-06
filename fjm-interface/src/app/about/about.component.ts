import { About } from './../models/about';
import { AboutService } from './../services/about.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: About;
 
  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.getAbout();
 }
 getAbout() {
   this.aboutService.getDetails().subscribe((data:any) =>{
     this.about = data;
     // console.log(data); to test data flow
   })
 }
}
