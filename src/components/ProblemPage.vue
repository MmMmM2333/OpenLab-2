<template>
    <div class="dark:bg-gray-700 min-h-screen overflow-x-hidden relative">
        <!-- 导航栏 -->
        <NavBar />
        <div class="mx-10 text-6xl my-10 dark:text-white">题目列表</div>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-flow-row gap-6 mx-10">
            <div v-for="(item, index) in result" :key="index">
                <div
                    @click="openModel(index)"
                    :class="[item.isCompleted ? 'bg-green-600' : 'bg-blue-500']"
                    class="min-w-[200px] h-40 rounded-xl p-2 text-white shadow-2xl hover:opacity-75 cursor-pointer duration-500 select-none"
                >
                    <div class="text-center border-b-2 py-1 text-2xl">{{ item.title }}</div>
                    <div class="text-right mt-2">本题有{{ item.totalAttempts }}次尝试</div>
                    <div class="text-right mt-1">有{{ item.totalCompletedPeople }}人挑战成功</div>
                    <div v-if="item.userScore != -1" class="text-4xl font-bold pl-2">
                        {{ item.userScore }} / {{ item.score }}分
                    </div>
                    <div v-else class="text-4xl font-bold pl-2">{{ item.score }}分</div>
                </div>
            </div>
        </div>

        <div v-if="showProblemModel" @click="closeModel" class="fixed top-0 z-10 bg-black/50 w-screen h-screen">
            <div
                @click.stop
                class="absolute w-[500px] min-h-[300px] h-full max-h-[70vh] top-20 left-1/2 -translate-x-1/2 bg-stone-100 dark:bg-gray-700 dark:text-white p-4 rounded-2xl shadow-2xl"
            >
                <div class="flex flex-col h-full">
                    <div class="text-center text-4xl">{{ result[showProblemIndex].title }}</div>
                    <div class="text-center text-2xl pb-1 my-2 w-full border-b-2">
                        {{ result[showProblemIndex].score }}分
                    </div>
                    <div class="text-3xl mb-2">题目描述</div>
                    <div class="flex-1 overflow-auto min-h-0">
                        {{ result[showProblemIndex].description }}
                    </div>
                    <div class="flex h-10 mt-4">
                        <input
                            v-model="score"
                            type="number"
                            min="0"
                            :max="result[showProblemIndex].score"
                            placeholder="分数"
                            class="flex-1 px-2 dark:bg-gray-800 rounded-lg"
                        />
                        <div
                            @click="submitScore(result[showProblemIndex].id)"
                            class="w-20 leading-10 rounded-lg text-center bg-blue-500 ml-4 text-white cursor-pointer select-none hover:bg-blue-500/70 duration-500"
                        >
                            提交
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
    name: "ProblemPage",
    components: { NavBar },
    data() {
        return {
            showProblemModel: false,
            showProblemIndex: 0,
            score: 0,
            result: {},
        };
    },
    methods: {
        openModel(ProblemIndex) {
            (this.showProblemModel = true), (this.showProblemIndex = ProblemIndex);
            this.score = 0;
        },
        closeModel() {
            this.showProblemModel = false;
            console.log("click");
        },
        async getProblems() {
            let result = await this.$http.get("/getProblems");
            let code = result.data.code;
            let msg = result.data.msg;
            if (code != 200) {
                this.$toast.error(msg);
            } else {
                this.result = result.data.data.result;
                console.log(this.result);
            }
        },
        async submitScore(problemID) {
            if (this.score < 0) {
                this.$toast.error("分数不能为负数");
                return false;
            }
            if (this.score > this.result[this.showProblemIndex].score) {
                this.$toast.error("分数不能超过题目分数");
                return false;
            }

            let result = await this.$http.get("/submitScore", {
                params: {
                    problemID: problemID,
                    score: this.score,
                },
            });
            let code = result.data.code;
            let msg = result.data.msg;
            if (code != 200) {
                this.$toast.error(msg);
            } else {
                this.result[this.showProblemIndex].totalAttempts += 1;
                if (Number(this.result[this.showProblemIndex].userScore) < this.score) {
                    this.result[this.showProblemIndex].userScore = this.score;
                }
                if (
                    this.result[this.showProblemIndex].score == this.score &&
                    this.result[this.showProblemIndex].isCompleted == false
                ) {
                    this.result[this.showProblemIndex].isCompleted = true;
                    this.result[this.showProblemIndex].totalCompletedPeople += 1;
                }
                this.$toast.success(msg);
            }
        },
    },
    mounted() {
        this.getProblems();
    },
};
</script>