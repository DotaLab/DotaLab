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
    MatchInfo:[],
    HeroInfo:[],
    cur_hero:null,
    flag1:false,
    mask: "foolish",
    loginstats:false,
    Username:'',
    Userimg:'',
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
    setHeroInfo(heroinfo){
      state.HeroInfo = heroinfo;
    },
    setMatchInfo(matchinfo){
      state.MatchInfo = matchinfo;
    },
    setcur_hero(Cur_hero){
      state.cur_hero = Cur_hero
    },
    setflag1(Flag1){
      state.flag1 = Flag1
    },
    setloginstats(Loginstats){
      state.loginstats = Loginstats
    },
    setUserimg(userimg){
      state.Userimg = userimg
    },
    setUsername(username){
      state.Username = username
    }
  }
})