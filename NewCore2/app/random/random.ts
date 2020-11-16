import { EventData, Page } from '@nativescript/core';

// restituisce questa lista con 'Cat' , 'Dog', 'Turtle'
export function loaded(args: EventData) {
	const page: Page = args.object.get('page');

  page.bindingContext = {
    ...page.bindingContext,
    groceryList: [],
	isLoading: true
	}

	setTimeout(() => {
		page.bindingContext = {
			...page.bindingContext,
			groceryList: [
				...page.bindingContext.groceryList,
				{ name: 'Cat' },
				{ name: 'Dog' },
				{ name: 'Turtle' }
			],
			isLoading: false
		}
	}, 3500)




}

type GroceryList = {
	name: string
}

//Elimina gli elementi nella lista
export const deleteData = (args: EventData) => {
	const name: string = args.object.get('id')
	const page: Page = args.object.get('page')
	const newList = page.bindingContext.groceryList.filter(grocery => grocery.name !== name)
	//crea una nuova lista ogni volta tranne quello che ho cliccato

	page.bindingContext = {
		...page.bindingContext,
		groceryList: newList
	}
}



//Aggiungo elementi nella lista
/*export function loaded(args: EventData) {
	const page: Page = args.object.get('page');
	const listView = page.getViewById("AddGroceryList");
	page.bindingContext = {
		groceryList: [],
		//grocery: '',
	}
}

export const addPasta = (args: EventData) => {
	const page: Page = args.object.get('page')
	const name = page.bindingContext.grocery
	page.bindingContext = {
		//...page.bindingContext,
		groceryList: [
			...page.bindingContext.groceryList,
			{ name }
		],
		//grocery: '',
	}
}



*/
