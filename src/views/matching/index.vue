<template>
	  <div class="matching">
	    	<div class="chunk myChunk"></div>
	    	<transition name="your" appear>
	    		<div class="chunk yourChunk"></div>
	    	</transition>
	  </div>
</template>

<script>
	export default {
		data(){
			return{
				game:this.$store.state.game,		//游戏信息
				my:this.$store.state.my,				//我的信息
				your:this.$store.state.your			//对手信息
			}
		},
		beforeMount(){
			
		}
	}
</script>

<style scoped>
	.matching{ height: 100%; }
	.matching .chunk{ width: 100%; height: 50%; position: relative;}
	.matching .myChunk{background: #3a373f;  }
	.matching .myChunk:after{ content:''; display: block; position: absolute; bottom:-1.6rem; left:0; z-index: 2;  
		width: 0;
    height: 0;
    border-top: 3.2rem solid #3a373f;
    border-right: 7.5rem solid transparent;
	}
	.matching .yourChunk{ background: #9bdb77;}
	.matching .yourChunk:after{ content:''; display: block; position: absolute; top:-1.6rem; left:0;  z-index: 2;   
		width: 0;
    height: 0;
    border-bottom: 3.2rem solid #9bdb77;
    border-left: 7.5rem solid transparent;
	}
    
  .your-enter-active{
  	transition: all .4s ease 2s;
	}
	.your-enter{
	  transform: translate(-100%,0);
	}
</style>
