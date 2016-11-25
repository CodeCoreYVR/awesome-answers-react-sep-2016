import React, { Component } from 'react';
import QuestionList from './QuestionList';
import $ from 'jquery';

const BASE_URL = 'http://localhost:3001';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: []
    }
  }

  getQuestions() {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions`,
      success: function (questions) {
        // once we receive the questions from our server,
        // we store in the state
        this.setState({questions: questions})
      // this function is called asynchronously
      // we must bind(this) to be able to use this.setState
      }.bind(this)
    })
  }

  expandQuestion (id) {
    console.log('Question id:', id)
  }

  componentDidMount () {
    // when the component is loaded on the page, we
    // will make an ajax request to fetch the questions
    this.getQuestions()
  }

  render() {
    return (
      <div className="App">
        <QuestionList
          questions={this.state.questions}
          onClick={this.expandQuestion} />
      </div>
    );
  }
}

export default App;
