<template>
	<section>
		<div>
			<router-view></router-view>
		</div>

		<div class = "Iam">
			<a href = "https://krasnodar.hh.ru/resume/0e8113cdff026319990039ed1f4534786d6e65"> 
				Looking for a job as VUE programmer  
			</a>
			<br><br>
			<a href = "https://github.com/abcolut/vueShopMixin"> 
				Sources 
			</a>
		</div>
	</section>
</template>

<script>
	export default {
		data(){
			return{}
		},
	}
</script>

<style>
h1, h2, h3{
	text-align:center;
	padding-bottom:15px;
}
body{    
	font-family: "arial", sans-serif;
	margin:10px;
}
.Iam{
	margin-top:100px;
	font-size:x-large;
	text-align:center
}
.otstup{
	margin-top:20px;
	margin-bottom:20px;
}
</style>
