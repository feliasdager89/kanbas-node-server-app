
export default function Hello(app) {

    app.get('/hello', (req, res) => {res.send('We are going to do this!!!')})
    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development! Backend!!!')}) 
}