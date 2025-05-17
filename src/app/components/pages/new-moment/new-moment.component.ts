import { Component } from '@angular/core';
import { MomentFormComponent } from "../../../components/moment-form/moment-form.component";

@Component({
  selector: 'app-new-moment',
  imports: [MomentFormComponent],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.scss'
})
export class NewMomentComponent {
  btnText = 'Compartilhar!';

  constructor(){}

  ngOnInit(): void {}
}
