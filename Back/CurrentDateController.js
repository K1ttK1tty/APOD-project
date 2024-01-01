import DataService from "./DataService.js"
class CurrentDateController {

    async getTodayData(req, res) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        try {
            const result = await DataService.fetchTodayData()
            res.status(200).json(result)
        } catch (err) {
            const yesterdayResult = await DataService.fetchYesterdayData()
            res.json(yesterdayResult)
        }
    }

    async getChosenData(req, res) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        try {
            const result = await DataService.fetchChosenData(req.query.data)
            res.status(200).json(result)
        } catch (err) {
            res.json({ data: '', error: err.message })
        }
    }
}

export default new CurrentDateController()