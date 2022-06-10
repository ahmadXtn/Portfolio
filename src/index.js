import _ from 'lodash';
import $ from 'jquery';

function component(){

	const divEm=document.createElement('h1');

	divEm.innerHTML=_.join(['Webpack','5'],' ');

	$(divEm).css('color','black');


	return divEm;
}

document.body.appendChild(component());