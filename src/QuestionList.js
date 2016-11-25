import React from 'react';

function QuestionList (props) {

  const forwardQuestion = function (id) {
    // function that returns a function
    // when forwardQuestion is called, the id argument
    // will be accessible to the function below
    return function (event) {
      props.onClick(id)
    }
  }

  // var questionFunc = forwardQuestion(10)
  // ☝️ will be a function
  // it will be
  // function (event) {
  //   props.onClick(id)
  // }
  // the id variable will be 10 as declared above

  return (
    <ul className='QuestionList'>
      {
        props.questions.map(
          function (question, index) {
            return (
              <li
                onClick={forwardQuestion(question.id)}
                key={question.id}>
                {question.title}
              </li>
              )
          }
        )
      }
    </ul>
  )
}

// You can specify default values for your component's props
// Assign an object to the property defaultProps on the component
// object
// This object will contain keys named after your props. Its values
// will be the default values.
QuestionList.defaultProps = {
  questions: [],
  // to prevent a crash if the QuestionList component is
  // called without an onClick prop with set a default empty function to it
  onClick: function () {}
}

// We can export any variable
export default QuestionList;
