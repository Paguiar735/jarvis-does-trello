import * as jarvis from "../index"
import { AxiosResponse, axiosTrello } from "../Util/axiosTrelloInstance"


export async function archiveList(args: {
    auth?: { "key": string | undefined, "token": string | undefined } | undefined,
    unarchive?: boolean,
    idList: string
}): Promise<any>
{

    const authParams: typeof args["auth"] = await jarvis.getAuthParams(args["auth"])
    const stateOfList: typeof args["unarchive"] = await jarvis.getArgument({
        argument: args["unarchive"],
        defaultValue: false
    })

    try {
        const trelloApiResponse: AxiosResponse = await axiosTrello.put(`/lists/${args["idList"]}/closed`, {}, {
            params: {
                key: authParams["key"],
                token: authParams["token"],
                value: !stateOfList
            }
        })
        return trelloApiResponse["data"]
    } catch (err) {
        console.log({error: err })
    }

}