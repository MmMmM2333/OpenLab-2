<template>
    <div>
        <div>
            <div class="flex mb-2 h-10">
                <div class="leading-10">题目简称：</div>
                <input
                    v-model="miniTitle"
                    type="text"
                    placeholder="用于显示在排行榜上"
                    class="flex-1 bg-gray-100 rounded-lg px-2"
                />
            </div>
            <div class="flex mb-2 h-10">
                <div class="leading-10">完整题目：</div>
                <input
                    v-model="title"
                    type="text"
                    placeholder="用于显示在题目页上"
                    class="flex-1 bg-gray-100 rounded-lg px-2"
                />
            </div>
            <div class="flex mb-2">
                <div>题目描述：</div>
                <textarea
                    v-model="description"
                    placeholder="选填"
                    class="border-2 bg-gray-100 rounded-lg flex-1 max-h-40 min-h-[80px] p-2"
                ></textarea>
            </div>
            <div class="flex h-10 mb-2">
                <div class="leading-10">题目总分：</div>
                <input
                    v-model="score"
                    type="number"
                    min="1"
                    placeholder="默认为10分"
                    class="flex-1 bg-gray-100 rounded-lg px-2"
                />
            </div>
            <div class="flex h-10">
                <div class="leading-10 pr-2">是否在排行榜中显示：</div>
                <div
                    @click="switchShowInRank"
                    v-if="showInRank"
                    class="w-24 h-10 leading-10 bg-green-500 rounded-xl text-center hover:cursor-pointer text-white hover:bg-green-500/90 hover:scale-110 select-none ease-in duration-300"
                >
                    显示
                </div>
                <div
                    @click="switchShowInRank"
                    v-if="showInRank == false"
                    class="w-24 h-10 leading-10 bg-red-500 rounded-xl text-center hover:cursor-pointer text-white hover:bg-red-500/90 hover:scale-110 select-none ease-in duration-300"
                >
                    不显示
                </div>
            </div>
            <div
                @click="addProblem"
                class="w-24 h-10 leading-10 mt-4 ml-auto rounded-xl text-center text-white bg-blue-500/100 hover:cursor-pointer hover:bg-blue-500/90 hover:scale-110 select-none ease-in duration-300"
            >
                添加
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddProblem",
    data() {
        return {
            title: "",
            miniTitle: "",
            description: "",
            score: 10,
            showInRank: true,
        };
    },
    methods: {
        switchShowInRank() {
            this.showInRank = !this.showInRank;
        },
        check() {
            if (this.miniTitle == "") {
                this.$toast.error("请输入题目简称");
                return false;
            }

            if (this.title == "") {
                this.$toast.error("请输入完整题目");
                return false;
            }

            if (this.score <= 0) {
                this.$toast.error("题目分数必须是正数");
                return false;
            }
            return true;
        },
        async addProblem() {
            if (!this.check()) {
                return;
            }

            let result = await this.$http.post("/addProblem", {
                miniTitle: this.miniTitle,
                title: this.title,
                score: this.score,
                description: this.description,
                showInRank: this.showInRank,
            });
            let code = result.data.code;
            let msg = result.data.msg;
            if (code != 200) {
                this.$toast.error(msg);
            } else {
                this.$toast.success(msg);
            }
        },
    },
};
</script>