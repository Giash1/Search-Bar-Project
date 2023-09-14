const speakers = ['Daniel', 'Denish', 'Sofia', 'Anders', 'Nathalie']
const subjects = ['Teaching', 'Learning', 'Reading', 'Writing', 'Listening']

const resultBox = document.querySelector('.result-box')
const InputBox = document.getElementById('input-box')
const searchButton = document.getElementById('searchButton')
const detailsContainer = document.getElementById('detailsContainer')

InputBox.onkeyup = function () {
    let result = []
    let input = InputBox.value.trim()

    if (input.toLowerCase() === 'speakers') {
        result = speakers
    } else if (input.toLowerCase() === 'subjects') {
        result = subjects
    } else if (input.length) {
        result = speakers.filter((keyword) =>
            keyword.toLowerCase().includes(input.toLowerCase())
        )
    }

    display(result)
    
    if (input === '') {
        detailsContainer.textContent = ''
    }
}

function display(result) {
    const content = result.map((list) => {
        const listItem = document.createElement('li')
        listItem.textContent = list
        listItem.addEventListener('click', () => selectInput(list))
        return listItem
    })

    resultBox.innerHTML = '' // Clear previous results
    const ul = document.createElement('ul')
    ul.append(...content)
    resultBox.appendChild(ul)
}

function selectInput(selectedValue) {
    InputBox.value = selectedValue
    resultBox.innerHTML = '' // Clear the result box after selecting
}

searchButton.addEventListener('click', () => {
    const selectedValue = InputBox.value
    //  a function to retrieve more details based on the selectedValue
    const details = getDetails(selectedValue)
    // Display the details in the detailsContainer
    detailsContainer.textContent = `Details for ${selectedValue}: ${details}`
})

function getDetails(selectedValue) {
    // Example: switch statement to return details based on the selected value
    switch (selectedValue) {
        case 'Daniel':
            return 'Age: 30, Occupation: Engineer'
        // Add more cases for other items
        default:
            return 'No details available'
    }

}
