<template>
    <div class="shadow-2xl">
        <div class="w-full h-16 flex px-8 select-none dark:bg-gray-800 dark:text-white">
            <div class="flex-1 flex">
                <div
                    @click="GoToHomePage"
                    class="w-24 h-full text-center flex justify-center flex-col cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    排行榜
                </div>
                <div
                    @click="GoToProblemPage"
                    class="w-24 h-full text-center flex justify-center flex-col cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    题目
                </div>
                <div
                    v-if="this.$store.state.roleID == 1"
                    class="w-24 h-full text-center flex justify-center flex-col cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    管理
                </div>
            </div>
            <div class="flex">
                <div
                    v-if="this.$store.state.isLogin == true"
                    class="w-24 h-full text-center flex justify-center flex-col cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    用户信息
                </div>
                <div
                    v-if="this.$store.state.isLogin == true"
                    class="w-24 h-full text-center flex relative justify-center flex-col cursor-pointer group/more hover:bg-gray-200 dark:hover:bg-gray-700 group"
                >
                    {{ this.$store.state.username }}
                    <div
                        @click="logout"
                        class="invisible absolute top-16 w-24 h-10 leading-10 bg-white shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 group-hover/more:visible"
                    >
                        注销
                    </div>
                </div>
                <div
                    v-if="this.$store.state.isLogin == false"
                    @click="GoToLoginPage"
                    class="w-24 h-full text-center flex justify-center flex-col cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    登录
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {};
    },
    methods: {
        GoToHomePage() {
            this.$router.push({ name: "Home" });
        },
        GoToLoginPage() {
            this.$router.push({ name: "Login" });
        },
        GoToProblemPage() {
            this.$router.push({ name: "Problem" });
        },
        logout() {
            this.$store.commit("removeToken");
            this.$toast.success("注销成功", {
                timeout: 1500,
            });
            console.log("注销");
        },
    },
};
</script>