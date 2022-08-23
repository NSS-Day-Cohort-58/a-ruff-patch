import { JokeList } from "./JokeList.js"
import { fetchDogs, fetchJokes, fetchPerformances } from "./state.js"

const main = document.querySelector("#container")

const render = () => {
    fetchDogs()
        .then(() => fetchJokes())
        .then(() => fetchPerformances())
        .then(() => {
            main.innerHTML = JokeList()
        })
}

main.addEventListener(
    "performanceCreated",
    () => render()
)

render()

