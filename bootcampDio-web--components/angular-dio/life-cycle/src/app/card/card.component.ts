import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	produtos:string[] = []
	menuType:string 	= ''


	constructor(){
		this.produtos = [
			"mouse",
			"teclado",
			"cadeira",
			"charger",
		]
	}

	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}
	adicionaLista(){
		this.produtos.push('')
	}
	removerItenLista(index:number){
		this.produtos.splice(index, 1)
	}
}
