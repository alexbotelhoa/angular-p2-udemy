import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  static readonly SUM: string = '+';
  static readonly SUBTRACTION: string = '-';
  static readonly DIVISION: string = '/';
  static readonly MULTIPLICATION: string = '*';

  constructor() { }

  calculate(num1: number, num2: number, operation: string): number {
  	let result: number;

  	switch(operation) {
  	  case CalculatorService.SUM:
  	    result = num1 + num2;
  		  break;
  	  case CalculatorService.SUBTRACTION:
  	    result = num1 - num2;
  		  break;
  	  case CalculatorService.DIVISION:
  	    result = num1 / num2;
  		  break;
  	  case CalculatorService.MULTIPLICATION:
  	    result = num1 * num2;
  		  break;
  	  default:
  	    result = 0;
  	}

  	return result;
  }
}
