const applicationState = {
    jokes: [],
    dogs: [],
    performances: []
}

const api = "http://localhost:8088"
const main = document.querySelector("#container")

export const createPerformance = (performance) => {
    return fetchIt(`${api}/performances`, "POST", JSON.stringify(performance))
        .then(() => {
            main.dispatchEvent(new CustomEvent("performanceCreated"))
        })
}

export const fetchJokes = () => {
    return fetchIt(`${api}/jokes`)
        .then((jokes) => applicationState.jokes = jokes)
}

export const fetchPerformances = () => {
    return fetchIt(`${api}/performances`)
        .then(performances => applicationState.performances = performances)
}

export const fetchDogs = () => {
    return fetchIt(`${api}/dogs`)
        .then(dogs => applicationState.dogs = dogs)
}

export const getDogs = () => structuredClone(applicationState.dogs)
export const getJokes = () => structuredClone(applicationState.jokes)
export const getPerformances = () => structuredClone(applicationState.performances)



export const fetchIt = (url, method = "GET", body = null) => {
    let options = {
        "method": method,
        "headers": {}
    }

    switch (method) {
        case "POST":
        case "PUT":
            options.headers = {
                "Content-Type": "application/json"
            }
            break;
        default:
            break;
    }

    if (body !== null) {
        options.body = body
    }

    return fetch(url, options).then(r => r.json())
}
