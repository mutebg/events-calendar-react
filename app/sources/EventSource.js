import Actions from '../actions/EventActions';
//import fetch from 'fetch';

let EventSource = {
  fetchList: {
    remote(){
      return new Promise((resolve, reject) => {
        fetch( 'https://spreadsheets.google.com/feeds/list/1yIfq_jKVb0IHe1nfkoZk7t9_6dJA4ZR_Lxvgu7On_xo/od6/public/values?alt=json' )
          .then( response => response.json() )
          .then( response => {
            resolve( response );
          }, error => {
            reject(error);
          });
      });
    },
    success: Actions.eventSuccess,
    error: Actions.eventFailed
  }
}

export default EventSource;
