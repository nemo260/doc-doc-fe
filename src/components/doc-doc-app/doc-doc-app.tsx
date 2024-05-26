import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'doc-doc-app',
  styleUrl: 'doc-doc-app.css',
  shadow: true,
})
export class MyComponent {

  @Prop() basePath: string="";

  componentWillLoad() {
    const baseUri = new URL(this.basePath, document.baseURI || "/").pathname;

    const toRelative = (path: string) => {
      if (path.startsWith(baseUri)) {
      } else {
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
        const documentId = path.split('/')[2];
        return <doc-doc-edit documentId={documentId} onClose={() => navigate('/list')}></doc-doc-edit>;
      } 
      if (path==='/' || path.startsWith('/list')){
        return <doc-doc-list 
                 onEdit={(ev: CustomEvent<String>) => navigate('/edit/' + ev.detail)}
                 onCreate={() => navigate('/edit/new')}
               ></doc-doc-list>;
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
