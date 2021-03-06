import request from '@/utils/request'
// get请求
export function getIncomeExpensesData(params) {
  return request({
    url: '/pps/incomeExpenses',
    method: 'get',
    params
  })
}

// post 请求

export function postIncomeExpensesData(data) {
  return request({
    url: '/pps/incomeExpenses',
    method: 'post',
    data
  })
}
// put 请求
export function putIncomeExpensesData(data) {
  return request({
    url: '/pps/incomeExpenses',
    method: 'put',
    data
  })
}
// delete请求
export function delIncomeExpensesData(params) {
  return request({
    url: '/pps/incomeExpenses',
    method: 'delete',
    params
  })
}

// 通过id查询供应商
export function findIncomeExpensesById(params, path) {
  return request({
    url: '/pps/incomeExpenses/' + path,
    method: 'get',
    params
  })
}
