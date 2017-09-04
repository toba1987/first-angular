import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../../shared/services/contacts.service';
import { PageTitleService } from '../../shared/services/page-title.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent implements OnInit{
    //zato sto vraca samo jedan kontakt idu {}, posto vraca jedan objekat
    private message: any = {};

    constructor(private route: ActivatedRoute,
                private contactsService: ContactsService,
                private pageTitleService: PageTitleService) {

    }
    //ngOnInit je slicno radi kao constructor-u
    ngOnInit() {
        this.route.params.subscribe(() => {
            let id = parseInt(this.route.snapshot.paramMap.get('id'));

            this.message = [];
            this.contactsService.getContacts()
                .subscribe((data: any[]) => {

                    this.message = data.find(item => item['id'] == id);
                    this.pageTitleService.setTitle("Message");
                })

        });
    }

}
