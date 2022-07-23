import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
course={
  courseTitle:"",
  courseDescription:"",
  courseDate:"",
  courseVenue:"",
  courseDuration:""

}
  constructor(private api:ApiService) { }
  
  ngOnInit(): void {
  }
Addcourse(){
  this.api.addcourse(this.course)
  .subscribe(
    (data)=>{ 
    }
    )
  alert("success");

}
}
