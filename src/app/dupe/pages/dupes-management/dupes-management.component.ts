import { Component } from '@angular/core';
import {DupeCardComponent} from "../../components/card-dupe/card-dupe.component";

@Component({
  selector: 'app-dupes-management',
  standalone: true,
  imports: [
    DupeCardComponent
  ],
  templateUrl: './dupes-management.component.html',
  styleUrl: './dupes-management.component.css'
})
export class DupesManagementComponent {

}
