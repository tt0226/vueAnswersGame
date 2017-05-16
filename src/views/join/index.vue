<template>
  <div class="join">
  		<!-- 头部信息 -->
	<join-head></join-head>
    	<!-- 排行榜和挑战微信好友按钮 -->
    	<div class="j-but">
    		<router-link to="/rank" tag="div" class="rank"></router-link>
    		<div class="share"></div>
    	</div>
    	<!-- 挑战的场次 -->
    	<div class="j-plaza">
    		<div class="title"></div>
    		<div class="plaza plaza1" @click="toMatching('初级')"></div>
    		<div class="plaza plaza2" @click="toMatching('中级')"></div>
    		<div class="plaza plaza3" @click="toMatching('高级')"></div>
    	</div>
	</div>
</template>

<script>
	import joinHead from '../../components/joinHead'
	import router from '../../router/index'
	export default {
		data(){
			return{
				//curTab: this.$store.state.curTab
	// 				name1: this.$store.state.a.name,
	// 				name2: this.$store.state.b.name
			}
		},
		components:{
				joinHead
		},
		methods:{
			toMatching(data){	//去匹配对手
				this.$store.commit('changeGrade',data);
				router.push({
		    	name: '匹配对手',
		    	params:{'id':data}
		    });
			}
		},
		beforeCreate(){
		//	this.$store.commit('changeTab', 5);		
		},
	}
</script>

<style scoped>
	.join{ height: 100%; overflow: hidden; background: url(../../assets/join-background.png) no-repeat center bottom; background-size:100% auto;}
	.j-but{ margin:.35rem .35rem 0 .55rem; display: flex;  justify-content: space-between;}
	.j-but .rank{ width: 2.45rem; height: .81rem; background: url(../../assets/but-rank.png); background-size:100% 100%;}
	.j-but .share{ width: 3.33rem; height: .81rem; background: url(../../assets/but-challenge.png); background-size:100% 100%;}
	.j-plaza{ display: flex; flex-direction: column; align-items: center; margin-top:.4rem;}
	.j-plaza .title{ width: 3.99rem; height: .34rem; background: url(../../assets/text-joininfo.png); background-size:100% 100%;}
	.j-plaza .plaza{ width: 6.54rem; height: 1.98rem; margin-top:.25rem; }
	.j-plaza .plaza1{background: url(../../assets/join1.png); background-size:100% 100%;}
	.j-plaza .plaza2{background: url(../../assets/join2.png); background-size:100% 100%;}
	.j-plaza .plaza3{background: url(../../assets/join3.png); background-size:100% 100%;}
</style>
