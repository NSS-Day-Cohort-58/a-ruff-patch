import { JokeList } from "./JokeList.js"
import { fetchDogs, fetchJokes, fetchPerformances } from "./state.js"

const main = document.querySelector("#container")

const render = () => {
    // fetch other data from database
    fetchJokes()
    .then(() => fetchPerformances())
    .then(() => fetchDogs())
    .then(() => {
       main.innerHTML = JokeList()
    })
}

main.addEventListener( "performanceCreated", render )

render()

