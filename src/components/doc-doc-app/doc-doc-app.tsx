import { Component, State, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'doc-doc-app',
  styleUrl: 'doc-doc-app.css',
  shadow: true,
})
export class DocDocApp {

  @Prop() basePath: string="";
  @State() private relativePath = "";
  @Prop() apiBase: string;
  @Prop() documentId: string;

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
    let element = 'list';
    let docId = 'new';

    if (this.relativePath.startsWith("list")) {
      element = 'list';
    } 
    
    if (this.relativePath.startsWith("edit")) {
      element = 'edit';
      docId = this.relativePath.split("/")[1];
    }

    const navigate = (path: string) => {
      const absolute = new URL(path, new URL(this.basePath, document.baseURI)).pathname;
      window.navigation.navigate(absolute)
    }

    const getComponent = () => {
      switch (element) {
        case 'list':
          return <doc-doc-list 
          onEdit={(ev: CustomEvent<String>) => navigate('/edit/' + ev.detail)}
          onCreate={() => navigate('/edit/new')} apiBase={this.apiBase}
        ></doc-doc-list>;
        case 'edit':
          return <doc-doc-edit documentId={docId} onClose={() => navigate('/list')} apiBase={this.apiBase}></doc-doc-edit>;
        default:
          return <doc-doc-list 
          onEdit={(ev: CustomEvent<String>) => navigate('/edit/' + ev.detail)}
          onCreate={() => navigate('/edit/new')} apiBase={this.apiBase}
        ></doc-doc-list>; 
      }
    }

    return (
      <Host>
          <p>Autor: Martin Nemec</p>
          <br />
          <div class="content">
            {getComponent()}
          </div>
      </Host>
    );
  }
}
