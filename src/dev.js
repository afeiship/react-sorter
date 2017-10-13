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
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-sorter">
        <ReactSorter ref='rc' />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
