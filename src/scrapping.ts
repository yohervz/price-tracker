import {load} from 'cheerio';

export function scrapping_site(response: any){
    const $ = load(response);
    let result = $("#dolar").text();
    return result;
}