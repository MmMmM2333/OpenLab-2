<template>
    <div>
        <NavBar />
        <div>
            <div>ID：</div>
            <div>用户名：</div>
            <div>学号：</div>
            <div>注册时间：</div>
            <div>身份：</div>
        </div>
    </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
    name: "UserPage",
    components: { NavBar },
};
</script>