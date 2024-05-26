import { Component, Event, EventEmitter, State, Prop, h, Host } from '@stencil/core';
//import { DocsApiFactory, Document } from '../../api/doc-doc-webapi';
import { DocsApiFactory } from '../../api/doc-doc-webapi';
import { uuidv4 } from '../../utils/utils';

@Component({
  tag: 'doc-doc-edit',
  styleUrl: 'doc-doc-edit.css',
  shadow: true,
})
export class DocDocEdit {
  @State() document: { id?: string, title: string, patient: string, date: string, report: string } = {
    id: '',
    title: '',
    patient: '',
    date: '',
    report: ''
  };
  @Prop() documentId: string;
  @Prop() apiBase: string;
  @Event({ eventName: 'close' }) close: EventEmitter<string>;

  componentWillLoad() {
    this.fetchDocument();
  }

  async fetchDocument() {
    const path = window.location.pathname;

    if (path !== '/edit/new') {
      
      //const response = await fetch(`http://localhost:8080/api/doc/${this.documentId}`);
      const response = await DocsApiFactory(undefined, this.apiBase).getDocumentById(this.documentId);
      if (response.status === 200) {
        const data = response.data;
        this.document = data;
      } else {
        console.log('Failed to fetch documents');
      }
    }
  }

  handleSubmit() {
    if (this.document.id) {
      this.updateDocument();
    } else {
      this.createDocument();
    }
  }

  handleInputChange(event: Event, field: keyof typeof this.document) {
    const target = event.target as HTMLInputElement;
    this.document = {
      ...this.document,
      [field]: target.value
    };
  }

  async updateDocument() {
    const response = await fetch(`http://localhost:8080/api/doc/${this.document.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.document)
    });

    if (response.status === 200) {
      this.close.emit('close');
    } else {
      console.log('Failed to update document');
    }
  }

  async createDocument() {
    this.document.id = uuidv4();
    const response = await fetch(`http://localhost:8080/api/doc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.document)
    });

    console.log(response.json());
    if (response.status === 201) {
      console.log(response.status);
      this.close.emit('close');
    } else {
      console.log(response.status);
      console.log('Failed to create document');
    }
  }

  render() {
    return (
      <Host>
        <form class="form" onSubmit={(e) => { e.preventDefault(); this.handleSubmit(); }}>
          <md-filled-text-field
            label="Názov dokumentu"
            value={this.document.title}
            onInput={(event) => this.handleInputChange(event, 'title')}
          ></md-filled-text-field>
          <md-filled-text-field
            label="Pacient"
            value={this.document.patient}
            onInput={(event) => this.handleInputChange(event, 'patient')}
          ></md-filled-text-field>
          <md-filled-text-field
            label="Dátum"
            value={this.document.date}
            onInput={(event) => this.handleInputChange(event, 'date')}
          ></md-filled-text-field>
          <md-filled-text-field
            type="textarea"
            rows="3"
            label="Správa"
            value={this.document.report}
            onInput={(event) => this.handleInputChange(event, 'report')}
          ></md-filled-text-field>
          <div class="buttons">
            <md-filled-button class="cancel" onClick={() => this.close.emit('close')}>Zrušiť</md-filled-button>
            <md-filled-button class="submit" type="submit">Uložiť</md-filled-button>
          </div>
        </form>
      </Host>
    );
  }
}
