import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userid: number | null = null
  constructor(private route: ActivatedRoute){
    this.route.params.subscribe((res) => {
      this.userid = +res['id']
    })
  }
}
