import React from 'react';
import ReactDom from 'react-dom';
import {getRepoByUser} from './api';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repos: []};
  }

  componentDidMount() {
    getRepoByUser(this.props.name).then((repos) => {
      this.setState({repos});
      console.log(this.state.repos);
    });
  }

  render() {
    return (
        <h1>Hello World</h1>
    );
  }
}


var element = React.createElement(HelloWorld, {name: 'jackqt'});
ReactDom.render(element, document.getElementById('app'));
