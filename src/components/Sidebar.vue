<template>
    <div class="w-full h-full flex flex-col justify-between">
    <div class="mt-2 mx-3">
        <h1 class="font-bold text-red-500 text-xl">Movies & TV Shows</h1>

        <div class="w-full border-b border-t py-3">
            <router-link to="/" class="w-full">
                <div class="w-full flex gap-4 items-center px-2 py-2 is-active">
                    <Icon icon="heroicons:home" :style="{ fontSize: '24px', color: 'black' }"/>
                    <p class="text-sm">Home</p>
                </div>
            </router-link>
            
            <router-link to="/popular-movies" class="w-full" >
                <div class="w-full flex gap-4 items-center px-2 py-2">
                    <Icon icon="ic:outline-library-add" :style="{ fontSize: '24px', color: 'black' }"/>
                    <p class="text-sm">Popular Movies</p>
                </div>
            </router-link>
            
            <router-link to="/popular-tvshows" class="w-full" >
                <div class="w-full flex justify-between items-center">
                    <div class="w-full flex gap-4 items-center px-2 py-2">
                        <Icon icon="icon-park-outline:people" :style="{ fontSize: '24px', color: 'black' }"/>
                        <p class="text-sm">Popular TV Shows</p>
                    </div>
                </div>
            </router-link>
            
            
        </div>
        <div class="w-full pt-3">
            <p class="text-gray-400 font-medium text-base uppercase px-3">Watchlist</p>
            <div class="my-2">
                <div class="w-full flex gap-4 items-center px-2 py-2">
                    <div class="w-6 h-6 bg-gray-500 rounded-md">

                    </div>
                    <p class="text-sm">List</p>
                </div>
            </div>
            <button class="w-full h-full bg-red-500 rounded-md py-2 text-white text-sm font-semibold">
                Create list
            </button>
        </div>
    </div>
    <div class="p-3 w-full flex items-center justify-between">
        <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-full bg-gray-500">

            </div>
            <div class="text-black">
                <p class="text-sm font-bold">Chan Geme</p>
                <p class="text-xs">@changeme</p>
            </div>
        </div>
        <div>
            <button class="mt-2">
                <Icon icon="mdi:dots-horizontal" :style="{ fontSize: '24px', color: 'black' }"/>
            </button>
        </div>
    </div>
</div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon,
  },
};
</script>

<style scoped>
.router-link-exact-active {
    color: red;
}

</style>
