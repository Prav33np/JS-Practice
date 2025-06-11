const userLeft = false
const watchingCatMeme = false
function watchTutoriaPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            // errorCallback
            reject({
                name: 'User Left',
                message: ':('
            })
        }else if (watchingCatMeme) {
            reject({
                name: 'User watching Cat Meme',
                message: 'your video < cat meme'
            })
        }else {
             //callBack
            resolve('Thumbs up & share')
        }
    })
}


watchTutoriaPromise() .then((message) =>{
    console.log('Success: ' + message)
}) .catch((error) => {
    console.log(error.name + ' ' + error.message)
})