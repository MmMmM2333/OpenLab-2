<template>
    <div>
        <div
            class="w-screen h-screen flex justify-center items-center bg-light-login-bg dark:bg-night-login-bg bg-cover bg-center duration-1000"
        >
            <div
                class="bg-slate-400/30 w-2/3 max-w-[800px] min-w-[550px] h-96 flex backdrop-blur rounded-3xl overflow-hidden"
            >
                <div
                    class="flex-1 p-6 flex justify-center items-center duration-500"
                    :style="mode == 1 ? 'margin-left:0%;scale:100%' : 'margin-left:-50%;scale:0%'"
                >
                    <div class="w-full flex flex-col items-center">
                        <div class="text-center font-extrabold text-3xl select-none dark:text-white">登录</div>
                        <div class="w-full mt-8 px-6">
                            <input
                                v-model="login_username"
                                type="text"
                                placeholder="用户名"
                                class="w-full h-10 px-2 rounded-lg"
                            />
                        </div>
                        <div class="w-full my-4 px-6">
                            <input
                                v-model="login_password"
                                type="password"
                                placeholder="密码"
                                class="w-full h-10 px-2 rounded-lg"
                            />
                        </div>
                        <div
                            @click="forget_password"
                            class="text-center mb-4 selection: hover:cursor-pointer hover:opacity-60 dark:text-white select-none"
                        >
                            忘记密码?
                        </div>
                        <div
                            @click="login"
                            class="w-24 h-10 leading-10 rounded-xl text-center text-white bg-orange-600/100 hover:cursor-pointer hover:bg-orange-600/90 hover:scale-110 select-none ease-in duration-300"
                        >
                            登录
                        </div>
                    </div>
                </div>

                <div
                    class="flex-1 p-6 flex justify-center items-center bg-gradient-to-r from-orange-500/50 to-red-500/50 duration-500"
                >
                    <div v-if="mode == 1" class="flex flex-col items-center">
                        <div class="text-white text-2xl mt-4 mb-2 select-none">莫得账号？</div>
                        <div class="text-white text-3xl my-4 select-none">现在就去注册吧</div>
                        <div
                            @click="switch_mode"
                            class="w-24 h-10 leading-9 mt-6 rounded-xl text-center text-white border-2 border-white hover:opacity-50 hover:cursor-pointer hover:scale-110 select-none ease-in duration-300"
                        >
                            去注册
                        </div>
                    </div>

                    <div v-if="mode == 2" class="flex flex-col items-center">
                        <div class="text-white text-2xl mt-4 mb-2 select-none">已有账号？</div>
                        <div class="text-white text-3xl my-4 select-none">现在就去登录吧</div>
                        <div
                            @click="switch_mode"
                            class="w-24 h-10 leading-9 mt-6 rounded-xl text-center text-white border-2 border-white hover:opacity-50 hover:cursor-pointer hover:scale-110 select-none ease-in duration-300"
                        >
                            去登录
                        </div>
                    </div>
                </div>

                <div
                    class="flex-1 p-6 flex justify-center items-center duration-500"
                    :style="mode == 2 ? 'margin-right:0%;scale:100%' : 'margin-right:-50%;scale:0%'"
                >
                    <div class="w-full flex flex-col items-center">
                        <div class="text-center font-extrabold text-3xl select-none dark:text-white">注册</div>
                        <div class="w-full mt-8 px-6">
                            <input
                                v-model="register_username"
                                type="text"
                                placeholder="用户名"
                                class="w-full h-10 px-2 rounded-lg"
                            />
                        </div>
                        <div class="w-full my-4 px-6">
                            <input
                                v-model="register_studentID"
                                type="text"
                                placeholder="学号"
                                class="w-full h-10 px-2 rounded-lg"
                            />
                        </div>
                        <div class="w-full mb-4 px-6">
                            <input
                                v-model="register_password"
                                type="password"
                                placeholder="密码"
                                class="w-full h-10 px-2 rounded-lg"
                            />
                        </div>
                        <div
                            @click="register"
                            class="w-24 h-10 leading-10 rounded-xl text-center text-white bg-orange-600/100 hover:cursor-pointer hover:bg-orange-600/90 hover:scale-110 select-none ease-in duration-300"
                        >
                            注册
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return {
            //1为注册 2为登录
            mode: 1,
            login_username: "",
            login_password: "",
            register_username: "",
            register_studentID: "",
            register_password: "",
            disableLoginButton: false,
        };
    },
    methods: {
        switch_mode() {
            if (this.mode == 1) this.mode = 2;
            else this.mode = 1;
        },
        forget_password() {
            this.$toast.error("该功能未上线...");
        },
        async login() {
            if (this.disableLoginButton) return;

            if (this.login_username == "") {
                this.$toast.error("请输入用户名");
                return;
            } else if (this.login_password == "") {
                this.$toast.error("请输入密码");
                return;
            }

            let result = await this.$http.post("/login", {
                username: this.login_username,
                password: this.login_password,
            });
            let code = result.data.code;
            let msg = result.data.msg;
            if (code != 200) {
                this.$toast.error(msg);
            } else {
                let token = result.data.data.token;
                this.$store.commit("saveToken", token);
                this.$toast.success("登录成功,3秒后跳转");
                this.disableLoginButton = true;
            }
        },
        async register() {
            if (this.register_username == "") {
                this.$toast.error("请输入用户名");
                return;
            } else if (this.register_studentID == "") {
                this.$toast.error("请输入学号");
                return;
            } else if (this.register_password == "") {
                this.$toast.error("请输入密码");
                return;
            }

            let result = await this.$http.post("/register", {
                username: this.register_username,
                studentID: this.register_studentID,
                password: this.register_password,
            });
            let code = result.data.code;
            let msg = result.data.msg;
            if (code != 200) {
                this.$toast.error(msg);
            } else {
                this.$toast.success("注册成功,可前往登录界面登录");
            }
        },
    },
};
</script>