import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
//we added this alertyfy module in Newly created file typings.t.ds and then puting the entry in config.json in modules section , (under angular declaration)
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm(message: string , okCallback: () => any){
  alertify.confirm(message, (e: any) => {
    if(e){
      okCallback();
    }
  });

}


warning(message:string){
  alertify.warning(message);
}


error(message:string){
  alertify.error(message);
}


message(message:string){
  alertify.message(message);
}


success(message:string){
  alertify.success(message);
}

}
