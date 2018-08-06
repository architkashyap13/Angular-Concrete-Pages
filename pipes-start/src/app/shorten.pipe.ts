import { PipeTransform, Pipe } from "../../node_modules/@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value: any, limit: number){
        if(value.length > limit){
            return value.substr(0, limit) + ' ...';
        }
        return value;
    }
}