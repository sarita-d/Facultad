import { Component, OnInit } from '@angular/core';
import { Facultad } from './facultad';

@Component({
  selector: 'app-facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent implements OnInit {
  facultades : Facultad[]= [
    {idfacultad : 1 , nomfacultad: "FIA"},
    {idfacultad: 2 , nomfacultad : "FACTEO"},
    {idfacultad :3 , nomfacultad: "FACIET"} ,
    {idfacultad :4 , nomfacultad: "EMPRESARIALES"} ,
    {idfacultad :5 , nomfacultad: "sALUD"} 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
