import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MasterComponent } from "./components/master/master.component";
import { RolesComponent } from './components/roles/roles.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterComponent, RolesComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employeeManagement';
}
