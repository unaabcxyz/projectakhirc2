import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DivisionService } from '../services/division.service';

@Component({
  selector: 'app-edit-data-divisi',
  templateUrl: './edit-data-divisi.component.html',
  styleUrls: ['./edit-data-divisi.component.css']
})
export class EditDataDivisiComponent implements OnInit {

  constructor(
    private rest: DivisionService,
    private activatedRoute : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
