import {objJson,records_per_page} from './myscript.js' 
export function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}