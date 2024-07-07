import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cutText',
    standalone: true
})
export class CutTextPipe implements PipeTransform {

    transform(value: string | null | undefined, cutNum: number| undefined): string | null {
        if (!value) {
            return null;
        }
        if(!cutNum){
            return  value
        }
        return value.slice(0, cutNum);
    }

}
