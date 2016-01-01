import alt from '../libs/alt';
import Actions from '../actions/Actions';

class Store {
  constructor() {
    this.bindActions(Actions);
    this.items = [];
  }
  create(item) {

  }
  update(updatedItem) {

  }
  delete(id) {

  }
}

export default alt.createStore(Store, 'Store');
