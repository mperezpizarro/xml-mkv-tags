<script setup>
const props = defineProps({
    type: "button" | "submit" | "reset",
    text: String,
    class: String
})
</script>

<template>
    <button
        :type="type"
        :class="class"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
        {{ text }}
    </button>
</template>