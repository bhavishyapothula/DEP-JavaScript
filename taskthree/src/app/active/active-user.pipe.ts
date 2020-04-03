import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'activeUser'
})
export class ActiveUserPipe implements PipeTransform {
    transform(value: any[]): unknown {
        return value.filter(item => {
            return !item.isDeleted;
        });
    }
}
