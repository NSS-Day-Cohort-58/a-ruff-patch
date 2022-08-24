import { fetchJokes } from "./state.js"

const main = document.querySelector("#container")

const render = () => {
    // fetch other data from database
    fetchJokes()
}

main.addEventListener( "performanceCreated", render )

render()

