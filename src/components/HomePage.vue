<template>
  <div class="dark:bg-gray-700 min-h-screen overflow-x-hidden">
    <!-- 导航栏 -->
    <NavBar />
    <!-- 欢迎信息 -->
    <div class="mt-10 ml-10 select-none dark:text-white">
      <div class="text-6xl mb-1">
        欢迎回来，{{ this.user.UserName }}
      </div>
      <div class="text-xl mb-1">
        你现在的排名是：{{ this.user.UserRank }}
      </div>
      <div class="text-xl mb-1">
        {{ this.displayedMessages }}
      </div>
    </div>
    <!-- 排行榜 -->
    <div class="mb-10 w-screen max-w-[screen]">
      <div class="mt-20 flex mx-10">
        <div class="m-auto max-w-full max-h-[90vh] overflow-scroll border-2 dark:border-zinc-700">
          <RankTable />
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
            user: {
                UserName: "Huaji233",
                UserRank: 5,
            },
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
        randomEncourageMsg() {
            let rank = this.user.UserRank;
            for (const msg of this.encourageMsg) {
                if (msg.rankRange.includes(rank)) {
                    const randomIndex = Math.floor(Math.random() * msg.messages.length);
                    this.displayedMessages = msg.messages[randomIndex];
                    return;
                }
            }
            this.displayedMessages = "继续努力，你一定能取得更好的成绩！";
        },
    },
    mounted() {
        this.randomEncourageMsg();
    },
};
</script>