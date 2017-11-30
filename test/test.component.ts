import { Component } from '@angular/core';

@Component({
  selector: 'my-test-title',
  template: `<div>
    <h1>{{pageTitle}}</h1>
<div>My First Component</div>
</div>`
})
export class TestComponent {
  pageTitle: string = 'This is an awesome title'
}
