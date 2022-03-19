// The papaparse is meant to return the lists as well as their respective ids in the CSV format. It's currently incomplete
// import papa from "papaparse"
import * as jarvis from "../index"
import { AxiosResponse, axiosTrello } from "../Util/axiosTrelloInstance"

export async function getListsOnBoard(args: {
    auth?: { "key": string | undefined, "token": string | undefined } | undefined,
    idBoard: string | object[],
}): Promise<object> {

    let authParams: typeof args["auth"] = await jarvis.getAuthParams(args["auth"])

    try {
        let trelloApiResponse: AxiosResponse = await axiosTrello.get(`/boards/${args["idBoard"]}/lists`, { params: authParams })
        let relevantData = []
        for (let listInfo of trelloApiResponse["data"]) {
            const { id, name } = listInfo
            relevantData.push({"id": id, "name": name})
        }
        // let relevantDataCSV = papa.unparse(relevantData)
        // console.log(relevantDataCSV)
        return relevantData
    } catch (err) {
        return { error: err }
    }

}