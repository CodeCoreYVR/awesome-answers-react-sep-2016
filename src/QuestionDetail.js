import React from 'react';

// This is a simple to display the data of a question
function QuestionDetail (props) {
  const q = props.question

  return (
    <div className='QuestionDetail'>
      <div
        onClick={props.onBackClick}
        className='BackButton'>
        {'<<<'}
      </div>

      <h1>{q.title}</h1>
      <p>{q.body}</p>

      <div>
        <span>Created at</span>{q.created_at}
      </div> <div>
        <span>View Count</span>{q.view_count}
      </div> <div>
        <span>Created by:</span>{q.user.first_name}
      </div>
    </div>
  )
}

export default QuestionDetail;
