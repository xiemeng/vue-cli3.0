<template>
	<!-- 所有的弹窗显示组件 -->
	<div class="disAlert">
		<section class="childSection">
			<div class="childSection2">
				<slot></slot>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.disAlert{
		position: fixed;left: 0;top: 0;z-index: 999;
		width: 100%;height: 100%;background-color: rgba(0,0,0,.4);
		display: flex;justify-content: center;
		align-content: center;
		.childSection2{
			transition:all .5s;
			animation:dialog .5s linear;
		}
		.childSection{
			position: absolute;left: 50%;top: 50%;
			transform: translate(-50%,-50%);
			
		}
	}
	@keyframes dialog{
		from {transform: scale(1.2);opacity: 0;}
		to {transform: scale(1.0);opacity: 1;}
	}
</style>
