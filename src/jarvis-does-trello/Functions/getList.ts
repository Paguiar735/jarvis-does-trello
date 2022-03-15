import { AxiosResponse, axiosTrello } from "../Util/axiosTrelloInstance"


export async function getList(args: {
    auth?: { "key": string | undefined, "token": string | undefined } | undefined,
    idList: string | object[],
    getCardsInList?: boolean
}): Promise<object> {

    let trelloApiResponse: AxiosResponse
    let authParams: { "key": string | undefined, "token": string | undefined } | undefined;
    let extraParm = ""

    if (!args.auth || args.auth === { "key": undefined, "token": undefined }) {
        authParams = undefined
    } else {
        authParams = { "key": args.auth.key, "token": args.auth.token }
    }
    
    if (args["getCardsInList"]) {
        extraParm = "cards"
    }

    try {
        trelloApiResponse = await axiosTrello.get(`/lists/${args["idList"]}/${extraParm}`, { params: authParams })
        return trelloApiResponse["data"]
    } catch (err) {
        return { error: err }
    }

}