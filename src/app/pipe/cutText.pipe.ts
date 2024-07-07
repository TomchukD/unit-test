import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cutText',
    standalone: true
})
export class CutTextPipe implements PipeTransform {

    transform(value: string | null | undefined, cutNum: number = 0): string | null {
        if (!value) {
            return null;
        }
        return value.slice(0, cutNum);
    }

}
