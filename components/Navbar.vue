<script setup>
const isHidden = ref(true)
const isLangHidden = ref(true)
const { locale, setLocale } = useI18n()

function toggleMenu() {
    isHidden.value = !isHidden.value
}
function toggleSelector() {
    isLangHidden.value = !isLangHidden.value
}
</script>
<template>
    <nav class="bg-white border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/public/favicon.svg" class="h-8" alt="Site Logo" />
                <h1 class="self-center text-xl font-semibold whitespace-nowrap">MKV Tags generator</h1>
            </a>
            <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                <button @click="toggleSelector" type="button" data-dropdown-toggle="language-dropdown-menu"
                    class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100">
                    <IconsUSFlag v-if="locale === 'en'" />
                    <IconsSpainFlag v-if="locale === 'es'" />
                    <span class="pl-2 inline-block" v-if="locale === 'en'">English (US)</span>
                    <span class="pl-2 inline-block" v-if="locale === 'es'">Español (España)</span>
                </button>
                <!-- Dropdown -->
                <div style="position: absolute; inset: 60px auto auto auto; margin: 0px;" :class="isLangHidden ? 'hidden' : ''" class="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-fit" id="language-dropdown-menu">
                    <LangSelector @click="toggleSelector" />
                </div>
                <button @click="toggleMenu" data-collapse-toggle="navbar-language" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-language" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div :class="isHidden ? 'hidden' : ''" class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-language">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                    <NavLink href="/" :label="$t('homeLink')" />
                    <NavLink href="/about" :label="$t('aboutLink')" />
                    <NavLink href="https://github.com" target="_blank" :label="$t('githubLink')" />
                </ul>
            </div>
        </div>
    </nav>
</template>