import request from '@/utils/request'
const base_url = 'https://api.opendota.com/api/'
export function fetchMatcheinfo (match_id) {
  return request({
    url: base_url + 'matches/' + match_id,
    method: 'get',
  })
}

