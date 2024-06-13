<template>
    <Head>
        <Title>MKV XML Tags generator - Generate XML metadata files for your MKV video</Title>
        <Meta name="description" content="Generate basic metadata for your MKV movies and TV episodes video files like the main cast, the director, a summary of the plot... all in a simple XML file to add to your Matroska video." />
        <Link rel="icon" type="image/svg" href="/favicon.svg" />
    </Head>
    <Navbar />
    <main class="max-w-[80ch] mx-auto p-4">
        <slot />
        <NuxtSnackbar />
    </main>
    <Footer />
</template>

<style>
body {
    font-family: 'Montserrat', sans-serif;
}
p {
    font-family: 'Roboto', sans-serif;
}
</style>