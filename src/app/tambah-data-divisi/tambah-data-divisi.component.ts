import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DivisionService } from '../services/division.service';

@Component({
  selector: 'app-tambah-data-divisi',
  templateUrl: './tambah-data-divisi.component.html',
  styleUrls: ['./tambah-data-divisi.component.css']
})
export class TambahDataDivisiComponent implements OnInit {

  constructor(private router: Router, private divisionService:DivisionService) { }
  _id = '';
  name = '';
  description = ''

  ngOnInit(): void {
  }

}
