import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})


export class DataService implements InMemoryDbService{

  constructor() { }

  createDb(){
   let  books =  [ {title: 'Rajkumar', category:'Drama', description:'Tested'}];
   return {books};
  }
}
