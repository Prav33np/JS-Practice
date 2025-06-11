const request = request('axios')

async function getActivity() {
    try {
        let response = await request.get('http:/?httpstat.us/500')
        console.log(`you could ${response.data.activity}`)
    } catch (error) {
        console.error(`ERROR: ${error}`)
    }
}

getActivity()