import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = ''
  password: string = ''
  constructor(private route: Router){

  }

  onsubmit(data: any){
    console.log(data);
    if(this.username === 'test' && this.password === 'test'){

      this.route.navigate(['/dashbord'])
    }else{
      alert('Username or Password is incorrect')
    }
  }
}
