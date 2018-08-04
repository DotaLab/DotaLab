import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
    count:0,
    // 全局的用户ID属性
    UserId:'',
    UserInfo:[],
    UserTotal:[],
    UserRecentMacth:[],
    UserPeer:[],
    HeroImg:[],
    MatchInfo:[],
  },
  mutations:{
    setUserId(userId){
      state.UserId = userId;
    },
    setUserInfo(userInfo){
      state.UserInfo = userInfo;
    },
    setUserTotal(userTotal){
      state.UserTotal = userTotal;
    },
    setUserRecentMacth(userReM){
      state.UserRecentMacth = userReM;
    },
    setUserPeer(userPeer){
      state.UserPeer = userPeer;
    },
    setHeroImg(heroImg){
      state.HeroImg = heroImg;
    },
    setMatchInfo(matchinfo){
      state.MatchInfo = matchinfo;
    }
  }
})