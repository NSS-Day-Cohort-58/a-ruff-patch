import { createPerformance, getDogs, getJokes, getPerformances } from "./state.js"

export const JokeList = () => {
    const jokes = getJokes()
    const dogs = getDogs()
    const performances = getPerformances()

    return `
        <h1>A Ruff Patch</h1>
        <h2>Where Dog Comedians Perform</h2>


        <article class="jokes">
        ${
            jokes.map(joke => {
                const performed = performances.find(p => p.jokeId === joke.id)

                if (performed) {
                    return createCompletedRow(joke, performed, dogs)
                }
                else {
                    return createIncompleteRow(joke, dogs)
                }

            }).join("")
        }

        </article>
    `
}

/*
    The joke was performed, so generate a row that displays the joke
    setup and an image of the performer. Will need the joke object,
    the performance object, and the array of dogs to complete.
*/
const createCompletedRow = (joke, performance, dogs) => {
    const performer = dogs.find(d => d.id === performance.dogId)

    return `
        <section class="joke">
            <div class="joke__setup">
                <div>${joke.setup}</div>
                <div class="joke__delivery">${joke.delivery}</div>
            </div>
            <div class="joke_performer">
                <img src="${performer.image}" width="100px" />
            </div>
        </section>
    `
}

/*
    Joke not performed. Generate a row with joke setup and a select
    element so the user can select a performer. Will need the joke
    to convert and the array of dogs.
*/
const createIncompleteRow = (joke, dogs) => {
    return `
        <section class="joke">
            <div class="joke__setup">${joke.setup}</div>
            <div class="joke_performer">
                <select id="dog">
                    <option value="0">Select a performer</option>
                    ${dogs.map(d => `<option value="${d.id}--${joke.id}">${d.name}</option>`).join("")}
                </select>
            </div>
        </section>
    `
}

document.addEventListener(
    "change",
    e => {
        if (e.target.id === "dog") {
            const [dogId, jokeId] = e.target.value.split("--")

            const performance = {
                dogId: parseInt(dogId),
                jokeId: parseInt(jokeId)
            }

            createPerformance(performance)
        }
    }
)