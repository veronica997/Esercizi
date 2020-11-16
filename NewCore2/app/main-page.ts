/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData, Page } from '@nativescript/core';
import { HelloWorldModel } from './main-view-model';
import { routes } from './utils';
let page: Page //Se commento tutti i page mi ritorna alla main-page direttamente

//pageLoaded è preso da main-page.xml
export function pageLoaded ({ object }: EventData){
	page = object as Page
	console.log({
		type: "Cat",
		color: "Blue"
	});
};

//Senza questo non mi si collega la pagina di login
//handleLogin sta dentro main-page.xml
export const handleLogin = () => {
	page.frame.navigate(routes.login)
}



// Event handler for Page 'navigatingTo' event attached in main-page.xml
export function navigatingTo(args: EventData) {

    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    const page = <Page>args.object;

    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = new HelloWorldModel();
}


