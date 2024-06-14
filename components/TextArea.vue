<script setup>
const props = defineProps({
    label: String,
    name: String,
    id: String,
    placeholder: String,
    required: Boolean,
    disabled: Boolean,
    resize: "y" | "none",
    rows: String
})

const model = defineModel()
</script>

<template>
    <label :for="name" class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</label>
    <textarea v-model="model" :id="id" :rows="rows ? rows : '4'"
        :class="resize === 'none' ? 'resize-none' : ''" class="col-span-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        :placeholder="placeholder" :required="required ? true : false" :disabled="disabled ? true : false"></textarea>
</template>