<script setup>
const props = defineProps({
    label: String,
    name: String,
    id: String,
    placeholder: String,
    required: Boolean
})
</script>

<template>
    <label :for="name" class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</label>
    <textarea :id="id" rows="4"
        class="col-span-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        :placeholder="placeholder" :required="required ? 'true' : 'false'"></textarea>
</template>