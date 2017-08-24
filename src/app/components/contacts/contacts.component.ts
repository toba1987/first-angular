import { Component } from '@angular/core';
import { ContactsService } from '../../shared/services/contacts.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html'
})
export class ContactsComponent {
    //any omogucava da bude niz bilo cega, moze biti niz stringova, objekata ...
    private contacts: any[];
    private filter: string = '';

    constructor(contactsService: ContactsService) {

        /*let contactsService = new ContactsService();*/
        this.contacts = contactsService.getContacts();
    }

    remove(contact){
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    }
}
