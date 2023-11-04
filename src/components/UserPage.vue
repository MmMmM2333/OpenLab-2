<template>
    <div class="dark:bg-gray-700 min-h-screen">
        <NavBar />
        <div
            v-if="loaded"
            class="m-10 w-[400px] border-2 shadow-2xl rounded-xl p-4 dark:text-white dark:border-gray-800"
        >
            <div>ID：{{ user.id }}</div>
            <div>用户名：{{ user.username }}</div>
            <div>学号：{{ user.studentID }}</div>
            <div>注册时间：{{ user.createTime }}</div>
            <div>身份：{{ user.role }}</div>
        </div>
    </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
    name: "UserPage",
    components: { NavBar },
    data() {
        return {
            user: {},
            loaded: false,
        };
    },
    methods: {
        async getUserInfo() {
            let result = await this.$http.get("/getUserInfo", {
                params: {
                    userID: this.$store.state.userID,
                },
            });
            let code = result.data.code;
            let msg = result.data.msg;
            if (code != 200) {
                this.$toast.error(msg);
            } else {
                this.user = result.data.data;

                let date = new Date(this.user.createTime).toJSON();
                this.user.createTime = await new Date(+new Date(date) + 8 * 3600 * 1000)
                    .toISOString()
                    .replace(/T/g, " ")
                    .replace(/\.[\d]{3}Z/, "");
                this.loaded = true;
            }
        },
    },
    mounted() {
        this.getUserInfo();
    },
};
</script>