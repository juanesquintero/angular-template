import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'ws-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {}

  get displayName() : string {
    const user = this.authService.getUserInfo();
    return user?.firstName + ' ' + user?.lastName;
  }


  onLogout(): void {
    console.log('Logout ' + this.displayName);
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
