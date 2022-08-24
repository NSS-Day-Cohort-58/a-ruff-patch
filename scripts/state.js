const applicationState = {
    jokes: [],
    dogs: [],
    performances: []
}

const api = "http://localhost:8088"

// we need to create a POST function for adding performances to the database

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

 //Saving a performance

 const main = document.querySelector("#container")

 export const savePerformance = (performanceObject) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(performanceObject)
    }
    return fetch(`${api}/performances`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            main.dispatchEvent(new CustomEvent('performanceCreated'))
        })
 }

 export const getPerformances = () => structuredClone(applicationState.performances)