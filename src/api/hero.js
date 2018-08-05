import request from '@/utils/request'
const base_url = 'https://api.opendota.com/api/'

// 获取英雄的基本属性
export function fetchHeroBase () {
  return request({
    url: base_url + "heroes",
    method: 'get',
    //params: id
  })
}
// 获取最近的英雄相关比赛
export function fetchHeroMatch (hero_id) {
  return request({
    url: base_url + "heroes/" + hero_id + "/matches",
    method: 'get',
    //params: id
  })
}

// 获取该英雄在一定事件下的胜率情况
export function fetchHeroDurations (hero_id) {
  return request({
    url: base_url + "heroes/" + hero_id + "/durations",
    method: 'get',
    //params: id
  })
}

// 获取英雄在各个排名下的选择以及胜率情况
export function fetchHeroStats () {
  return request({
    url: base_url + "heroStats",
    method: 'get',
    //params: id
  })
}

// 获取英雄在各个排名下的选择以及胜率情况
export function fetchHeroPlayers (hero_id) {
  return request({
    url: base_url + "heroes/" + hero_id + "/players",
    method: 'get',
    //params: id
  })
}

export function fetchHeroMatchupss (hero_id) {
  return request({
    url: base_url + "heroes/" + hero_id + "/matchups",
    method: 'get',
    //params: id
  })
}
