window.addEventListener('load', ()=>{//lo que hace es escuchar cuando se cargue completamente el html
//dentro de este listener vamos a buscar botones y el display 
	const display = document.querySelector('.calculator-display');//busca y guarda un solo elemento en el html
	
	const keypadButtons = document.getElementsByClassName('keypad-button');//busca y guarda elementos del html
	const keypadButtonsArray = Array.from(keypadButtons);//mete los elementos obtenidos en keypadButtons y los convierte en array
	
	
	keypadButtonsArray.forEach( (button)=> {//se crea un un for que recorrar todos los valores del array
		button.addEventListener('click', ()=>{//a esos valores le agregamos el evento listener y que al darle click
			calculadora(button,display);
		})
	})


})

function calculadora(button,display){
	switch(button.innerHTML){//evalua los valores definidos que recibimos como array y dependiendo de si es alguno hace algo
		case 'C':
			borrarDisplay(display);//cualquier numero que se encuentre en el display sera borrado
			break;
		case '=':
			calcularDisplay(display);//suma o resta los valores que se encuentren en el display
			break;

		default:
			actualizarDisplay(display,button)/*hace que cuando apretemos algun div nos aparezca el numero apretado
			en el display*/
			break;


	}
}
/*funcion que suma o resta en el display(los valores lo toma de keypadButtonsArray)*/
function calcularDisplay(display){
	display.innerHTML=eval(display.innerHTML);/*toma el string, lo resuelve y lo guarda en el innerHTML del display*/
}

/*funcion para escribir en el display(cuadro donde aparecen los numero cuando apretamos los botones)*/
function actualizarDisplay(display, button){
	if(display.innerHTML==0){
		display.innerHTML='';
	}
	display.innerHTML+=button.innerHTML;
}
/*funcion que borra lo que tengamos en el display*/
function borrarDisplay(display){
	display.innerHTML=0;
}