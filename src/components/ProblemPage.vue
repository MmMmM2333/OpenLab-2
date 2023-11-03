<template>
    <div class="dark:bg-gray-700 min-h-screen overflow-x-hidden relative">
        <!-- 导航栏 -->
        <NavBar />
        <div class="mx-10 text-6xl my-10 dark:text-white">题目列表</div>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-flow-row gap-6 mx-10">
            <div
                class="bg-green-600 min-w-[200px] h-40 rounded-xl p-2 text-white shadow-2xl hover:opacity-75 cursor-pointer duration-500 select-none"
            >
                <div class="text-center border-b-2 py-1 text-2xl">Level0</div>
                <div class="text-right mt-2">本题有1000次尝试</div>
                <div class="text-right mt-1">有39人挑战成功</div>
                <div class="text-4xl font-bold pl-2">10 / 10分</div>
            </div>
            <div
                class="bg-blue-500 min-w-[200px] h-40 rounded-xl p-2 text-white shadow-2xl hover:opacity-75 cursor-pointer duration-500 select-none"
            >
                <div class="text-center border-b-2 py-1 text-2xl">Level0</div>
                <div class="text-right mt-2">本题有1000次尝试</div>
                <div class="text-right mt-1">有39人挑战成功</div>
                <div class="text-4xl font-bold pl-2">8 / 10分</div>
            </div>
            <div
                class="bg-blue-500 min-w-[200px] h-40 rounded-xl p-2 text-white shadow-2xl hover:opacity-75 cursor-pointer duration-500 select-none"
            >
                <div class="text-center border-b-2 py-1 text-2xl">Level0</div>
                <div class="text-right mt-2">本题有1000次尝试</div>
                <div class="text-right mt-1">有39人挑战成功</div>
                <div class="text-4xl">10分</div>
            </div>
            <div
                class="bg-blue-500 min-w-[200px] h-40 rounded-xl p-2 text-white shadow-2xl hover:opacity-75 cursor-pointer duration-500 select-none"
            >
                <div class="text-center border-b-2 py-1 text-2xl">Level0</div>
                <div class="text-right mt-2">本题有1000次尝试</div>
                <div class="text-right mt-1">有39人挑战成功</div>
                <div class="text-4xl">10分</div>
            </div>
            <div
                class="bg-blue-500 min-w-[200px] h-40 rounded-xl p-2 text-white shadow-2xl hover:opacity-75 cursor-pointer duration-500 select-none"
            >
                <div class="text-center border-b-2 py-1 text-2xl">Level0</div>
                <div class="text-right mt-2">本题有1000次尝试</div>
                <div class="text-right mt-1">有39人挑战成功</div>
                <div class="text-4xl">10分</div>
            </div>
            <div
                class="bg-blue-500 min-w-[200px] h-40 rounded-xl p-2 text-white shadow-2xl hover:opacity-75 cursor-pointer duration-500 select-none"
            >
                <div class="text-center border-b-2 py-1 text-2xl">Level0</div>
                <div class="text-right mt-2">本题有1000次尝试</div>
                <div class="text-right mt-1">有39人挑战成功</div>
                <div class="text-4xl">10分</div>
            </div>
            <div
                class="bg-blue-500 min-w-[200px] h-40 rounded-xl p-2 text-white shadow-2xl hover:opacity-75 cursor-pointer duration-500 select-none"
            >
                <div class="text-center border-b-2 py-1 text-2xl">Level0</div>
                <div class="text-right mt-2">本题有1000次尝试</div>
                <div class="text-right mt-1">有39人挑战成功</div>
                <div class="text-4xl">10分</div>
            </div>
            <div
                class="bg-blue-500 min-w-[200px] h-40 rounded-xl p-2 text-white shadow-2xl hover:opacity-75 cursor-pointer duration-500 select-none"
            >
                <div class="text-center border-b-2 py-1 text-2xl">Level0</div>
                <div class="text-right mt-2">本题有1000次尝试</div>
                <div class="text-right mt-1">有39人挑战成功</div>
                <div class="text-4xl">10分</div>
            </div>
            <div
                class="bg-blue-500 min-w-[200px] h-40 rounded-xl p-2 text-white shadow-2xl hover:opacity-75 cursor-pointer duration-500 select-none"
            >
                <div class="text-center border-b-2 py-1 text-2xl">Level0</div>
                <div class="text-right mt-2">本题有1000次尝试</div>
                <div class="text-right mt-1">有39人挑战成功</div>
                <div class="text-4xl">10分</div>
            </div>
        </div>
        <div v-if="showProblemModel" @click="closeModel" class="absolute top-0 z-10 bg-black/50 w-screen h-screen">
            <div
                @click.stop
                class="absolute w-[500px] min-h-[300px] h-full max-h-[70vh] top-20 left-1/2 -translate-x-1/2 bg-stone-100 dark:bg-gray-700 dark:text-white p-4 rounded-2xl shadow-2xl"
            >
                <div class="flex flex-col h-full">
                    <div class="text-center text-4xl">Level0-初探网页</div>
                    <div class="text-center text-2xl pb-1 my-2 w-full border-b-2">10分</div>
                    <div class="text-3xl mb-2">题目描述</div>
                    <div class="flex-1 overflow-auto min-h-0"></div>
                    <div class="flex h-10 mt-4">
                        <input type="text" placeholder="分数" class="flex-1 px-2 dark:bg-gray-800 rounded-lg" />
                        <div class="w-20 leading-10 rounded-lg text-center bg-blue-500 ml-4 text-white">提交</div>
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
            showProblemModel: true,
            showProblemID: 0,
        };
    },
    methods: {
        openModel(ProblemID) {
            (this.showProblemModel = true), (this.showProblemID = ProblemID);
        },
        closeModel() {
            this.showProblemModel = false;
            console.log("click");
        },
    },
};
</script>