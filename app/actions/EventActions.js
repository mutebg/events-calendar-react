import alt from '../libs/alt';

class Actions {
  constructor(){
    this.generateActions(
      'eventFetch',
      'eventSuccess',
      'eventFailed',
      'setPage',
      'setArrows'
    );
  }
}

export default alt.createActions(Actions);
