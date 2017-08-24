import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, character: string): string {
        // Replace all specified 'charcter's in the value string with a space 
        return value.replace(character, ' ');
    }
};
