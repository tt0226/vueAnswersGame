import Vue from 'vue'
import Router from 'vue-router'
import join from '../views/join/index'						//参加
import main from '../views/main/index'						//主窗口
import matching from '../views/matching/index'		//匹配
import rank from '../views/rank/index'						//排行榜
import result from '../views/result/index'				//结果页
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '进入游戏',
      component: join
    },
    {
      path: '/main',
      name: '挑战到底',
      component: main
    },
    {
      path: '/matching/:id',
      name: '匹配对手',
      component: matching,
      beforeEnter: (to, from, next) => {
        document.title = to.name + "(" +to.params.id+ ")";
        next();
      }
    },
    {
      path: '/rank',
      name: '排行榜',
      component: rank
    },
    {
      path: '/result',
      name: '挑战结果',
      component: result
    }
  ]
})

router.beforeEach((to, from, next) => { //to: Route: 即将要进入的目标 路由对象   from: Route: 当前导航正要离开的路由  next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
	document.title = to.name;
	next();
})

export default router;