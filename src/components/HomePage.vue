<template>
    <div class="dark:bg-gray-700 min-h-screen">
        <!-- 导航栏 -->
        <NavBar />
        <!-- 欢迎信息 -->
        <div class="mt-10 ml-10 select-none">
            <div class="text-6xl mb-1">欢迎回来，Huaji233</div>
            <div class="text-xl mb-1">你现在的排名是：1</div>
            <div class="text-xl mb-1">牛逼牛逼，加油保持！</div>
        </div>
        <!-- 排行榜 -->
        <div class="mt-20 flex">
            <div class="m-auto"><RankTable /></div>
        </div>
    </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import RankTable from "./RankTable.vue";
export default {
    name: "HomePage",
    components: { RankTable, NavBar },
};
</script>