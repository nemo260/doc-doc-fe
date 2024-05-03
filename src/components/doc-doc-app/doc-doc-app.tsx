import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'doc-doc-app',
  styleUrl: 'doc-doc-app.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    return <div>Ahoj svet! Autor: Martin Nemec</div>;
  }
}