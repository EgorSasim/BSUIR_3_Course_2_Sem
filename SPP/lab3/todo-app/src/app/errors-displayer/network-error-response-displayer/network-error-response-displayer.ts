import { HttpErrorResponse } from '@angular/common/http';

export function displayNetworkErrors(err: HttpErrorResponse): void {
  alert(
    `error status: ${err.status}\nerror text: ${err.error}\nmessage: ${err.message} `
  );
}
