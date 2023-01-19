import { IUserName } from '@shared/models/user.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { LocaleService } from '../../services/locale/locale.service';

@Component({
  selector: 'ws-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;
  public userName?: IUserName;

  public get username(): string {
    const { first, last } = this.userName as IUserName;
    return first + ' ' + last;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    public locale: LocaleService
  ) {
    this.authService.user
      .subscribe(userInfo => {
        this.userName = userInfo?.name;
      });
  }

  ngOnInit(): void { }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
