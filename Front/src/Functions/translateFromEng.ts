import { IDataObject } from "../Types/Types"
import * as translate from 'translate'
export const translateFromEng = async (object: IDataObject, setData: (a: IDataObject) => void) => {

    try {
        const newData = {
            date: object?.date,
            title: await translate(object?.title, 'ru'),
            url: object?.url,
            explanation: await translate(object?.explanation, 'ru'),
            copyright: object?.copyright,
            media_type: object?.media_type,
            hdurl: object?.hdurl,
        }
        setData(newData)
    } catch (error) {
        return object
    }

}