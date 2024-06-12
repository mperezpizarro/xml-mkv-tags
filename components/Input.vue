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
</script>

<template>
    <div>
        <label :for="name" class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</label>
        <input :type="type" :id="id"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            :placeholder="placeholder" :required="required ? true : false" />
    </div>
</template>