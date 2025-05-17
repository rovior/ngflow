import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  imports: [],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.scss'
})
export class MomentFormComponent {
  @Input() btnText!: string;

  constructor(){ }

  ngOnInit(): void{

  }

}
