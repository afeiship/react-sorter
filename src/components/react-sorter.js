// import './style.scss';

import React,{Component} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';



export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    reverse: PropTypes.bool,
  };

  static defaultProps = {
    value: 'none',
    onChange: noop,
    reverse: false
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if( value !== this.state.value ){
      this.setState({ value });
    }
  }

  _onClick = e => {
    const { onChange } = this.props;
    this._calcValue(()=>{
      onChange({ target:{ value: this.state.value } });
    });
  };

  _calcValue(inCallback){
    const { reverse } = this.props;
    const { value } = this.state;
    let newValue;
    switch(true){
      case value === 'none' && reverse:
      case value === 'asc':
        newValue = 'desc';
        break;
      case value === 'none' && !reverse:
      case value === 'desc':
        newValue = 'asc';
        break;
    }
    this.setState({ value: newValue }, inCallback );
  }

  render(){
    const {className, children, reverse, ...props} = this.props;
    return (
      <button {...props} data-value={this.state.value} className={classNames('react-sorter',className)} onClick={this._onClick}>
        {children}
      </button>
    );
  }
}
