import { EventData, Page, ViewBase } from '@nativescript/core';
import { Frame } from '@nativescript/core'
import { routes } from '~/utils';
import { LoginModel } from '../main-view-model';
import * as frames from "@nativescript/core/ui/frame"



/*export function SignIn({ object }: EventData){
	const page: Page = object.get('page')
	const email = page.getViewById('email').get('text')
	console.log(email) //VABBENE --> stampa l'email che ho scritto
}*/

export function SignIn({ object }: EventData){
	//frames.Frame.topmost().navigate('./random/random')
	//frames.Frame.topmost().navigate(routes.list)
	const page: Page = object.get('page')
	page.frame.navigate(routes.list);

}



//preso da login.xml -> tap="Register"  --> navigo in un'altra pagina
export function Register({ object }: EventData){
	const page: Page = object.get('page')
	page.frame.navigate(routes.home);
}

let user = {
	email:"user@domain.com",
	password:"password"
}

export function loginLoaded(args: EventData){
	(args.object as Page).bindingContext = user;
}


