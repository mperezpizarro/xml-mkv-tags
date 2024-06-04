<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <Head>
        <Title>{{`${error.statusCode} - MKV XML Tags Generator`}}</Title>
    </Head>
    <Navbar />
    <main class="w-full max-w-[90ch] mx-auto p-4 min-h-[calc(100vh-76px-72px)] flex flex-col items-center justify-center">
        <h2 class="text-4xl font-bold uppercase text-center">{{`Error ${error.statusCode}`}}</h2>
        <PrimaryButton class="mt-8" type="submit" text="Return to home page" @click="handleError" />
    </main>
    <Footer />
</template>
