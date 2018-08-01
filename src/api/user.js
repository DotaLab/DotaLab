import request from '@/utils/request'
const base_url = 'https://api.opendota.com/api/'
export function fetchUser (id) {
  return request({
    url: base_url + 'players/'+id,
    method: 'get',
    //params: id
  })
}

export function fetchUserTotal (id) {
    return request({
      url: base_url + 'players/'+ id + '/wl',
      method: 'get',
      //params: id
    })
  }

  export function fetchUserRecent (id) {
    return request({
      url: base_url + 'players/'+ id + '/recentMatches',
      method: 'get',
      //params: id
    })
  }

  export function fetchUserPeer (id) {
    return request({
      url: base_url + 'players/'+ id + '/peers',
      method: 'get',
      //params: id
    })
  }

// export function fetchArticle (id) {
//   return request({
//     url: APIbaseURL + '/article/detail',
//     method: 'get',
//     params: { id }
//   })
// }

// export function fetchPv (pv) {
//   return request({
//     url: '/article/pv',
//     method: 'get',
//     params: { pv }
//   })
// }

// export function createArticle (data) {
//   return request({
//     url: '/article/create',
//     method: 'post',
//     data
//   })
// }

// export function updateArticle (data) {
//   return request({
//     url: '/article/update',
//     method: 'post',
//     data
//   })
// }
