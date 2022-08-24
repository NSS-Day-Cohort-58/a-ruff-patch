/*
    Responsibility:
        Generate list of jokes.
            * Complete jokes will show punchline and performer image
            * Incomplete jokes will show a select element with performer names to choose from

        When a performer is selected, update API database with relationship
*/



export const JokeList = () => {

    return `
        <h1>A Ruff Patch</h1>
        <h2>Where Dog Comedians Perform</h2>


    `
    // get all data from application state (jokes, dogs, performances)
    // iterate over all jokes
    // for each of the jokes
        // check whether or not it has been performed
            // if it has been performed, render it with punchline and dog
                // to check if it has been performed
                    // iterate over all performances
                    // match performances joke id, with id of joke we are checking
                    // if there is a match, find matching dog from dogs array to display
                        // to find the matching dog, match performance dogId with dog.id

            // if it has NOT been performed, render it with no punchline, and a dropdown for performer
}


document.addEventListener(
    "change",
    e => { 
        // listen for when a performer is selected from the joke dropdown
        // generate a performance object with selected dog id and selected joke id
        // add that to the database
    }
)