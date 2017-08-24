import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactsService } from './services/contacts.service';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
      FilterPipe
  ],
    /*provider je za service*/
  providers: [
        ContactsService
  ],
  exports: [
    FilterPipe
  ]
})
export class SharedModule { }
