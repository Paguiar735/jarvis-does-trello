export async function getAuthParams(args: { "key": string | undefined, "token": string | undefined } | undefined)
{
    if (!args || args === { "key": undefined, "token": undefined }) {
        return undefined
    } else {
        return { "key": args["key"], "token": args["token"] }
    }
}