<script setup>
import { ref } from "vue";
import Typing from "./Typing.vue";

defineProps({
    project: {
        type: Object,
        default: () => ({ name: "Project", description: "description.", image: "" }),
    },
});

let step = ref(0);
</script>

<template>
    <div class="group flex flex-col justify-center lg:flex-row">
        <a
            class="flex h-full w-full items-center justify-center overflow-hidden rounded-md shadow lg:shadow-lg"
            :href="project.url"
        >
            <img
                :src="project.image"
                class="w-full transition-all duration-200 ease-in group-hover:scale-105"
            />
        </a>
        <div class="h-full w-full p-4 pb-2">
            <Typing
                class="mb-2 block text-lg md:text-xl lg:mb-4 lg:text-2xl"
                :text="project.name"
                :speed="60"
                @done="step++"
            ></Typing>
            <Typing
                class="mb-2 block text-sm text-gray-600 md:text-base"
                :text="project.description"
                :speed="40"
                v-if="step > 0"
                @done="step++"
            ></Typing>
            <Typing
                class="block text-sm text-gray-400 md:text-base"
                :text="project.skills.join(', ')"
                :speed="40"
                v-if="step > 1"
                @done="step++"
            ></Typing>

        </div>
    </div>
</template>
