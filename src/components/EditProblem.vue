<template>
    <div>
        <div>
            <div class="flex mb-2 h-10">
                <div class="leading-10">题目简称：</div>
                <input type="text" placeholder="用于显示在排行榜上" class="flex-1 bg-gray-100 rounded-lg px-2" />
            </div>
            <div class="flex mb-2 h-10">
                <div class="leading-10">完整题目：</div>
                <input type="text" placeholder="用于显示在题目页上" class="flex-1 bg-gray-100 rounded-lg px-2" />
            </div>
            <div class="flex mb-2">
                <div>题目描述：</div>
                <textarea
                    placeholder="选填"
                    class="border-2 bg-gray-100 rounded-lg flex-1 max-h-40 min-h-[80px] p-2"
                ></textarea>
            </div>
            <div class="flex h-10">
                <div class="leading-10">题目总分：</div>
                <input type="number" placeholder="用于显示在排行榜上" class="flex-1 bg-gray-100 rounded-lg px-2" />
            </div>
            <div class="flex flex-row-reverse ml-auto gap-2">
                <div
                    class="w-32 h-10 leading-10 mt-4 rounded-xl text-center text-white bg-blue-500/100 hover:cursor-pointer hover:bg-blue-500/90 hover:scale-110 select-none ease-in duration-300"
                >
                    应用
                </div>
                <div
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
};
</script>