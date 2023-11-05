<template>
    <div>
        <div>
            <div class="mb-2 h-6 leading-6">题目ID：{{ problem.id }}</div>
            <div class="mb-2 h-6 leading-6">创建时间：{{ createTime }}</div>
            <div class="flex mb-2 h-10">
                <div class="leading-10">题目简称：</div>
                <input
                    v-model="problem.miniTitle"
                    type="text"
                    placeholder="用于显示在排行榜上"
                    class="flex-1 bg-gray-100 rounded-lg px-2"
                />
            </div>
            <div class="flex mb-2 h-10">
                <div class="leading-10">完整题目：</div>
                <input
                    v-model="problem.title"
                    type="text"
                    placeholder="用于显示在题目页上"
                    class="flex-1 bg-gray-100 rounded-lg px-2"
                />
            </div>
            <div class="flex mb-2">
                <div>题目描述：</div>
                <textarea
                    v-model="problem.description"
                    placeholder="选填"
                    class="border-2 bg-gray-100 rounded-lg flex-1 max-h-40 min-h-[80px] p-2"
                ></textarea>
            </div>
            <div class="flex h-10 mb-2">
                <div class="leading-10">题目总分：</div>
                <input
                    v-model="problem.score"
                    type="number"
                    placeholder="用于显示在排行榜上"
                    class="flex-1 bg-gray-100 rounded-lg px-2"
                />
            </div>
            <div class="flex h-10">
                <div class="leading-10 pr-2">是否在排行榜中显示：</div>
                <div
                    @click="switchShowInRank"
                    v-if="problem.showInRank"
                    class="w-24 h-10 leading-10 bg-green-500 rounded-xl text-center hover:cursor-pointer text-white hover:bg-green-500/90 hover:scale-110 select-none ease-in duration-300"
                >
                    显示
                </div>
                <div
                    @click="switchShowInRank"
                    v-if="problem.showInRank == false"
                    class="w-24 h-10 leading-10 bg-red-500 rounded-xl text-center hover:cursor-pointer text-white hover:bg-red-500/90 hover:scale-110 select-none ease-in duration-300"
                >
                    不显示
                </div>
            </div>
            <div class="flex flex-row-reverse ml-auto gap-2">
                <div
                    @click="apply"
                    class="w-32 h-10 leading-10 mt-4 rounded-xl text-center text-white bg-blue-500/100 hover:cursor-pointer hover:bg-blue-500/90 hover:scale-110 select-none ease-in duration-300"
                >
                    应用
                </div>
                <div
                    @click="removeProblem"
                    class="w-32 h-10 leading-10 mt-4 rounded-xl text-center text-white bg-red-500/100 hover:cursor-pointer hover:bg-red-500/90 hover:scale-110 select-none ease-in duration-300"
                >
                    删除题目
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditProblem",
    props: {
        editProblemID: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            problem: {},
            createTime: "",
        };
    },
    methods: {
        switchShowInRank() {
            this.problem.showInRank = !this.problem.showInRank;
        },
        async getProblem() {
            let result = await this.$http.get("/getProblem", { params: { id: this.editProblemID } });
            let code = result.data.code;
            let msg = result.data.msg;
            if (code != 200) {
                this.$toast.error(msg);
            } else {
                console.log(result);
                this.problem = result.data.data.result;
                let date = new Date(this.problem.createTime).toJSON();
                this.createTime = await new Date(+new Date(date) + 8 * 3600 * 1000)
                    .toISOString()
                    .replace(/T/g, " ")
                    .replace(/\.[\d]{3}Z/, "");
            }
        },
        async removeProblem() {
            let result = await this.$http.get("/removeProblem", { params: { id: this.editProblemID } });
            let code = result.data.code;
            let msg = result.data.msg;
            if (code != 200) {
                this.$toast.error(msg);
            } else {
                this.$toast.success("删除成功");
                this.closeModel();
            }
        },
        async apply() {
            let result = await this.$http.post("/editProblem", this.problem, { emulateJSON: true });
            let code = result.data.code;
            let msg = result.data.msg;
            if (code != 200) {
                this.$toast.error(msg);
            } else {
                this.$toast.success("修改成功");
                this.closeModel();
            }
        },
        closeModel() {
            this.$emit("close");
        },
    },
    mounted() {
        this.getProblem();
    },
};
</script>