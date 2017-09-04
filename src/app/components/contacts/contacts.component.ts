import { Component } from '@angular/core';
import { ContactsService } from '../../shared/services/contacts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

import { Contact } from '../../shared/models/contact.model';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html'
})
export class ContactsComponent {
    //any omogucava da bude niz bilo cega, moze biti niz stringova, objekata ...
    private contacts: any = [];
    private filter: string = '';
    private people: Observable<any>;

  /*  private newContact: Contact = new Contact();*/

    constructor(private contactsService: ContactsService) {
        //this.contacts = contactsService.getContacts(); observer ve uradjen

        contactsService.getContacts().subscribe(data => {
            this.contacts = data;
        },
        (err: HttpErrorResponse) => {
            alert(`Backend returnd code ${err.status} with message: ${err.error}`)
        });

        this.people = Observable.of([
            {name: 'Joe'},
            {name: 'Bob'},
            {name: 'Sasy'}
        ])
    }

    remove(contact){
        const index = this.contacts.indexOf(contact);

        this.contactsService.removeContact(contact)
            .subscribe(
                (contact: Contact) => {
            const index = this.contacts.indexOf(contact);

        }
            )
        //this.contacts.splice(index, 1);
    }


   submitContact(contact: Contact){
        if(contact.id){
            this.contactsService.editContact(contact)
                .subscribe(
                    (contact: Contact) =>{
                        let existingContact = this.contacts.filter(c => c.id == contact.id);
                        if(existingContact.length){
                            Object.assign(existingContact[0], contact);
                        }
                    }
                );

        }else{
            this.contactsService.addContact(contact)
                .subscribe(
                    contact => {
                        this.contacts.push(contact);
                    }
                    );
            }
        }

}
