import { TestBed } from '@angular/core/testing';

import { PlayerTurnService } from './player-turn.service';

describe('PlayerTurnService', () => {
  let service: PlayerTurnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerTurnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
