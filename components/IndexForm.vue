<script setup>
const formData = reactive({
    title: "",
    dateReleased: "",
    actor: "",
    director: "",
    summary: ""
})
const fileURL = ref('#')
const hiddenURL = ref(true)

async function handleSubmit(e) {
    e.preventDefault()
    const parsedFormData = toRaw(formData)
    const data = await $fetch("/api/createFile", {
        method: 'post',
        body: parsedFormData
    })
    console.log(data)

    const file = new Blob([data], {
        type: "text/xml"
    })

    const download = URL.createObjectURL(file)
    fileURL.value = download
    hiddenURL.value = false
}

</script>

<template>
    <form @submit="handleSubmit">
        <FormCol>
            <Input :label="$t('homeInputLabel1')" name="TITLE" v-model="formData.title"
                :placeholder="$t('homeInputPlaceholder1')" required />
            <Input :label="$t('homeInputLabel2')" name="DATE_RELEASED" v-model="formData.dateReleased" type="date" />
        </FormCol>
        <FormCol>
            <Input :label="$t('homeInputLabel3')" name="ACTOR" v-model="formData.actor"
                :placeholder="$t('homeInputPlaceholder2')" />
            <Input :label="$t('homeInputLabel4')" v-model="formData.director"
                :placeholder="$t('homeInputPlaceholder3')" />
            <small class="col-span-2 mt-4">{{ $t('homeInputNote') }}</small>
        </FormCol>
        <FormCol>
            <TextArea :label="$t('homeInputLabel5')" name="SUMMARY" v-model="formData.summary"
                :placeholder="$t('homeInputPlaceholder4')" />
        </FormCol>
        <FormCol>
            <button type="submit" class="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                {{ $t('homeSubmit') }}
            </button>
            <a v-if="!hiddenURL" download="metadata.xml" :href="fileURL" class="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                {{ $t('homeDownload') }}
            </a>
        </FormCol>
    </form>
</template>