import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogin = ''
  title = 'drive';

  ngOnInit() {
    AuthService.getServiceAuth()

    this.isLogin = localStorage.getItem('auth') as string
    console.log(this.isLogin);
  }
}
