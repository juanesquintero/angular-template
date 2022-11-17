import { Component } from '@angular/core';
import { APP_ROUTES } from './shared/constants';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from './auth/login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'angular-template';
  public routes = APP_ROUTES;

  constructor(public dialog: MatDialog) {}

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
