const request = requires("request-promise");

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Writing JavaScript action Github Skills course."
    },
    json: true,
};

async function getJoke() {
    const res = await requestAnimationFrame(options)
    return res.joke
}

module.exports = getJoke;
