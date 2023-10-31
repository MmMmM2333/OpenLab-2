<template>
    <div>
        <NavBar />
        <div>Home</div>
        <RankTable />
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