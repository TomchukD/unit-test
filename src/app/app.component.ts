import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from 'app/table/table.component';
import { CutTextTestComponent } from 'app/cut-text-test/cut-text-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, TableComponent, CutTextTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'unit-test';
}
