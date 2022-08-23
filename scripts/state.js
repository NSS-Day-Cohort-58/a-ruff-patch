const applicationState = {
    jokes: [],
    dogs: [],
    performances: []
}

const api = "http://localhost:8088"

export const createPerformance = (performance) => {
    return fetch(`${api}/performances`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(performance)
    })
        .then(response => response.json())
        .then((newPerformance) => {
            const main = document.querySelector("#container")
            main.dispatchEvent(new CustomEvent("performanceCreated"))
        })
}

export const fetchJokes = () => {
    return fetch(`${api}/jokes`)
        .then(response => response.json())
        .then((jokes) => {
            applicationState.jokes = jokes
        })
}

export const fetchPerformances = () => {
    return fetch(`${api}/performances`)
        .then(response => response.json())
        .then((performances) => {
            applicationState.performances = performances
        })
}

export const fetchDogs = () => {
    return fetch(`${api}/dogs`)
        .then(response => response.json())
        .then((dogs) => {
            applicationState.dogs = dogs
        })
}

export const getDogs = () => structuredClone(applicationState.dogs)
export const getJokes = () => structuredClone(applicationState.jokes)
export const getPerformances = () => structuredClone(applicationState.performances)