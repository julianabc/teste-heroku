/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParticipantesService } from './participantes.service';

describe('Service: Participantes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticipantesService]
    });
  });

  it('should ...', inject([ParticipantesService], (service: ParticipantesService) => {
    expect(service).toBeTruthy();
  }));
});
