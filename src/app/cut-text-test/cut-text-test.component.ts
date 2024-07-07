import { Component } from '@angular/core';
import { CutTextPipe } from 'app/pipe/cutText.pipe';

@Component({
  selector: 'cut-text-test',
  standalone: true,
  imports: [
    CutTextPipe
  ],
  templateUrl: './cut-text-test.component.html',
  styleUrl: './cut-text-test.component.scss'
})
export class CutTextTestComponent {
  public text = 'this text needs to be cut'
  public textHasError = 'there will be an error in the pipe'
}
