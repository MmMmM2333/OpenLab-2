<template>
    <div class="dark:text-white dark:border-gray-800 relative">
        <NavBar />
        <div class="m-10">
            <div class="text-6xl mb-4">管理页面</div>
            <div class="text-3xl mb-2">添加题目</div>
            <div class="min-w-[400px] max-w-[800px] border-2 shadow-2xl rounded-2xl p-4">
                <AddProblem />
            </div>
            <div class="text-3xl my-8">编辑题目</div>
            <div class="w-full min-h-[160px] max-h-[80vh] overflow-y-scroll">
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
            </div>

            <div class="text-3xl my-8">管理用户</div>
            <div>
                <div class="w-full min-h-[160px] max-h-[80vh] overflow-y-scroll">
                    <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-flow-row gap-6 mx-10">
                        <div
                            class="bg-blue-200 h-28 p-2 flex rounded-xl hover:opacity-70 cursor-pointer shadow-xl duration-500"
                        >
                            <img src="../assets/avatar.jpeg" class="h-full rounded-full overflow-hidden mr-2" />
                            <div class="px-2">
                                <div class="text-2xl mt-1">用户名</div>
                                <div class="text-xl">202200201111</div>
                                <div class="text-xl">普通用户</div>
                            </div>
                        </div>
                        <div
                            class="bg-blue-200 h-28 p-2 flex rounded-xl hover:opacity-70 cursor-pointer shadow-xl duration-500"
                        >
                            <img src="../assets/avatar.jpeg" class="h-full rounded-full overflow-hidden mr-2" />
                            <div class="px-2">
                                <div class="text-2xl mt-1">用户名</div>
                                <div class="text-xl">202200201111</div>
                                <div class="text-xl">普通用户</div>
                            </div>
                        </div>
                        <div
                            class="bg-blue-200 h-28 p-2 flex rounded-xl hover:opacity-70 cursor-pointer shadow-xl duration-500"
                        >
                            <img src="../assets/avatar.jpeg" class="h-full rounded-full overflow-hidden mr-2" />
                            <div class="px-2">
                                <div class="text-2xl mt-1">用户名</div>
                                <div class="text-xl">202200201111</div>
                                <div class="text-xl">普通用户</div>
                            </div>
                        </div>
                        <div
                            class="bg-blue-200 h-28 p-2 flex rounded-xl hover:opacity-70 cursor-pointer shadow-xl duration-500"
                        >
                            <img src="../assets/avatar.jpeg" class="h-full rounded-full overflow-hidden mr-2" />
                            <div class="px-2">
                                <div class="text-2xl mt-1">用户名</div>
                                <div class="text-xl">202200201111</div>
                                <div class="text-xl">普通用户</div>
                            </div>
                        </div>
                        <div
                            class="bg-blue-200 h-28 p-2 flex rounded-xl hover:opacity-70 cursor-pointer shadow-xl duration-500"
                        >
                            <img src="../assets/avatar.jpeg" class="h-full rounded-full overflow-hidden mr-2" />
                            <div class="px-2">
                                <div class="text-2xl mt-1">用户名</div>
                                <div class="text-xl">202200201111</div>
                                <div class="text-xl">普通用户</div>
                            </div>
                        </div>
                        <div
                            class="bg-blue-200 h-28 p-2 flex rounded-xl hover:opacity-70 cursor-pointer shadow-xl duration-500"
                        >
                            <img src="../assets/avatar.jpeg" class="h-full rounded-full overflow-hidden mr-2" />
                            <div class="px-2">
                                <div class="text-2xl mt-1">用户名</div>
                                <div class="text-xl">202200201111</div>
                                <div class="text-xl">普通用户</div>
                            </div>
                        </div>
                        <div
                            class="bg-blue-200 h-28 p-2 flex rounded-xl hover:opacity-70 cursor-pointer shadow-xl duration-500"
                        >
                            <img src="../assets/avatar.jpeg" class="h-full rounded-full overflow-hidden mr-2" />
                            <div class="px-2">
                                <div class="text-2xl mt-1">用户名</div>
                                <div class="text-xl">202200201111</div>
                                <div class="text-xl">普通用户</div>
                            </div>
                        </div>
                        <div
                            class="bg-blue-200 h-28 p-2 flex rounded-xl hover:opacity-70 cursor-pointer shadow-xl duration-500"
                        >
                            <img src="../assets/avatar.jpeg" class="h-full rounded-full overflow-hidden mr-2" />
                            <div class="px-2">
                                <div class="text-2xl mt-1">用户名</div>
                                <div class="text-xl">202200201111</div>
                                <div class="text-xl">普通用户</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 模态框 -->
        <div v-if="showEditProblemModel" @click="closeModel" class="fixed top-0 z-10 bg-black/50 w-screen h-screen">
            <div
                @click.stop
                class="absolute w-[800px] min-h-[300px] max-h-[70vh] top-20 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-700 dark:text-white p-4 rounded-2xl shadow-2xl"
            >
                <EditProblem />
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import AddProblem from "./AddProblem.vue";
import EditProblem from "./EditProblem.vue";
export default {
    name: "ManagePage",
    components: { NavBar, AddProblem, EditProblem },
    data() {
        return {
            showEditProblemModel: false,
            EditProblemID: 0,
            showEditUserModel: true,
            EditUserID: 0,
        };
    },
    methods: {
        openModel(ProblemID) {
            (this.showEditProblemModel = true), (this.showProblemID = ProblemID);
        },
        closeModel() {
            this.showEditProblemModel = false;
            console.log("click");
        },
    },
};
</script>