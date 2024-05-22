import { Component, Event, EventEmitter, State, h, Host } from '@stencil/core';

@Component({
  tag: 'doc-doc-edit',
  styleUrl: 'doc-doc-edit.css',
  shadow: true,
})
export class DocDocEdit {
  @State() document: { id: number, title: string, patient: string, date: string, report: string };

  @Event({ eventName: 'close' }) edit: EventEmitter<string>;

  componentWillLoad() {
    // Call fetchDocument method during component initialization
    this.fetchDocument();
  }

  fetchDocument() {
    // Mocked data
    const mockData = {
      id: 1,
      title: 'Vyšetrenie 1',
      patient: 'Martin Nemec',
      date: '01.01.2021',
      report: 'Pacient sa neciti dobre'
    };
    this.document = mockData;
  }

  render() {
    return (
      <Host>
        <form class="form">
          <md-filled-text-field label="Názov dokumentu" value={this.document.title}></md-filled-text-field>
          <md-filled-text-field label="Pacient" value={this.document.patient}></md-filled-text-field>
          <md-filled-text-field label="Dátum" value={this.document.date}></md-filled-text-field>
          <md-filled-text-field type="textarea" rows="3" label="Správa" value={this.document.report}></md-filled-text-field>
          <div class="buttons">
            <md-filled-button class="cancel" onClick={() => this.edit.emit('close')}>Zrušiť</md-filled-button>
            <md-filled-button class="submit">Uložiť</md-filled-button>
          </div>
        </form>
      </Host>
    );
  }
}
