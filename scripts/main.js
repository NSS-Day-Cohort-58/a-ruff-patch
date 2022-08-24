import { JokeList } from "./JokeList.js"
import { fetchDogs, fetchJokes, fetchPerformances } from "./state.js"

const main = document.querySelector("#container")

// Pull all state from the API into Application state
const initializeState = () => {
    return fetchDogs()
        .then(() => fetchJokes())
        .then(() => fetchPerformances())
}

// Synchronize API and Application performance state
const synchronizeState = () => {
    return fetchPerformances()
}

// Convert state to HTML and update DOM
const render = () => {
    main.innerHTML = JokeList()
}

/*
    When a performance is created, get performance state from
    API and re-render HTML
*/
main.addEventListener("performanceCreated", () => {
    synchronizeState().then(render)
})

/*
    On initial page load, get ALL state from API and render HTML
*/
initializeState().then(render)

