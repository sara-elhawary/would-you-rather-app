import { createSlice } from '@reduxjs/toolkit'

const RECEIVE_USERS = 'RECEIVE_USERS'
const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'
const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

export const users = createSlice({
  name: 'users',
  initialState: {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: '../assets/icons/01.png',
      answers: {
        '8xf0y6ziyjabvozdd253nd': 'optionOne',
        '6ni6ok3ym7mf1p33lnez': 'optionTwo',
        am8ehyc8byjqgar0jgpub9: 'optionTwo',
        loxhs1bqm25b708cmbf3g: 'optionTwo',
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
    },
    tylermcginnis: {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatarURL: '../assets/icons/02.png',
      answers: {
        vthrdm985a262al8qx3do: 'optionOne',
        xj352vofupe1dqz9emx13r: 'optionTwo',
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
      id: 'johndoe',
      name: 'John Doe',
      avatarURL: '../assets/icons/03.png',
      answers: {
        xj352vofupe1dqz9emx13r: 'optionOne',
        vthrdm985a262al8qx3do: 'optionTwo',
        '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      },
      questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    },
  },
  reducers: {},
})
