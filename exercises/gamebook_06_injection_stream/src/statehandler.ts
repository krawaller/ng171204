import { Injectable, Inject } from '@angular/core';
import { GameState, Adventure } from './interfaces';
import { AdventureToken } from './tokens'
import { BehaviorSubject } from 'rxjs';

const SAVEKEY = 'GAMEITEM';

@Injectable()
export class StateHandler {
  private stateStream: BehaviorSubject<GameState>
  constructor(@Inject(AdventureToken) public adventure: Adventure){
    let saveStr = localStorage.getItem(SAVEKEY);
    let beginningState = saveStr ? JSON.parse(localStorage.getItem(SAVEKEY)) : adventure.startState;
    this.stateStream = new BehaviorSubject<GameState>(beginningState);
  }
  listen(cb){
    this.stateStream.subscribe(cb);
  }
  update(newState: GameState) {
    localStorage.setItem( SAVEKEY, JSON.stringify(newState) );
    this.stateStream.next(newState); // `.next` is same as `.emit` on an `EventEmitter`
  }
}

/*
We have to use a `BehaviorSubject` as the exposed stream because it "remembers" the last event.
So whenever someone subscribes to it, they will immediately get the last event that was emitted.
*/