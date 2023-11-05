<template>
    <div class="inline-flex dark:text-white dark:border-gray-800">
        <div class="">
            <div v-if="showFakeData == false && showRank">
                <div class="inline-flex gap-4 items-center sticky top-0 bg-zinc-200 select-none dark:bg-zinc-700">
                    <div class="w-16 text-center">排名</div>
                    <div class="w-40 text-center">参赛人</div>
                    <div class="w-16 text-center">分数</div>
                    <div class="w-20 text-center" v-for="(item, index) in problems" :key="index">
                        <div class="font-bold">{{ item.miniTitle }}</div>
                        <div>{{ item.totalCompleted }}/{{ item.totalAttempts }}</div>
                    </div>
                </div>
                <ul class="">
                    <li v-for="(user, index) in users" :key="index">
                        <div class="inline-flex gap-4 border-b-2 bg-stone-50 dark:bg-gray-600 dark:border-gray-800">
                            <div class="w-16 h-12 text-center flex flex-col justify-center">{{ user.rank }}</div>
                            <div class="w-40 h-12 text-right pr-4">
                                <div class="font-bold">{{ user.studentID }}</div>
                                <div
                                    :class="[user.username == $store.state.username ? 'text-blue-500' : '']"
                                    class="text-ellipsis whitespace-nowrap overflow-hidden"
                                >
                                    {{ user.username }}
                                </div>
                            </div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">{{ user.totalScore }}</div>
                            <div
                                class="w-20 h-12 text-center flex flex-col justify-center"
                                v-for="(score, index1) in user.rankScore"
                                :key="index1"
                            >
                                <div v-if="score != -1">
                                    <div v-if="score == problems[index1].score" class="text-green-500">{{ score }}</div>
                                    <div v-else :class="[score == 0 ? 'text-red-500' : 'text-yellow-500']">
                                        {{ score }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 假数据 -->
            <div v-else>
                <div class="inline-flex gap-4 items-center sticky top-0 bg-zinc-200 select-none dark:bg-zinc-700">
                    <div class="w-16 text-center">排名</div>
                    <div class="w-32 text-center">参赛人</div>
                    <div class="w-16 text-center">分数</div>
                    <div class="w-16 text-center">
                        <div class="font-bold">A</div>
                        <div>333/666</div>
                    </div>
                    <div class="w-16 text-center">
                        <div class="font-bold">B</div>
                        <div>333/666</div>
                    </div>
                    <div class="w-16 text-center">
                        <div class="font-bold">C</div>
                        <div>333/666</div>
                    </div>
                    <div class="w-16 text-center">
                        <div class="font-bold">D</div>
                        <div>333/666</div>
                    </div>
                </div>
                <ul class="">
                    <li>
                        <div class="inline-flex gap-4 border-b-2 bg-stone-50 dark:bg-gray-600 dark:border-gray-800">
                            <div class="w-16 h-12 text-center flex flex-col justify-center">1</div>
                            <div class="w-32 h-12 text-right pr-2">
                                <div class="font-bold">233333</div>
                                <div>这里</div>
                            </div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">400</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                        </div>
                    </li>
                    <li>
                        <div class="inline-flex gap-4 border-b-2 bg-gray-50 dark:bg-gray-600 dark:border-gray-800">
                            <div class="w-16 h-12 text-center flex flex-col justify-center">1</div>
                            <div class="w-32 h-12 text-right pr-2">
                                <div class="font-bold">233333</div>
                                <div>全是</div>
                            </div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">400</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                        </div>
                    </li>
                    <li>
                        <div class="inline-flex gap-4 border-b-2 bg-gray-50 dark:bg-gray-600 dark:border-gray-800">
                            <div class="w-16 h-12 text-center flex flex-col justify-center">1</div>
                            <div class="w-32 h-12 text-right pr-2">
                                <div class="font-bold">233333</div>
                                <div>假数据</div>
                            </div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">400</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                        </div>
                    </li>
                    <li>
                        <div class="inline-flex gap-4 border-b-2 bg-gray-50 dark:bg-gray-600 dark:border-gray-800">
                            <div class="w-16 h-12 text-center flex flex-col justify-center">1</div>
                            <div class="w-32 h-12 text-right pr-2">
                                <div class="font-bold">233333</div>
                                <div>登录</div>
                            </div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">400</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                        </div>
                    </li>
                    <li>
                        <div class="inline-flex gap-4 border-b-2 bg-stone-50 dark:bg-gray-600 dark:border-gray-800">
                            <div class="w-16 h-12 text-center flex flex-col justify-center">1</div>
                            <div class="w-32 h-12 text-right pr-2">
                                <div class="font-bold">233333</div>
                                <div>查看排行榜</div>
                            </div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">400</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                            <div class="w-16 h-12 text-center flex flex-col justify-center">100</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RankTable",
    data() {
        return {
            showRank: false,
            showFakeData: true,
            problems: {},
            users: {},
        };
    },
    methods: {
        async getRank() {
            let result = await this.$http.get("/rank");

            let code = result.data.code;
            let msg = result.data.msg;
            if (code != 200) {
                this.$toast.error(msg);
                return code;
            } else {
                this.problems = result.data.data.problems;
                this.users = result.data.data.users;
                this.showRank = true;
                let index = this.users.findIndex((user) => user.id == this.$store.state.userID);

                if (index != -1) {
                    let rank = this.users[index].rank;
                    this.$emit("rank", rank);
                } else {
                    this.$emit("rank", 0);
                }
                return code;
            }
        },
    },
    mounted() {
        if (this.$store.state.isLogin) {
            this.getRank();
            this.showFakeData = false;
        } else {
            this.showRank = true;
        }
    },
};
</script>