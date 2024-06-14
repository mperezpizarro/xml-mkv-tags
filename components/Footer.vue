<script setup>
const localePath = useLocalePath()
</script>

<template>
    <footer class="bg-white rounded-lg shadow m-4">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="mb-4 md:mb-0 w-full text-sm block text-gray-500 text-center md:w-fit">Web created by <a href="https://github.com/mperezpizarro"
                    class="hover:underline">Dráfty</a>.
            </span>
            <ul class="flex flex-wrap items-center justify-center md:justify-end mt-4 text-sm font-medium text-gray-500 md:mt-0">
                <li>
                    <NuxtLink :to="localePath('/')" class="hover:underline me-4 md:me-6">{{ $t('homeLink') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="localePath('/about')" class="hover:underline me-4 md:me-6">{{ $t('aboutLink') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://github.com/mperezpizarro/xml-mkv-tags" class="hover:underline me-4 md:me-6">{{ $t('githubLink') }}</NuxtLink>
                </li>
            </ul>
        </div>
    </footer>
</template>