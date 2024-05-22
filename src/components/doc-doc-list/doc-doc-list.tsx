import { Component, Event, EventEmitter, Host, h, State } from '@stencil/core';

@Component({
  tag: 'doc-doc-list',
  styleUrl: 'doc-doc-list.css',
  shadow: true,
})
export class DocDocList {
  @State() documents: Array<{ id: number, title: string, patient: string, date: string, report: string }> = [];

  @Event({ eventName: 'edit' }) edit: EventEmitter<string>;

  // Simulate API call to fetch documents
  async fetchDocuments() {
    // Mocked data
    const mockData = [
      {
        id: 1,
        title: 'Vyšetrenie 1',
        patient: 'Martin Nemec',
        date: '01.01.2021',
        report: 'Pacient sa neciti dobre'
      },
      {
        id: 2,
        title: 'Vyšetrenie 2',
        patient: 'David Schmidt',
        date: '01.01.2021',
        report: 'Pacienta boli bruh'
      }
    ];
    this.documents = mockData;
  }

  componentWillLoad() {
    this.fetchDocuments();
  }

  handleEditClick(id: number) {
    console.log('Edit clicked for document:', id);
    window.navigation.navigate('/edit/' + id);
    // Handle edit logic here
  }

  // Handle delete button click
  handleDeleteClick(id: number) {
    console.log('Delete clicked for document:', id);
    // Handle delete logic here
  }

  render() {
    return (
      <Host class="app-container">
        <md-list>
          <md-list-item>
            <h2 slot="headline">Zoznam lekárskej dokumentácie</h2>
            <div slot="end">
              <md-filled-button class="add">Vytvoriť nový dokument</md-filled-button>
            </div>
          </md-list-item>
          {this.documents.map(document => (
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