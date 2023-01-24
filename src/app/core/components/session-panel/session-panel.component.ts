import { IUserName } from '@shared/models/user.model';
import { AuthService } from '@core/services/auth/auth.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ws-session-panel',
  templateUrl: './session-panel.component.html',
  styleUrls: ['./session-panel.component.scss']
})
export class SessionPanelComponent {
  @Input() isDesk!: boolean;
  public userName?: IUserName;

  public get username(): string {
    const { first, last } = this.userName as IUserName;
    return first + ' ' + last;
  }

  constructor(
    private authService: AuthService,
  ) {
    this.authService.user
      .subscribe(userInfo => {
        this.userName = userInfo?.name;
      });
  }

  onLogout(): void {
    this.authService.logout();
  }
}
