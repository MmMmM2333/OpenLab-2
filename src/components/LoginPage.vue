<template>
    <div>
        <div
            class="w-screen h-screen flex justify-center items-center bg-light-login-bg dark:bg-night-login-bg bg-cover bg-center"
        >
            <div
                class="bg-slate-400/30 w-2/3 max-w-[800px] min-w-[400px] h-96 flex backdrop-blur-sm rounded-3xl overflow-hidden"
            >
                <div class="flex-1 p-6 flex justify-center items-center">
                    <div class="flex flex-col items-center">
                        <div class="text-center font-extrabold text-3xl select-none dark:text-white">登录</div>
                        <div class="mt-8">
                            <input type="text" placeholder="学号" class="w-full h-10 px-2 rounded-lg" />
                        </div>
                        <div class="my-4">
                            <input type="password" placeholder="密码" class="w-full h-10 px-2 rounded-lg" />
                        </div>
                        <div class="text-center mb-4 selection: hover:cursor-pointer hover:opacity-60 dark:text-white">
                            忘记密码?
                        </div>
                        <div
                            class="w-24 h-10 leading-10 rounded-xl text-center text-white bg-orange-600/100 hover:cursor-pointer hover:bg-orange-600/90 hover:scale-110 select-none ease-in duration-300"
                        >
                            登录
                        </div>
                    </div>
                </div>
                <div
                    class="flex-1 p-6 flex justify-center items-center bg-gradient-to-r from-orange-500/50 to-red-500/50"
                >
                    <div class="flex flex-col items-center">
                        <div class="text-white text-2xl mt-4 mb-2 select-none">莫得账号？</div>
                        <div class="text-white text-3xl my-4 select-none">现在就去注册吧</div>
                        <div
                            class="w-24 h-10 leading-9 mt-6 rounded-xl text-center text-white border-2 border-white hover:opacity-50 hover:cursor-pointer hover:scale-110 select-none ease-in duration-300"
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
};
</script>