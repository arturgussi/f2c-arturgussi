'use strict'
//index.js

module.exports = function(tempF){
	if(typeof tempF === 'string'){
		tempF = tempF.trim().replace(',','.') 
	}

	let tempC = parseFloat(tempF)
	tempC -= 32
	tempC /= 1.8
	return tempC.toFixed(2)
}