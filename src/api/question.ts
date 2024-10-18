import request from '@/utils/request'

interface QuestionParams {
  page: number
  pageSize: number
}
// https://gty.einsh.com/qqyq-v5/question/oQuestionUser/myQuestions?page=1&pageSize=10
export const getMyQuestions = (params: QuestionParams) =>
  request.get('/question/oQuestionUser/myQuestions', params)


// https://gty.einsh.com/qqyq-v5/question/oQuestionItem/list?qid=1844965451563536386&page=&pageSize=999
export const getQuestionItems = (qid: string) =>
  request.get('/question/oQuestionItem/list', { qid, page: '', pageSize: 999 })

// /question/oQuestionUser/submitResponse
export const submitQuestion = (data: any) =>
  request.post('/question/oQuestionUser/submitResponse', data)
