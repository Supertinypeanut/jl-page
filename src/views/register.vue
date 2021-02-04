<template>
	<div class="main">
		<a-card class="main-card" title="Sign In" style="width: 400px">
			<a-form
				ref="ruleForm"
				class="login-form"
				:model="formInline"
				@submit="handleSubmit"
				@submit.prevent
				:rules="rules"
			>
				<a-form-item name="user">
					<a-tooltip placement="topLeft">
						<template #title>
							<span>6-32 位英文数字</span>
						</template>
						<a-input v-model:value="formInline.user" placeholder="用户名">
							<template #prefix
								><UserOutlined style="color:rgba(0,0,0,.25)"
							/></template>
						</a-input>
					</a-tooltip>
				</a-form-item>
				<a-form-item name="gameName">
					<a-tooltip placement="topLeft">
						<template #title>
							<span>此昵称将在游戏中显示. 1-10 位英文数字</span>
						</template>
						<a-input v-model:value="formInline.gameName" placeholder="游戏昵称">
							<template #prefix
								><UserOutlined style="color:rgba(0,0,0,.25)"
							/></template>
						</a-input>
					</a-tooltip>
				</a-form-item>
				<a-form-item name="password">
					<a-tooltip placement="topLeft">
						<template #title>
							<span>6-32 位英文数字符号组合</span>
						</template>
						<a-input
							v-model:value="formInline.password"
							type="password"
							placeholder="密码"
						>
							<template #prefix
								><LockOutlined style="color:rgba(0,0,0,.25)"
							/></template>
						</a-input>
					</a-tooltip>
				</a-form-item>
				<a-form-item name="safeCode">
					<a-tooltip placement="topLeft">
						<template #title>
							<span
								>安全码不是密码, 用于找回密码等敏感操作. 6-32
								位英文数字符号组合</span
							>
						</template>
						<a-input
							v-model:value="formInline.safeCode"
							type="password"
							placeholder="安全码"
						>
							<template #prefix
								><LockOutlined style="color:rgba(0,0,0,.25)"
							/></template>
						</a-input>
					</a-tooltip>
				</a-form-item>
				<a-form-item>
					<a-tooltip placement="topLeft">
						<template #title>
							<span>如果您没有邀请码可以跳过不填</span>
						</template>
						<a-input
							v-model:value="formInline.inviteCode"
							type="password"
							placeholder="邀请码"
						>
							<template #prefix
								><ShareAltOutlined style="color:rgba(0,0,0,.25)"
							/></template>
						</a-input>
					</a-tooltip>
				</a-form-item>
				<a-form-item>
					<a-button
						type="primary"
						html-type="submit"
						:disabled="disableRegister"
					>
						注册
					</a-button>
				</a-form-item>
			</a-form>
			<a-button @click="onToLogin">返回登录</a-button>
		</a-card>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import {
	UserOutlined,
	LockOutlined,
	ShareAltOutlined,
} from '@ant-design/icons-vue'
import router from '@/router'

export default defineComponent({
	name: 'register',
	components: {
		UserOutlined,
		LockOutlined,
		ShareAltOutlined,
	},
	setup() {
		const formInline = reactive({
			user: '',
			gameName: '',
			password: '',
			safeCode: '',
			inviteCode: '',
		})
		const rules = {
			user: [
				{
					required: true,
					pattern: /^[a-zA-Z\d]{6,32}$/,
					message: '请检查用户名! 6-32 位英文数字',
					trigger: 'blur',
				},
			],
			password: [
				{
					required: true,
					pattern: /^[a-zA-Z\d]{1，10}$/,
					message: '请检查游戏昵称! 1-10 位英文数字',
					trigger: 'blur',
				},
			],
			gameName: [
				{
					required: true,
					pattern: /^[a-zA-Z\d]{6,32}$/,
					message: '请检查密码! 6-32 位英文数字符号组合',
					trigger: 'blur',
				},
			],
			safeCode: [
				{
					required: true,
					pattern: /^[a-zA-Z\d]{6,32}$/,
					message: '请检查安全码! 6-32 位英文数字符号组合',
					trigger: 'blur',
				},
			],
		}

		const disableRegister = computed(() => {
			const { user, gameName, password, safeCode } = formInline
			return (
				user === '' || gameName === '' || password === '' || safeCode === ''
			)
		})

		const handleSubmit = () => {
			console.log(formInline)
		}

		const onToLogin = () => {
			router.push('/login')
		}

		return {
			disableRegister,
			formInline,
			handleSubmit,
			onToLogin,
			rules,
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
