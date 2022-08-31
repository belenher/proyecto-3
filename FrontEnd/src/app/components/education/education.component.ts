import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  persona:any;

  constructor(private datosPersona:PersonaService) {} 

  ngOnInit(): void {
    this.persona="";
    }
  }

