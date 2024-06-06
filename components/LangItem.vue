<script setup>
const props = defineProps({
    lang: "es" | "en",
    label: String,
})

const { locale, setLocale } = useI18n() 
</script>

<template>
    <li>
        <button @click="setLocale(lang)" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <div class="inline-flex items-center gap-x-2">
                <IconsUSFlag v-if="lang === 'en'" />
                <IconsSpainFlag v-if="lang === 'es'" />
                {{ label }}
            </div>
        </button>
    </li>
</template>