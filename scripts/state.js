const applicationState = {
    jokes: [],
    dogs: [],
    performances: []
}

const api = "http://localhost:8088"

export const fetchJokes = () => {
    return fetch(`${api}/jokes`)
        .then(response => response.json())
        .then((jokes) => {
            applicationState.jokes = jokes
        })
}

export const getJokes = () => structuredClone(applicationState.jokes)