<template>
	<a-config-provider :locale="locale" :autoInsertSpaceInButton="false">
		<router-view />
	</a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export default defineComponent({
	name: 'app',
	components: {},
	setup() {
		return { locale: zhCN }
	},
})
</script>

<style lang="less">
#app {
}
</style>
