<template>
	<div class="main">
		<a-card class="main-card" title="Sign In" style="width: 400px">
			<a-form
				class="login-form"
				:model="formInline"
				@submit="handleSubmit"
				@submit.prevent
			>
				<a-form-item>
					<a-input
						class=""
						v-model:value="formInline.user"
						placeholder="用户名"
					>
						<template #prefix
							><UserOutlined style="color:rgba(0,0,0,.25)"
						/></template>
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-input
						v-model:value="formInline.password"
						type="password"
						placeholder="密码"
					>
						<template #prefix
							><LockOutlined style="color:rgba(0,0,0,.25)"
						/></template>
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-button type="primary" html-type="submit" :disabled="disableLogin">
						登录
					</a-button>
				</a-form-item>
			</a-form>
			<a-button @click="onToRegister">立即注册</a-button>
		</a-card>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import router from '@/router'

export default defineComponent({
	name: 'login',
	components: {
		UserOutlined,
		LockOutlined,
	},
	setup() {
		const formInline = reactive({
			user: '',
			password: '',
		})

		const disableLogin = computed(
			() => formInline.user === '' || formInline.password === ''
		)

		const handleSubmit = () => {
			console.log(formInline)
		}

		const onToRegister = () => {
			router.push('/register')
		}
		return {
			disableLogin,
			formInline,
			handleSubmit,
			onToRegister,
		}
	},
})
</script>

<style lang="less">
.main {
	min-width: 1280px;
	&-card {
		width: 400px;
		margin: 30px auto 0 auto;
		.ant-col {
			width: 100%;
		}
		.ant-btn {
			width: 100%;
		}
		.ant-form-item:last-child {
			margin-bottom: 8px;
		}
	}
}
</style>
