import { Component, OnInit, Input } from '@angular/core';
import { JobRecord } from './../models/jobRecord';
import { JobListService } from './../job-list.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  private id: string;
  job: JobRecord;
  jobs: JobRecord[];
  // name: string;


  constructor( 
    private route: ActivatedRoute,
    private jobListService: JobListService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.jobListService.getjobdetails(id).subscribe(a =>{
      console.log(a);
       this.job = a
    });
    //console.log(this.job);
  }
 /*onClick(){
  this.jobListService.getjobdetails()
    .subscribe((data:any) =>{
      this.jobs = data;
      console.log(data);
    })
 }*/

}
