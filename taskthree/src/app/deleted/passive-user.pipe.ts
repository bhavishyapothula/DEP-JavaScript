import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'passiveUser'
})
export class PassiveUserPipe implements PipeTransform {
    transform(value: any[]): unknown {
        return value.filter(item => {
            return item.isDeleted;
        });
    }
}
