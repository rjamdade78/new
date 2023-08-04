import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit{
  users: any[] = []
  ngOnInit(): void {

    this.users = [
     { id: 1, name: 'sharuk', email: 'sharuk@123.com'},
     {id :  2 ,name:'sagar', email: 'sagar@123.com' },
    ]
  }

  constructor(private route: Router){

  }

  editUser(){

  }

  viewUser(userid: number){
    this.route.navigate(['/user', userid])
  }
}
