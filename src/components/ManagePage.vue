<template>
    <div class="dark:text-white dark:bg-gray-700 relative">
        <NavBar />
        <div class="p-10">
            <div class="text-6xl mb-4">管理页面</div>
            <div class="text-3xl mb-2">添加题目</div>
            <div class="min-w-[400px] max-w-[800px] border-2 shadow-2xl rounded-2xl p-4 dark:border-gray-800">
                <AddProblem @refreshProblems="getAllProblems" />
            </div>
            <div class="text-3xl my-8">编辑题目</div>
            <div class="w-full min-h-[160px] max-h-[80vh] overflow-y-scroll">
                <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-flow-row gap-6 mx-10">
                    <div v-for="(item, index) in problems" :key="index">
                        <div
                            @click="openEditProblemModel(item.id)"
                            class="min-w-[200px] bg-blue-500 h-40 rounded-xl p-2 text-white shadow-2xl hover:opacity-75 cursor-pointer duration-500 select-none"
                        >
                            <div class="text-center border-b-2 py-1 text-2xl">{{ item.title }}</div>
                            <div class="text-right mt-2">本题有{{ item.totalAttempts }}次尝试</div>
                            <div class="text-right mt-1">有{{ item.totalCompletedPeople }}人挑战成功</div>
                            <div class="text-4xl font-bold pl-2">{{ item.score }}分</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-3xl my-8">管理用户</div>
            <div>
                <div class="w-full min-h-[160px] max-h-[80vh] overflow-y-scroll">
                    <div class="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] grid-flow-row gap-6 mx-10">
                        <div
                            class="bg-blue-500 text-white h-28 p-2 flex rounded-xl hover:opacity-90 cursor-pointer shadow-xl duration-500 relative group/item"
                            v-for="(user, index) in users"
                            :key="index"
                        >
                            <img
                                src="../assets/avatar.jpeg"
                                class="h-full rounded-full overflow-hidden mr-2 shrink-0"
                            />
                            <div class="px-2 flex-1 max-w-full overflow-hidden">
                                <div class="text-2xl mt-1 max-w-full text-ellipsis whitespace-nowrap overflow-hidden">
                                    {{ user.username }}
                                </div>
                                <div class="text-xl">{{ user.studentID }}</div>
                                <div class="text-xl">{{ user.role }}</div>
                            </div>
                            <div
                                @click="removeUser(user.id)"
                                class="w-32 h-10 leading-10 invisible group-hover/item:visible absolute right-2 top-10 rounded-xl text-center text-white bg-red-500/100 hover:cursor-pointer hover:bg-red-500/60 select-none"
                            >
                                删除该用户
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 模态框 -->
        <div
            v-if="showEditProblemModel"
            @click="closeEditProblemModel"
            class="fixed top-0 z-10 bg-black/50 w-screen h-screen"
        >
            <div
                @click.stop
                class="absolute w-[800px] min-h-[300px] max-h-[70vh] top-20 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-700 dark:text-white p-4 rounded-2xl shadow-2xl"
            >
                <EditProblem :editProblemID="editProblemID" @close="closeEditProblemModelFromInside" />
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
            users: {},
            problems: {},
            showEditProblemModel: false,
            editProblemID: 0,
            showEditUserModel: true,
            editUserID: 0,
        };
    },
    methods: {
        openEditProblemModel(ProblemID) {
            (this.showEditProblemModel = true), (this.editProblemID = ProblemID);
        },
        closeEditProblemModel() {
            this.showEditProblemModel = false;
        },
        closeEditProblemModelFromInside() {
            this.showEditProblemModel = false;
            this.getAllProblems();
        },
        async getAllProblems() {
            let result = await this.$http.get("/getProblems");
            let code = result.data.code;
            let msg = result.data.msg;
            if (code != 200) {
                this.$toast.error(msg);
            } else {
                this.problems = result.data.data.result;
            }
        },
        async getAllUsers() {
            let result = await this.$http.get("/getAllUsers");
            let code = result.data.code;
            let msg = result.data.msg;
            if (code != 200) {
                this.$toast.error(msg);
            } else {
                this.users = result.data.data.users;
            }
        },
        async removeUser(userID) {
            if (userID == this.$store.state.userID) {
                this.$toast.error("不能删除自己");
                return;
            }
            let result = await this.$http.get("/removeUser", { params: { id: userID } });
            let code = result.data.code;
            let msg = result.data.msg;
            if (code != 200) {
                this.$toast.error(msg);
            } else {
                this.$toast.success("删除成功");
                this.getAllUsers();
                this.getAllProblems();
            }
        },
    },
    mounted() {
        this.getAllProblems();
        this.getAllUsers();
    },
};
</script>