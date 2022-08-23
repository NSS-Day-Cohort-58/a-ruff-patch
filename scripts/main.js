import { fetchJokes } from "./state.js"

const main = document.querySelector("#container")

const render = () => {
    fetchJokes()
}

main.addEventListener( "performanceCreated", render )

render()

