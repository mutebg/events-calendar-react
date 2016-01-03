import alt from '../libs/alt';
import Actions from '../actions/EventActions';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import EventSource from '../sources/EventSource';

@datasource(EventSource)
@decorate(alt)
class EventStore {
  constructor(){
    this.state = {
      list: [],
      loading: false,
      error: false,
      page: 0,
      show_arrows: true
    };
  }

  @bind(Actions.eventFetch)
  getList() {
    this.getInstance().fetchList();
  }

  @bind(Actions.eventSuccess)
  setList(data){
    var list = [];
    data.feed.entry.forEach( ( item, i ) => {
      var row = {
        id: i,
        name: item['gsx$name']['$t'],
        image: item['gsx$image']['$t'],
        date: item['gsx$date']['$t'],
        time: item['gsx$time']['$t'],
        location: item['gsx$location']['$t'],
        vanue: item['gsx$vanue']['$t'],
      }
      list.push(row);
    });

    this.setState({
      list,
      loading: false
    });
  }

  @bind(Actions.eventFailed)
  setError() {
    this.setState({
      error: true,
      loading: false,
    });
  }

  @bind(Actions.setPage)
  setPage(page) {
    this.setState({
      page
    });
  }

  @bind(Actions.setArrows)
  setArrows(show_arrows) {
    this.setState({
      show_arrows
    });
  }


}

export default alt.createStore(EventStore);
