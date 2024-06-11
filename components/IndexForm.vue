<template>
    <form>
        <FormCol>
            <Input :label="$t('homeInputLabel1')" name="TITLE" id="TITLE" :placeholder="$t('homeInputPlaceholder1')" required />
            <Input :label="$t('homeInputLabel2')" name="DATE_RELEASED" id="DATE_RELEASED" type="date" />
        </FormCol>
        <FormCol>
            <Input :label="$t('homeInputLabel3')" name="ACTOR" id="ACTOR" :placeholder="$t('homeInputPlaceholder2')" />
            <Input :label="$t('homeInputLabel4')" id="DIRECTOR" :placeholder="$t('homeInputPlaceholder3')" />
            <small class="col-span-2 mt-4">{{ $t('homeInputNote') }}</small>
        </FormCol>
        <FormCol>
            <TextArea :label="$t('homeInputLabel5')" name="SUMMARY" id="SUMMARY" :placeholder="$t('homeInputPlaceholder4')" />
        </FormCol>
        <button type="submit" class="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{{ $t('homeSubmit') }}</button>
    </form>
</template>