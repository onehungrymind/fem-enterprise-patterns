import { Component } from '@angular/core';

@Component({
  selector: 'app-doc',
  styles: [`
    h1 {
      text-align: center;
    }
  `],
  template: `
    <h1>RXJS FTW!</h1>
    <p>Aenean vitae pharetra magna. Curabitur lacinia dignissim fringilla. Donec vel ligula ac orci congue lobortis eget et lectus.
      Donec elit quam, vestibulum et elit in, iaculis tempus nulla. </p>
    <hr>
    <ol>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Curabitur lobortis nisi at interdum efficitur.</li>
      <li>Integer non mauris diam. Morbi viverra nisi auctor neque condimentum viverra. Phasellus sed accumsan dui.
        Morbi eget efficitur diam, eget vehicula justo.
      </li>
    </ol>
    <hr>
    <blockquote>Sed ut felis turpis. Sed cursus luctus lacus eget elementum.
      Fusce congue semper nisi, in dignissim magna blandit id.
    </blockquote>
  `
})
export class DocComponent {
}
