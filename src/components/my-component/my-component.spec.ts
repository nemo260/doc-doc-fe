import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Stencil" last="'Martin Nemec' JS"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component first="Stencil" last="'Martin Nemec' JS">
        <mock:shadow-root>
          <div>
            Ahoj svet! Autor: Martin Nemec
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
