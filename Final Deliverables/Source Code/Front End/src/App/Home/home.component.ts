import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
	this.auth.canAccess();
  }
	files: File[] = [];
	data= false;


	onSubmit() {
		alert("The patient is not likely to have heart disease!");
	}
  
	addData(val:any){
		let formData  = new FormData();
		formData.append('file',this.files[0]);
		console.log(this.files[0])
		this.http.post('http://127.0.0.1:5000/input', formData).subscribe(response => {
			console.log(response)
    		this.data = true;
		});


	}
	
}
