import { Component, State, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'doc-doc-app',
  styleUrl: 'doc-doc-app.css',
  shadow: true,
})
export class MyComponent {
  @State() private relativePath = "";

  @Prop() basePath: string="";

  componentWillLoad() {
    const baseUri = new URL(this.basePath, document.baseURI || "/").pathname;

    const toRelative = (path: string) => {
      if (path.startsWith(baseUri)) {
        this.relativePath = path.slice(baseUri.length)
      } else {
        this.relativePath = ""
      }
    }

    window.navigation?.addEventListener("navigate", (ev: Event) => {
      if ((ev as any).canIntercept) { (ev as any).intercept(); }
      let path = new URL((ev as any).destination.url).pathname;
      toRelative(path);
    });

    toRelative(location.pathname)
  }

  render() {
    let path = window.location.pathname;

    const getComponent = () => {
      if (path.startsWith('/edit/')) {
        return <doc-doc-edit onClose={() => navigate('/list')}></doc-doc-edit>;
      } 
      if (path===('/') || path.startsWith('/list')){
        console.log(path)
        return <doc-doc-list onEdit={(ev: CustomEvent<String>) => navigate('./edit/' + ev.detail)}></doc-doc-list>;
      }
    }

    const navigate = (path:string) => {
      const absolute = new URL(path, new URL(this.basePath, document.baseURI)).pathname;
      window.navigation.navigate(absolute)
    }

    return (
      <Host>
          {getComponent()}
      </Host>
    );
  }
}
