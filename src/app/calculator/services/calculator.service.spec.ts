import { inject, TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should ...', inject([CalculatorService], 
    (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('deve garantir que 1 + 4 = 5', 
    inject([CalculatorService], (service: CalculatorService) => {
      let sum = service.calculate(1, 4, CalculatorService.SUM);
      expect(sum).toEqual(5);
    })
  );

  it('deve garantir que 1 - 4 = -3', 
    inject([CalculatorService], (service: CalculatorService) => {
      let subtraction = service.calculate(1, 4, CalculatorService.SUBTRACTION);
      expect(subtraction).toEqual(-3);
    })
  );

  it('deve garantir que 1 / 4 = 0.25', 
    inject([CalculatorService], (service: CalculatorService) => {
      let division = service.calculate(1, 4, CalculatorService.DIVISION);
      expect(division).toEqual(0.25);
    })
  );

  it('deve garantir que 1 * 4 = 4', 
    inject([CalculatorService], (service: CalculatorService) => {
      let multiplication = service.calculate(1, 4, CalculatorService.MULTIPLICATION);
      expect(multiplication).toEqual(4);
    })
  );

  it('deve retornar 0 para operação inválida', 
    inject([CalculatorService], (service: CalculatorService) => {
      let operationInvalida = service.calculate(1, 4, '%');
      expect(operationInvalida).toEqual(0);
    })
  );
});
