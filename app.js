
const jokeButton = document.querySelector('#jokeBtn');
const jokeSection = document.querySelector('UL');

const getDadJokes = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const joke = await axios.get("https://icanhazdadjoke.com/", config)
    const newJoke = (joke.data.joke)
    const li = document.createElement('li');
    li.innerText = newJoke;
    jokeSection.append(li);

}




jokeButton.addEventListener('click', getDadJokes)