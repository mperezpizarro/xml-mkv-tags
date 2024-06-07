<template>
    <h2 class="text-2xl uppercase mb-8">Create your XML file</h2>
    <p class="text-lg mb-6">Fulfill the next form with the data you want to generate the file.</p>
    <form>
        <FormCol>
            <Input label="Title" name="TITLE" id="TITLE" placeholder="Title of your movie or episode" required />
            <Input label="Date Released" name="DATE_RELEASED" id="DATE_RELEASED" placeholder="YYYY" type="date" />
        </FormCol>
        <FormCol>
            <Input label="Actors" name="ACTOR" id="ACTOR" placeholder="John Doe, Jane Smith" />
            <Input label="Director" name="DIRECTOR" id="DIRECTOR" placeholder="John Doe" />
            <small class="col-span-2 mt-4">If there are more than one actor or director, write them separated with comma (Name1, Name2)</small>
        </FormCol>
        <FormCol>
            <TextArea label="Plot Summary" name="SUMMARY" id="SUMMARY" placeholder="Sumarize the plot of the movie or the episode here..." />
        </FormCol>
        <button type="submit" class="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>
</template>