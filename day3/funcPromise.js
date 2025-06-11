const my1 = new Promise((reslove, reject) => {
    reslove('my 1 is done')
})

const my2 = new Promise((reslove, reject) => {
    reslove('my 1 is done')
})

const my3 = new Promise((reslove, reject) => {
    reslove('my 1 is done')
})


Promise.all([ //race
    my1,
    my2,
    my3
]).then((messgaes) => {
    console.log(messgaes)
})