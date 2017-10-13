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
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: '',
    onChange: noop
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

  calcValue(inCallback){
    const { value } = this.state;
    const newValue = ( !value || value === 'desc') ? 'asc' : 'desc';
    this.setState({ value: newValue }, inCallback );
  }

  _onClick = e => {
    const { onChange } = this.props;
    this.calcValue(()=>{
      onChange({ target:{ value: this.state.value } });
    });
  };

  render(){
    const {className, children,...props} = this.props;
    return (
      <span {...props} data-sort-value={this.state.value} className={classNames('react-sorter',className)} onClick={this._onClick}>
        {children}
      </span>
    );
  }
}
