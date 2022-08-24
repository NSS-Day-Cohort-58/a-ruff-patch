const applicationState = {
    jokes: [],
    dogs: [],
    performances: []
}

const api = "http://localhost:8088"

// Jokes
export const fetchJokes = () => {
    return fetch(`${api}/jokes`)
        .then(response => response.json())
        .then((jokes) => {
            applicationState.jokes = jokes
        })
}

export const getJokes = () => structuredClone(applicationState.jokes)

// Dogs
export const fetchDogs = () => {
    return fetch(`${api}/dogs`)
        .then(response => response.json())
        .then((dogs) => {
            applicationState.dogs = dogs
        })
}

export const getDogs = () => structuredClone(applicationState.dogs)

// Performances
 export const fetchPerformances = () => {
     return fetch(`${api}/performances`)
     .then(response => response.json())
     .then((performances) => {
         applicationState.performances = performances
     })
 }
 
 export const getPerformances = () => structuredClone(applicationState.performances)