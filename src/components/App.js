import React, { Component } from 'react';
import Header from './header/Header';
import List from './list/List';
import { GlobalStyle } from './Style';

class App extends Component {
  state = {
    data: [
      { id: 0, text: 'lorem ipsum doloret sit ament', date: '2019-06-19', color: 'red', isDone: true },
      { id: 1, text: 'lorem ipsum doloret sit ament', date: '2019-10-19', color: 'blue', isDone: false },
    ],
    textValue: '',
    colorValue: 'green',
    dateValue: new Date().toISOString().split("T")[0],
  }

  handleForm = (e) => {
    const type = e.target.type;
    const value = e.target.value;
    if (type === 'select-one') {
      this.setState({
        colorValue: value
      })
    } else if (type === 'date') {
      this.setState({
        dateValue: value
      })
    } else if (type === 'text') {
      this.setState({
        textValue: value
      })
    }
  }

  handlePushData = (e) => {
    e.preventDefault();
    if (this.state.textValue.length > 3) {
      const length = this.state.data.length;
      const data = this.state.data;
      const newitem = { id: length + 1, text: this.state.textValue, date: this.state.dateValue, color: this.state.colorValue };
      data.push(newitem);
      this.setState({
        data,
        textValue: '',
        colorValue: 'green',
        dateValue: new Date().toISOString().split("T")[0],
      })
    } else {
      alert('Your task is to short!');
    }
  }

  handleRemoveItem = (e) => {
    const id = e;
    const data = this.state.data;
    const newData = data.filter(item => item.id !== id);
    this.setState({
      data: newData
    })
  }

  handleIsDoneItem = (e) => {
    const id = e;
    const data = this.state.data;
    data.forEach(item => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
    });
    this.setState({
      data
    })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Header
          textValue={this.state.textValue}
          dateValue={this.state.dateValue}
          colorValue={this.state.colorValue}
          change={this.handleForm}
          submit={this.handlePushData}
        />
        <List
          data={this.state.data}
          remove={this.handleRemoveItem}
          done={this.handleIsDoneItem}
        />
      </>
    );
  }
}

export default App;
