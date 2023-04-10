import request from '@/utils/request'

export const userlist = () => {
  return request({
    url: '/tb1',
    method: 'GET'
  })
}