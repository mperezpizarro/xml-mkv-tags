<script setup>
const isHidden = ref(true)
const isLangHidden = ref(true)

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
                    <svg class="w-5 h-5 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
                        <path fill="#b22234" d="M0 0h7410v3900H0z" />
                        <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff"
                            stroke-width="300" />
                        <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                        <g fill="#fff">
                            <g id="d">
                                <g id="c">
                                    <g id="e">
                                        <g id="b">
                                            <path id="a"
                                                d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                                            <use xlink:href="#a" y="420" />
                                            <use xlink:href="#a" y="840" />
                                            <use xlink:href="#a" y="1260" />
                                        </g>
                                        <use xlink:href="#a" y="1680" />
                                    </g>
                                    <use xlink:href="#b" x="247" y="210" />
                                </g>
                                <use xlink:href="#c" x="494" />
                            </g>
                            <use xlink:href="#d" x="988" />
                            <use xlink:href="#c" x="1976" />
                            <use xlink:href="#e" x="2470" />
                        </g>
                    </svg>
                    English (US)
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