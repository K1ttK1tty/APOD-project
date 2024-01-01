import express from 'express'
import router from './router.js'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        app.listen(PORT, () => {
            console.log('SERVER START ON PORT ' + PORT)
        })
    } catch (err) {
        console.log(err)
    }
}
startApp()
