import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  formatQuestion,
} from './_DATA'

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  )
}

export function saveQuestion(question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer(authUser, qid, answer) {
  // @ts-ignore
  return _saveQuestionAnswer({ authUser, qid, answer })
}

export { formatQuestion }
