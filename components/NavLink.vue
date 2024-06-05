<script setup>
const props = defineProps({
    href: String,
    label: String,
    target: "_blank" | "_self",
    external: Boolean
})

const localePath = useLocalePath()
</script>

<template>
    <li>
        <NuxtLink :target="target" :to="external ? href : localePath(href)" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
            {{ label }}
        </NuxtLink>
    </li>
</template>