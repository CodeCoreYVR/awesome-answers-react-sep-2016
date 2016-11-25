import React, { Component } from 'react';
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail'
import $ from 'jquery';

const BASE_URL = 'http://localhost:3001';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: [],
      question: undefined
    }

    // expandQuestion will be used asynchronously as a callback
    // when a question is clicked
    // we must garantee that it still has this. bind it!
    this.expandQuestion = this.expandQuestion.bind(this);
  }

  getQuestion(id) {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions/${id}`,
      success: function (question) {
        // once we receive the questions from our server,
        // we store in the state
        this.setState({question: question})
      // this function is called asynchronously
      // we must bind(this) to be able to use this.setState
      }.bind(this)
    })
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
    // expandQuestion is called when a question from the
    // QuestionList component is clicked
    this.getQuestion(id)
  }

  componentDidMount () {
    // when the component is loaded on the page, we
    // will make an ajax request to fetch the questions
    this.getQuestions()
  }

  render() {
    var content;

    // If we have the data of a question stored in the state, let's
    // render it. Otherwise, render the list of questions
    if (this.state.question) {
      content = <QuestionDetail question={this.state.question} />
    } else {
      content = <QuestionList
        questions={this.state.questions}
        onClick={this.expandQuestion} />
    }

    return (
      <div className="App">
        { content }
      </div>
    );
  }
}

export default App;
