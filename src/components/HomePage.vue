<template>
    <div class="dark:bg-gray-700 min-h-screen">
        <NavBar />
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