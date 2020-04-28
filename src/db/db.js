export const methodGet = async () => {
    let url = 'http://192.168.0.40/WSProv50/'
    const answer = await fetch(url, {
        method: 'GET',
        headers: {

        }
    })
    .then((response) => response.json())
    .then((responseJson) => {
        return response
    })
    .catch((error) => {
        console.log('error', error)
    })
}