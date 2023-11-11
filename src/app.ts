import { getPage } from './request-get';
import { scrapping_site } from './scrapping';

async function main() {

    let response_html: any = await getPage("https://www.bcv.org.ve/");

    if (response_html === "") {
        console.log("Ha ocurrido un error")
        return;
    }

    let result = scrapping_site(response_html);
    let result_for_show = result.replace(/\s+/g, '');
    console.log(result_for_show);
}

main();