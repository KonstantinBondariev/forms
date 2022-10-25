import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  rols: string[] = ['Guest', 'User', 'Admin', 'Moderator'];
  user: User = new User(1, null, null, null);

  constructor() {}

  ngOnInit(): void {}

  // get diagnostic(): string {
  //   return JSON.stringify(this.user);
  // }
}
