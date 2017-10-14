# react-sorter
> Sort component for react.


## properties:
```javascript

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
  
```

## usage:
```jsx

// install: npm install afeiship/react-sorter --save
// import : import ReactSorter from 'react-sorter'

class App extends React.Component{
  state = {
    rc1Value:'none',
    rc2Value:'none'
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc1 = this.refs.rc1;
    window.rc2 = this.refs.rc2;
  }

  _change1 = e => {
    console.log(e.target.value);
    this.setState({ rc1Value: e.target.value });
  };

  _change2 = e => {
    console.log(e.target.value);
    this.setState({ rc2Value: e.target.value });
  };

  render(){
    const { rc1Value, rc2Value } = this.state;
    return (
      <div className="hello-react-sorter">
      <h1>Sorter</h1>
      <ReactSorter ref='rc1' value={rc1Value} onChange={this._change1}>
        Sorter1 - { rc1Value }
      </ReactSorter>

      <h1>Sorter with reverse</h1>
      <ReactSorter reverse value={rc2Value} ref='rc2' onChange={this._change2}>
        Sorter2 - { rc2Value }
      </ReactSorter>
    </div>
    );
  }
}

```
