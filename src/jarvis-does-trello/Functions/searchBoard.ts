// Realized it doesn't support searching for lists, so I dropped it. This function is currently incomplete
import { AxiosResponse, axiosTrello } from "../Util/axiosTrelloInstance"
import * as jarvis from "../index"

export async function searchBoard(args: {
    auth?: { "key": string | undefined, "token": string | undefined } | undefined,
    idBoard: string | object[],
    query: string,
    modelTypes?: "actions" | "boards" | "cards" | "members" | "organizations" | "all",
}) {

    let authParams: typeof args["auth"] = await jarvis.getAuthParams(args["auth"])
    let modelTypes: typeof args["modelTypes"] = await jarvis.getArgument({
        argument: args["modelTypes"],
        defaultValue: "all"
    })
    let idBoards: typeof args["idBoard"] = await jarvis.getArgument({
        argument: args["idBoard"],
        defaultValue: "mine"
    })
    
    try {
        let trelloApiResponse: AxiosResponse = await axiosTrello.get(`/search?query=${args["query"]}`, {
            params: {
                key: authParams["key"],
                token: authParams["token"],
                modelTypes,
                idBoards
            }
        })
        return trelloApiResponse["data"]
    } catch (err) {
        return { error: err }
    }

}