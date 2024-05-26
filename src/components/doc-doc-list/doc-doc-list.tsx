import { Component, Event, EventEmitter, Prop, Host, h, State } from '@stencil/core';
//import { Document } from '../../api/doc-doc-webapi';
import { DocsApiFactory, Document } from '../../api/doc-doc-webapi';

@Component({
  tag: 'doc-doc-list',
  styleUrl: 'doc-doc-list.css',
  shadow: true,
})
export class DocDocList {
  //@State() documents: Array<{ id: number, title: string, patient: string, date: string, report: string }> = [];
  @Event({ eventName: 'edit' }) edit: EventEmitter<string>;
  @Event({ eventName: 'create' }) create: EventEmitter<void>;
  @Prop() apiBase: string;
  @Prop() docId: string;
  @State() errorMessage: string;
  @State() docs: Document[] = [];

  private async getDocuments(): Promise<Document[]> {
    try {
      const response = await DocsApiFactory(undefined, this.apiBase).getDocuments();
      if (response.status === 200) {
        return response.data;
      } else {
        this.errorMessage = 'Failed to fetch documents';
        return this.getMockDocuments();
      }
    } catch (error) {
      this.errorMessage = 'Failed to fetch documents';
      return this.getMockDocuments();
    }
  }

  async componentWillLoad() {
    this.docs = await this.getDocuments() ?? [];
  }

  handleEditClick(id: number) {
    console.log('Edit clicked for document:', id);
    window.navigation.navigate('/edit/' + id);
  }

  async handleDeleteClick(id: string) {
    const response = await fetch(`http://localhost:8080/api/doc/${id}`, {
      method: 'DELETE'
    });
    if (response.status === 200) {
      this.docs = this.docs.filter(doc => doc.id !== id);
    } else {
      console.log('Failed to delete document');
    }
  }

  private getMockDocuments(): Document[] {
    return [
      { id: '1', title: 'Mock Document 1', patient: 'John Doe', date: '2023-01-01', report: 'Report content for mock document 1' },
      { id: '2', title: 'Mock Document 2', patient: 'Jane Smith', date: '2023-02-01', report: 'Report content for mock document 2' }
    ];
  }

  handleCreateClick() {
    this.create.emit();
  }

  render() {
    let newId = 'new';

    return (
      <Host class="app-container">
        <md-list>
          <md-list-item>
            <h2 slot="headline">Zoznam lekárskej dokumentácie</h2>
            <div slot="end">
              <md-filled-button class="add" onClick={() => this.edit.emit(`${newId}`)}>Vytvoriť nový dokument</md-filled-button>
            </div>
          </md-list-item>
          {this.docs.map(document => (
            <md-list-item class="item" id={document.id}>
              <h4 slot="headline">{document.title}</h4>
              <div slot="supporting-text"><b>Pacient:</b> {document.patient}</div>
              <div slot="supporting-text"><b>Dátum vyšetrenia:</b> {document.date}</div>
              <div slot="supporting-text"><b>Správa:</b> {document.report}</div>
              <md-filled-button class="edit" slot="end" onClick={() => this.edit.emit(`${document.id}`)}><md-icon >edit</md-icon></md-filled-button>  
              <md-filled-button class="delete" slot="end" onClick={() => this.handleDeleteClick(document.id)}><md-icon >delete</md-icon></md-filled-button>  
            </md-list-item>
          ))}
        </md-list> 
      </Host>
    );
  }
}