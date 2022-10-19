<template>
    <div id="page-layout">
        <div class="page-left-side-bar">
            <LeftMenu />
        </div>
        <div class="page-content">
            <div v-if="title" class="page-content-title">{{title}}</div>
            <div class="page-content-container">
                <slot />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import LeftMenu from './../components/leftMenu.vue'
interface Props {
    /**
     * 页面标题
     */
    title?: string;
}
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