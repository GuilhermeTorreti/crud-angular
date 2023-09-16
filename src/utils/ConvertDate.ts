import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConvertDate {
  toDDMMYYYY(textDate: string, withHours = false) {
    if (textDate && !textDate.trim()) return 'N/A';
    const date = new Date(textDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    const hours = withHours
      ? ` às ${date.getHours().toString().padStart(2, '0')}:${date
          .getMinutes()
          .toString()
          .padStart(2, '0')}`
      : '';

    return `${day}/${month}/${year}${hours}`;
  }
}