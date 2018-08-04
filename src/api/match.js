import request from '@/utils/request'
const base_url = 'https://api.opendota.com/api/'
export function fetchRankMatches () {
  return request({
    url: base_url + 'players/'+id,
    method: 'get',
  })
}

