<template>
    <Head>
        <Title>MKV XML Tags generator</Title>
        <Meta name="description" content="Generate basic metadata for your MKV movies and TV episodes video files like the main cast, the director, a summary of the plot..." />
        <Link rel="icon" type="image/svg" href="/favicon.svg" />
    </Head>
    <Navbar />
    <main class="max-w-screen-xl mx-auto p-4">
        <slot />
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