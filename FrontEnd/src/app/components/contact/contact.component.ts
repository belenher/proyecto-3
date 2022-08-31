import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
 constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/login'])
  }
}
