<script setup>
const { locale, setLocale } = useI18n()
</script>

<template>
    <Head>
        <Title>About - MKV XML Tags Generator</Title>
    </Head>
    <header class="w-full mx-auto">
        <h2 class="text-balance text-xl md:text-2xl uppercase mb-8">{{ $t('aboutHeading1') }}</h2>
    </header>
    <article class="w-full mx-auto">
        <Paragraph>
            {{ $t('aboutP1') }}
        </Paragraph>
        <Paragraph>
            {{ $t('aboutP2') }}
        </Paragraph>
        <Paragraph>
            <i18n-t keypath="aboutP3" tag="span">
                <template v-slot:softwareName>
                    <a href='https://mkvtoolnix.download/' target='_blank'>MKVToolnix</a>
                </template>
            </i18n-t>
        </Paragraph>
    </article>
    <header class="w-full mx-auto mt-12">
        <h2 class="text-balance text-xl md:text-2xl uppercase mb-8">{{ $t('aboutHeading2') }}</h2>
    </header>
    <article class="w-full mx-auto">
        <Paragraph>
            {{ $t('aboutP4') }}
        </Paragraph>
        <img v-if="locale === 'en'" src="/images/tutorial-en-1.webp" :alt="$t('aboutImg1Alt')" class="w-full mt-4 mb-6" />
        <img v-if="locale === 'es'" src="/images/tutorial-es-1.webp" :alt="$t('aboutImg1Alt')" class="w-full mt-4 mb-6" />
        <Paragraph>
            {{ $t('aboutP5') }}
        </Paragraph>
        <img v-if="locale === 'en'" src="/images/tutorial-en-2.webp" :alt="$t('aboutImg2Alt')" class="w-full mt-4 mb-6" />
        <img v-if="locale === 'es'" src="/images/tutorial-es-2.webp" :alt="$t('aboutImg2Alt')" class="w-full mt-4 mb-6" />
        <Paragraph>
            {{ $t('aboutP6') }}
        </Paragraph>
        <img v-if="locale === 'en'" src="/images/tutorial-en-3.webp" :alt="$t('aboutImg3Alt')" class="w-full mt-4 mb-6" />
        <img v-if="locale === 'es'" src="/images/tutorial-es-3.webp" :alt="$t('aboutImg3Alt')" class="w-full mt-4 mb-6" />
    </article>
</template>