# react-sorter
> Sort component for react.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: 'none',
    onChange: noop
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-sorter --save
// import : import ReactSorter from 'react-sorter'

class App extends React.Component{
  state = {

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
  };

  _change2 = e => {
    console.log(e.target.value);
  };

  render(){
    return (
      <div className="hello-react-sorter">
      <ReactSorter ref='rc1' onChange={this._change1}>
        Sorter1
      </ReactSorter>
      <ReactSorter ref='rc2' onChange={this._change2}>
        Sorter2
      </ReactSorter>
    </div>
    );
  }
}

```
