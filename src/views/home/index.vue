<template>
	<ul class="user-list">
		<li class="user-list__item" v-for="user in users" :key="user.id">
			<div class="user-info">
				<div class="user-info__name">
					{{user.lName}} {{user.fName}} {{user.sName}}
				</div>
				<div class="user-info__phone">
					699-95-39
				</div>
			</div>
		</li>
	</ul>
</template>

<script>

import users from './users.json';

export default {
	name: 'home',

	data() {
		return {
			users: users
		}
	},

	mounted() {
		console.log(users);
	},
}
</script>

<style lang="scss" scoped>
.user-list__item {
	//background: #066;
	border-bottom: 1px solid #606060;
	//border-right: 4px solid $color_secondary;
	width: 100%;
	height: 112px;
	padding: 0 16px;
	position: relative;
	overflow: hidden;
	cursor: pointer;

	&:hover {
		//border-right: 4px solid $color_secondary;
		//background: $bg-active;
		// &:after {
		// 	content: '';
		// 	background: $color_secondary;
		// 	display: block;
		// 	width: 12px;
		// 	height: 12px;
		// 	position: absolute;
		// 	right: 0;
		// 	top: 50%;
		// 	transform: translate(50%, -50%) rotate(45deg);
		//}
		.name {
			//color: $color_primary_active;
		}
		.phone {
			//color: #369;
		}
	}

	&:last-child {
		border-bottom: none;
	}
}

.user-info {
	//background: #066;
	//height: 80px;
	//margin: 16px 0 0 8px;
	//float: left;

	&__name {
		font: 24px Helvetica;
		color: $color_primary;
		letter-spacing: 1px;
		height: 64px;
		line-height: 64px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	&__phone {
		font-size: 18px;
		color: $color_secondary;
		height: 32px;
		line-height: 32px;
		letter-spacing: 1px;
	}
}
</style>
