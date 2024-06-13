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

    let xmlDoc = 
    `
    <Simple>
      <Name>TITLE</Name>
      <String>${body.title}</String>
    </Simple>
    `

    if (body.dateReleased !== '') {
        xmlDoc = xmlDoc + 
        `
        <Simple>
            <Name>DATE_RELEASED</Name>
            <String>${body.dateReleased}</String>
        </Simple>
        `
    }

    if (body.summary !== '') {
        xmlDoc = xmlDoc + 
        `
        <Simple>
            <Name>SUMMARY</Name>
            <String>${body.summary}</String>
        </Simple>
        `
    }

    if (body.actor !== '') {
        const actors = splitData(body.actor!)

        actors.map((actor) => {
            xmlDoc = xmlDoc +
            `
            <Simple>
                <Name>ACTOR</Name>
                <String>${actor}</String>
            </Simple>
            `
        } )
    }

    if (body.director !== '') {
        const directors = splitData(body.director!)

        directors.map((director) => {
            xmlDoc = xmlDoc +
            `
            <Simple>
                <Name>DIRECTOR</Name>
                <String>${director}</String>
            </Simple>
            `
        } )
    }

    const completeDoc = INITIAL_DOC + xmlDoc + FINAL_DOC

    return completeDoc
})

/**
 * { title: 'Awita',
  dateReleased: '2000-04-12',
  actor: 'Maripili Lozano, Caraculo Salas',
  director: 'Bívido López',
  summary: 'Me gusta el awita fresquita.' }
 */