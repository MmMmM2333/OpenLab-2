<template>
    <div class="dark:bg-gray-700 min-h-screen overflow-x-hidden">
        <!-- 导航栏 -->
        <NavBar />
        <!-- 欢迎信息 -->

        <!-- 未登录用户 -->
        <div v-if="this.$store.state.isLogin == false" class="mt-10 ml-10 select-none dark:text-white">
            <div class="text-6xl mb-2">欢迎!</div>
            <div class="text-xl mb-2">如果想做题或查看排行榜，请登录</div>
            <div
                @click="GoToLoginPage"
                class="w-24 h-10 leading-10 rounded-xl text-center text-white bg-blue-500/100 hover:cursor-pointer hover:bg-blue-500/90 hover:scale-110 select-none ease-in duration-300"
            >
                去登录
            </div>
        </div>
        <!-- 已登录的普通用户 -->
        <div
            v-if="this.$store.state.isLogin == true && this.$store.state.roleID == 0"
            class="mt-10 ml-10 select-none dark:text-white"
        >
            <div class="text-6xl mb-1">欢迎回来，{{ this.$store.state.username }}</div>
            <div v-if="userRank > 0">
                <div class="text-xl mb-1">你现在的排名是：{{ this.userRank }}</div>
                <div class="text-xl mb-1">
                    {{ this.displayedMessages }}
                </div>
                <div
                    @click="refreshRank"
                    class="w-32 h-10 leading-10 rounded-xl text-center text-white bg-blue-500/100 hover:cursor-pointer hover:bg-blue-500/90 hover:scale-110 select-none ease-in duration-300"
                >
                    刷新排行榜
                </div>
            </div>
            <div v-else-if="userRank == 0">
                <div class="text-xl mb-1">看起来你还没有参加比赛,去试试做一道题吧</div>
            </div>
        </div>

        <!-- 已登录的管理员 -->
        <div
            v-if="this.$store.state.isLogin == true && this.$store.state.roleID == 1"
            class="mt-10 ml-10 select-none dark:text-white"
        >
            <div class="text-6xl mb-1">欢迎回来，{{ this.$store.state.username }}</div>
        </div>
        <!-- 排行榜 -->
        <div class="mb-10 w-screen max-w-[screen]">
            <div class="mt-20 flex mx-10 relative">
                <div
                    v-if="this.$store.state.isLogin == false"
                    @click="GoToLoginPage"
                    class="w-32 h-10 leading-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl text-center text-white bg-blue-500/100 hover:cursor-pointer hover:bg-blue-500/90 hover:scale-110 select-none ease-in duration-300 z-10"
                >
                    登录以查看
                </div>
                <div class="m-auto max-w-full max-h-[90vh] overflow-scroll border-2 dark:border-zinc-700">
                    <RankTable
                        ref="RankTable"
                        @rank="getRank"
                        :class="[this.$store.state.isLogin == false ? 'blur select-none' : '']"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import RankTable from "./RankTable.vue";
export default {
    name: "HomePage",
    components: { RankTable, NavBar },
    data() {
        return {
            rankData: [],
            userRank: -1,
            encourageMsg: [
                { rankRange: [1], messages: ["牛逼牛逼，加油保持！", "大佬牛逼！"] },
                {
                    rankRange: [2, 3, 4, 5],
                    messages: ["加油，还能往前！", "坚持下去，你很接近了！", "这不继续凹到第一 >_<"],
                },
                {
                    rankRange: [6, 7, 8, 9, 10],
                    messages: ["你的表现还不错，继续加油！", "这不继续凹一手分"],
                },
            ],
            displayedMessages: "",
        };
    },
    methods: {
        GoToLoginPage() {
            this.$router.push({ name: "Login" });
        },
        randomEncourageMsg() {
            let rank = this.userRank;
            if (rank == -1) return;
            for (const msg of this.encourageMsg) {
                if (msg.rankRange.includes(rank)) {
                    const randomIndex = Math.floor(Math.random() * msg.messages.length);
                    this.displayedMessages = msg.messages[randomIndex];
                    return;
                }
            }
            this.displayedMessages = "继续努力，你一定能取得更好的成绩！";
        },
        async refreshRank() {
            let resultCode = await this.$refs.RankTable.getRank();
            // console.log(this.$refs.RankTable);
            if (resultCode == 200) {
                this.$toast.success("刷新排行榜成功");
            }
        },
        async getRank(rank) {
            this.userRank = rank;
            this.randomEncourageMsg();
            // console.log(rank);
        },
    },
    mounted() {},
};
</script>