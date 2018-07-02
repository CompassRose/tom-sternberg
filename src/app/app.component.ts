import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'app';
  public isExpanded = false;
  public backdrop = 'background3';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['/app']);
  }

}
