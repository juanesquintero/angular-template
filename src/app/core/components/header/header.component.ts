import { IUserName } from '@shared/models/user.model';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { LocaleService } from '../../services/locale/locale.service';

const MD_SIZE_PX = 768;

@Component({
  selector: 'ws-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;
  public userName?: IUserName;
  private width: number = window?.innerWidth;

  public get username(): string {
    const { first, last } = this.userName as IUserName;
    return first + ' ' + last;
  }

  public get mdSize(): boolean {
    return (this.width > MD_SIZE_PX);
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

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.width = window.innerWidth;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
