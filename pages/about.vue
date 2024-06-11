<template>
    <Head>
        <Title>About - MKV XML Tags Generator</Title>
    </Head>
    <header class="w-full mx-auto">
        <h2 class="text-2xl uppercase mb-8">{{ $t('aboutHeading1') }}</h2>
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
        <h2 class="text-2xl uppercase mb-8">{{ $t('aboutHeading2') }}</h2>
    </header>
    <article class="w-full mx-auto">
        <Paragraph>
            {{ $t('aboutP4') }}
        </Paragraph>
        <Paragraph>
            {{ $t('aboutP5') }}
        </Paragraph>
        <Paragraph>
            {{ $t('aboutP6') }}
        </Paragraph>
    </article>
</template>