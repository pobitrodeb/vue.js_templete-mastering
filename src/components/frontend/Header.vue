<template>
        	<!--================ Start Header Area =================-->
	<header class="header_area">
		<div class="main_menu">
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container">
					<!-- Brand and toggle get grouped for better mobile display -->
					<a class="navbar-brand logo_h" href="index.html"><img src="/frontend/img/logo.png" alt=""></a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul class="nav navbar-nav menu_nav justify-content-end">
							<li class="nav-item active"><a class="nav-link":to="{name:'home'}">Home</a></li>
							<li class="nav-item"><a class="nav-link" :to="{name:'about'}">About</a></li>
							<li class="nav-item"><a class="nav-link" :to="{name:'service'}">Services</a></li>
							<li class="nav-item"><a class="nav-link" :to="{name:'portfolio'}">Portfolio</a></li>
							<li class="nav-item"><a class="nav-link" :to="{name:'blog'}">Blog</a></li>
							<li class="nav-item"><a class="nav-link" :to="{name: 'contact'}">Contact</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
	<!--================ End Header Area =================-->
</template>

<script lang="ts" setup>
    export default {
        name: 'Header',
    }
</script>

<style lang="scss" scoped>

</style>    