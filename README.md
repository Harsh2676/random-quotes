# Quote Generator App - React

<p align="center">
 <img src="src/assets/design/quote-app-screenshot.png" alt="Project screenshot">
</p>

This web app generates a first quote on window load, after that the user can generate random quotes when pressing the green generator button. For this project, I wanted to specifically work on React custom hooks.

View Live Demo: [Click](https://jarolthecoder.github.io/QuoteApp/)

## 'useFetch' custom hook
For the api call I created a custom hook called 'useFetch' that takes a single argument, 'url', representing the URL to fetch data from.

The hook sets up a state object using the useState hook, which initially has two properties: 'data' that is set to null and 'isLoading' that is set to true.

The fetchData function makes a request to the specified URL using the Fetch API. The hook extracts the 'slip' property from the JSON data using destructuring after receiving the response. Then it updates the state using setState to store the extracted slip data and sets isLoading to false to indicate that the data has finished loading.

The hook uses the useEffect hook to make the fetch request when the component using the hook is rendered for the first time or whenever the url argument changes.

This custom hook returns an object containing the current data, isLoading, and fetchData properties of the state. This allows a component that uses the useFetch hook to access the fetched data, the loading state, and the fetch function.

Finally, the 'QuoteApp' component uses the 'useFetch' hook to fetch data from the [](https://api.adviceslip.com/advice) URL. The hook returns the fetched data, a boolean flag indicating whether the data is still being loaded, and the fetchData function.

The component destructures the hook's returned values into data, fetchData, and isLoading variables. The data object is destructured again into two properties, id and advice once the data is not null. As for the fetchData function, it is passed as a prop to the 'Button' component, which will trigger a new fetch request and update the data when the button is clicked.

### Attributions 
[Frontend Mentor](https://www.frontendmentor.io), [Advice Slip API](https://api.adviceslip.com/)