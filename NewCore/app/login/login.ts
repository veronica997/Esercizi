import { EventData, Page } from '@nativescript/core';
import { Frame } from '@nativescript/core'
import { LoginModel } from '../main-view-model';

let page: Page

//loginLoaded è preso da login.xml
/*export function loginLoaded(args: EventData){
	page = args.object as Page
	console.log("Ciaooooooooooooooo");
}*/

//preso da login.xml -> tap="SignIn"
export function SignIn({ object }: EventData){
	let email = page.getViewById('email');
	console.log(email.get('text'));
}

//preso da login.xml -> tap="Register"
export function Register(){
	page.frame.navigate('./app/main-page');
	//page.frame.navigate('../main-page');
}

//preso da login.xml -> tap="Register"
/*export function Register(){
	Frame.goBack() //torna indietro alla home
}
*/

//FATTO OGGI RIMODIFICA SOPRA il login Loaded
// mette l'email e password senza scrivere
 let user ={
		email:"user@domain.com",
		password:"password"
 }

 export function loginLoaded(args: EventData){
		let page : Page = args.object as Page
		page.bindingContext = user;
 }



