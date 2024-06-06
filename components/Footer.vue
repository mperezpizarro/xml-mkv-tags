<script setup>
const localePath = useLocalePath()
</script>

<template>
    <footer class="bg-white rounded-lg shadow m-4">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center ">Web created by <a href="https://github.com/mperezpizarro"
                    class="hover:underline">Dráfty</a>.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                <li>
                    <NuxtLink :to="localePath('/')" class="hover:underline me-4 md:me-6">{{ $t('homeLink') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="localePath('/about')" class="hover:underline me-4 md:me-6">{{ $t('aboutLink') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://github.com" class="hover:underline me-4 md:me-6">{{ $t('githubLink') }}</NuxtLink>
                </li>
            </ul>
        </div>
    </footer>
</template>