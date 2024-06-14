import { INITIAL_DOC, FINAL_DOC } from "../../consts/xmlFile"

interface Body {
    title: String,
    dateReleased?: String,
    actor?: String,
    director?: String,
    summary?: String
}

function splitData (data: String) {
    const dataArray = data.split(",")

    return dataArray
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event) as Body

    if (!body.title) {
        throw createError({
            statusCode: 400,
            statusMessage: '"TITLE" is empty.'
        })
    }

    let xmlDoc = '\n\t\t\t<Simple>\n\t\t\t\t<Name>TITLE</Name>\n\t\t\t\t<String>' + body.title + '</String>\n\t\t\t</Simple>'

    if (body.dateReleased !== '') {
        xmlDoc = xmlDoc + '\n\t\t\t<Simple>\n\t\t\t\t<Name>DATE_RELEASED</Name>\n\t\t\t\t<String>' + body.dateReleased + '</String>\n\t\t\t</Simple>'
    }

    if (body.summary !== '') {
        xmlDoc = xmlDoc + '\n\t\t\t<Simple>\n\t\t\t\t<Name>SUMMARY</Name>\n\t\t\t\t<String>' + body.summary + '</String>\n\t\t\t</Simple>'
    }

    if (body.actor !== '') {
        const actors = splitData(body.actor!)

        actors.map((actor) => {
            xmlDoc = xmlDoc + '\n\t\t\t<Simple>\n\t\t\t\t<Name>ACTOR</Name>\n\t\t\t\t<String>' + actor.trim() + '</String>\n\t\t\t</Simple>'
        } )
    }

    if (body.director !== '') {
        const directors = splitData(body.director!)

        directors.map((director) => {
            xmlDoc = xmlDoc + '\n\t\t\t<Simple>\n\t\t\t\t<Name>DIRECTOR</Name>\n\t\t\t\t<String>' + director.trim() + '</String>\n\t\t\t</Simple>'
        } )
    }

    const completeDoc = INITIAL_DOC + xmlDoc + FINAL_DOC

    return completeDoc
})