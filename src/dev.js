import './dev.scss';
import ReactSorter from './main';

/*===example start===*/

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
      <ReactSorter ref='rc1' reverse onChange={this._change1}>
        Sorter1
      </ReactSorter>
      <ReactSorter ref='rc2' onChange={this._change2}>
        Sorter2
      </ReactSorter>
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
