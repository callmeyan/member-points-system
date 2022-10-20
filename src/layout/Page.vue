<template>
    <div id="page-layout">
        <!-- 左侧的菜单 -->
        <div class="page-left-side-bar">
            <LeftMenu />
            <!-- 使用具名的插槽 -->
            <slot name="leftSideFooter" />
        </div>
        <!-- 右侧的内容 -->
        <div class="page-content">
            <div v-if="title" class="page-content-title">{{title}}</div>
            <div class="page-content-container">
                <!-- 使用插槽进行引用子元素 -->
                <slot />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

import LeftMenu from './../components/leftMenu.vue'
interface Props {
    /**
     * 页面标题，?表示可选
     */
    title?: string; 
}
// 定义属性
const props = defineProps<Props>()
</script>
<style lang="less">
#page-layout {
    display: flex;
    min-height: 100vh;
}

.page-content {
    flex: 1;
    background-color: #eeeeee;
    padding: 20px;
}

.page-left-side-bar {}

.page-content-title {
    font-size: var(--text-size-middle);
    margin-bottom: 20px;
}
</style>