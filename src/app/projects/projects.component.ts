import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  sector: any;
  sectorLink: any;
  constructor() { }

  ngOnInit() {
  }
  changeModal(index: number) {
    console.log(index);
    switch (index) {
      case 1:
      {
        this.sector = 'crud';
        break;
      }
      case 2:
      {
        this.sector = 'curriculum';
        break;
      }
      default: {
        this.sector = '';
        break;
      }


    }
}
}
