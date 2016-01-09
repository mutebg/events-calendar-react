import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
  static defaultProps = {
    open: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.animationTime = 500;
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        open: true,
      })
    }, this.animationTime );
  }

  handleClick() {
    this.setState({
      open: false,
    });

    setInterval( () => {
      let el = ReactDOM.findDOMNode(this);
      //el.parentNode.removeChild(el);
      ReactDOM.unmountComponentAtNode(el);
    }, this.animationTime );
  }

  render() {

    let style = {transition: ( this.animationTime / 1000 ) + 's all'};
    let className= 'modal';
    if ( this.state.open ) {
      className += ' modal--open';
    }

    let title = <div className="modal__title page-title">{this.props.title}</div>

    return (
      <div className={className} style={style}>
        <button className="modal__close" onClick={ this.handleClick.bind(this) }>close</button>
        {title}
        <div className="model__body">{ this.props.children }</div>
      </div>
    );
  }
}
