import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  constructor() { }

  public getContacts(){
    return [

          {
              id: 1,
              firstName: 'John',
              lastName: 'Doe',
              email: 'jonh@gmail.com',
          },
          {
              id: 2,
              firstName: 'Sam',
              lastName: 'Smith',
              email: 'sam@gmail.com'
          },
          {
              id: 3,
              firstName: 'George',
              lastName: 'Sullivan',
              email: 'george@gmail.com'
          },
          {
              id: 4,
              firstName: 'John',
              lastName: 'Deere',
              email: 'john@gmail.com'
          }
      ];
  }

}
