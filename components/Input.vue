<script setup>
const props = defineProps({
    label: String,
    name: String,
    id: String,
    placeholder: String,
    required: Boolean,
    type: {
        default: "text",
        type: String
    }
})

const model = defineModel()
</script>

<template>
    <div class="w-full block">
        <label :for="name" class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</label>
        <input v-model="model" :type="type" :id="id"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            :placeholder="placeholder" :required="required ? true : false" />
    </div>
</template>