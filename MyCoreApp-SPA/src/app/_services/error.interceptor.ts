import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable() export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: 
    import("@angular/common/http").HttpHandler): 
    import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        return next.handle(req).pipe(
        catchError(responseError => {
            if(responseError.status === 401){
                return throwError(responseError.statusText);                
            }

            if(responseError instanceof HttpErrorResponse){
                const applicationError = responseError.headers.get("Application-Error");
                if(applicationError){
                    return throwError(applicationError);
                }
                
                const serverError = responseError.error; // these are direct text errors like error : 'Computer sya no', 
                let modalErrors = '';

                //check if server error is not dirct text error  rather than an object
                if(serverError.errors && typeof serverError.errors === 'object'){
                    for(const key in serverError.errors){
                        if(serverError.errors[key])//check if there is some thing in this, kind of null check
                        {
                            modalErrors += serverError.errors[key] + '\n';
                        }
                    }
                }

                //first we thorw Modal errors (if any), then thorw server error (if any) ,then look if we don't know this type of error,send any text like Server Error 
                return throwError(modalErrors || serverError || 'Server Error ')


            }
        
            
        })
        );

    }
}

// add our errorinteceptor to angulars error interceptor providers
export const ErrorInterceptorProvider = {
    provide : HTTP_INTERCEPTORS,
    useClass : ErrorInterceptor,
    multi : true // we have multple error interceptors

}