import request from '@/utils/request'
const base_url = 'https://api.opendota.com/api/'
const local_url = '/static/data/heroes.json'
export function fetchHeroImg () {
  return request({
    url: local_url,
    method: 'get',
    //params: id
  })
}