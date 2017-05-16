import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const my = {
	state:{
		name:'吴佩',		//姓名
		pic:'http://img2.tbcdn.cn/tfscom/i4/TB1_gtCRXXXXXaOXFXXXXXXXXXX_!!0-item_pic.jpg_320x320.jpg',			//头像
		money:2330,		//金币
		grade:'小学一年级',		//等级
		site:'上海市浦东新区',		//地址
		winrate:'75%'		//胜率
	}
}
const your = {
	state:{
		name:'对手',		//姓名
		pic:'http://ui.51bi.com/opt/siteimg/super/hd/2017/5/16/1e802a9a-f15a-4575-a751-0643b1a02905.jpg',			//头像
		money:1994,		//金币
		grade:'小学二年级',		//等级
		site:'北京什么什么区',		//地址
		winrate:'100%'		//胜率
	}
}

const game = {
	state:{
		grade:'',		//等级      初级场次    中级场次   高级场次
		matching:0,		//0未匹配  1匹配中  2匹配上了
	},
	mutations:{
		changeGrade(state,n){
			state.grade = n;
		}
	}
}

export default new Vuex.Store({
	modules: {
		my: my,
		your: your,
		game:game
	}
})
//export default new Vuex.Store({
//	state: {
//		curTab:0,		
//	},
//	mutations: {
//		changeTab (state, n) {
//			console.log(state);
//			console.log(n);
//			state.curTab = n;
//		}
//	},
//	getters: {
//		getTab (state, getters) {
//			return state.curTab;
//		}
//	}
//})