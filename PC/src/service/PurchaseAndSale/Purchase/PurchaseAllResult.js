import request from '@/utils/request'
// get请求
export function getProcurementAllResult(params) {
  return request({
    url: '/pps/procurement/result',
    method: 'get',
    params
  })
}
// 根据订单编号查看详情
export function getProcurementResultDetails(params, path) {
  return request({
    url: '/pps/procurement/result/detail/' + path,
    method: 'get',
    params
  })
}
