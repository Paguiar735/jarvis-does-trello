export async function getArgument(args: {
    argument: any,
    defaultValue: any
}): Promise<any> {
    let response = await args["argument"]
    if (response === undefined)
        response = await args["defaultValue"]
    return response
}