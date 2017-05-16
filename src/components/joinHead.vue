<template>
  <div>
    	<div class="j-head">
    		<div class="j-head-cover">
    			<img :src="my.pic"/>
    		</div>
    		<div class="j-head-info">
    			<div class="j-head-info-name">{{my.name}}</div>
    			<div class="j-head-info-money">
    				<div class="money-title">金币</div>
    				<div class="money-info">
    						<div class="icon"></div>
    						<div class="amount">{{my.money}}</div>
    						<div class="add"></div>
    				</div>
    			</div>
    			<div class="j-head-info-grade">等级：{{my.grade}}</div>
    		</div>
    	</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			my:this.$store.state.my
		}
	}
}
</script>

<style scoped>
	.j-head{ display: flex; margin-top:.08rem;}
	
	.j-head-cover{ width: 1.45rem;  height: 1.45rem; margin-left: .45rem; background: url(../assets/head-background.png); background-size: 100% 100%; display: flex; align-items: center; justify-content: center;}
	.j-head-cover img{ width: 1.2rem; height: 1.2rem; border-radius: 100%;}
	
	.j-head-info{ flex:1; margin-left: .2rem; overflow: hidden;}
	
	.j-head-info-name{ font-size: .34rem; margin-top: .15rem; white-space:nowrap; text-overflow:ellipsis; overflow: hidden;}
	
	.j-head-info-money{ margin-top:.2rem; display: flex; align-items:center; }
	.money-title{ font-size: .28rem; color: #fded53;}
	.money-info{ height: .6rem; background: #666; border-radius: .4rem; margin-left: .1rem; display: flex; align-items: center;}
	.money-info .icon{ width: .52rem; height: .52rem; background: url(../assets/icon-jinbi.png); background-size:100% 100%; margin-left:.12rem; }
	.money-info .amount{ flex:1; font-size: .4rem; color: #fded53; overflow: hidden; text-align: center; padding: 0 .2rem;}
	.money-info .add{width: .26rem; height: .26rem; background: url(../assets/icon-add.png); background-size:100% 100%; margin-right: .28rem;}
	
	.j-head-info-grade{ font-size: .28rem; margin-top: .2rem;}
</style>
