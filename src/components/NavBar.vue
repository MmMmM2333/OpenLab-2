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
                    class="w-24 h-full text-center flex justify-center flex-col cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    题目
                </div>
            </div>
            <div class="flex">
                <div
                    class="w-24 h-full text-center flex justify-center flex-col cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    用户信息
                </div>
                <div
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
    methods: {
        GoToHomePage() {
            this.$router.push({ name: "Home" });
        },
        GoToLoginPage() {
            this.$router.push({ name: "Login" });
        },
    },
};
</script>