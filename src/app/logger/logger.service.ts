import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor(public flag: boolean = false) { }

  log (entry: string) {
    if (this.flag) {
      console.log(entry);
    }
  }

}
