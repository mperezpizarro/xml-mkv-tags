<template>
    <Head>
        <Title>About - MKV XML Tags Generator</Title>
    </Head>
    <header class="w-full mx-auto">
        <h2 class="text-2xl uppercase mb-8">{{ $t('aboutHeading1') }}</h2>
    </header>
    <article class="w-full mx-auto">
        <p class="text-lg mb-6">
            {{ $t('aboutP1') }}
        </p>
        <p class="text-lg mb-6">
            {{ $t('aboutP2') }}
        </p>
        <p class="text-lg mb-6">
            <i18n-t keypath="aboutP3" tag="span">
                <template v-slot:softwareName>
                    <a href='https://mkvtoolnix.download/' target='_blank'>MKVToolnix</a>
                </template>
            </i18n-t>
        </p>
    </article>
    <header class="w-full mx-auto mt-12">
        <h2 class="text-2xl uppercase mb-8">{{ $t('aboutHeading2') }}</h2>
    </header>
    <article class="w-full mx-auto">
        <p class="text-lg mb-6">
            {{ $t('aboutP4') }}
        </p>
        <p class="text-lg mb-6">
            {{ $t('aboutP5') }}
        </p>
        <p class="text-lg mb-6">
            {{ $t('aboutP6') }}
        </p>
    </article>
</template>