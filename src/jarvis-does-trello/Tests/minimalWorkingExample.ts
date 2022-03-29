import * as jarvis from "../index"

// NodeJS-specific. Run "npm i dotenv" first
import dotenv from "dotenv"
dotenv.config({path: ".test.env"})
dotenv.config({path: ".env"})

async function main() {

const auth = {
    key: process.env.TRELLO_API_BOT_3_KEY1,
    token: process.env.TRELLO_API_BOT_3_TOKEN1
}



const data: any = await jarvis.getListsOnBoard({
    auth,
    idBoard: "60eb368964361a84796684c0"
})

let dataCSV = []
if (data.length) {
for (let item of data)
    dataCSV.push([item.name, item.id])
}
console.log(dataCSV)


// // Se em algum momento a automação parou no quadro "Ouvidoria da CMM", executar os códigos abaixo

// let listsOnBoardOuvidoriaDaCMM = [
//     { idList: process.env.TRELLO_OUVIDORIADACMM_DEMANDASRECEBIDAS },
//     { idList: process.env.TRELLO_OUVIDORIADACMM_EMANDAMENTO },
//     { idList: process.env.TRELLO_OUVIDORIADACMM_ENCERRADAS, exceptionList: ["62426f71a5a79e7d25c7c411"] },
//     { idList: process.env.TRELLO_OUVIDORIADACMM_EMANDAMENTORETORNARPARACENTRALDEDEMANDAS },
//     { idList: process.env.TRELLO_OUVIDORIADACMM_CONCLUIDASRETORNARPARACENTRALDEDEMANDAS },
//     { idList: process.env.TRELLO_OUVIDORIADACMM_TAXADEESGOTO }
// ]
// let list: any
// for (list of listsOnBoardOuvidoriaDaCMM) {
//     await jarvis.addChecklist({
//         auth,
//         idList: list.idList,
//         idCardSource: process.env.TRELLO_CENTRALDEDEMANDAS_DEMANDASRECEBIDAS_CARDCOMCHECKLIST,
//         exceptionList: list.exceptionList
//     })
// }


// for (let list of data)
//     await jarvis.archiveList({
//         auth,
//         idList: list["id"],
//         unarchive: true
// })

// console.log(data)


// jarvis.addDeadline({
//     auth: {
//         key: process.env.TRELLO_API_BOT_2_KEY1,
//         token: process.env.TRELLO_API_BOT_2_TOKEN1
//     },
//     dateIntervalInDays: 10,
//     idList: process.env.TRELLO_LIST1,
//     exceptionList: ["6228aba44ea965796be08e4b"]
// })

// jarvis.addChecklist({
//     auth: {
//         key: process.env.TRELLO_API_BOT_2_KEY1,
//         token: process.env.TRELLO_API_BOT_2_TOKEN1
//     },
//     idList: process.env.TRELLO_LIST1,
//     idCardSource: process.env.TRELLO_CARD3,
//     exceptionList: ["6228aba44ea965796be08e4b"]
// })

// jarvis.moveCards({
//     auth: {
//         key: process.env.TRELLO_API_BOT_2_KEY1,
//         token: process.env.TRELLO_API_BOT_2_TOKEN1
//     },
//     idListSource: process.env.TRELLO_LIST1,
//     idListTarget: process.env.TRELLO_LIST4,
//     idBoardTarget: process.env.TRELLO_BOARD2,
//     exceptionList: ["6228aba44ea965796be08e4b"]
// })

// Just to save the output into csv file. Does'nt work yet
// import papa from "papaparse"
// dotenv.config({path: "./src/jarvis-does-trello/Tests/envFiles/centralDeDemandas.env"})
// jarvis.getListsOnBoard({
//     auth: {
//         key: process.env.TRELLO_API_BOT_2_KEY1,
//         token: process.env.TRELLO_API_BOT_2_TOKEN1
//     },
//     idBoard: "60ed11c16582857837b9cf4f"
// })
// List files in folder
// const envFilesArray = await jarvis.listFilesInFolder({pathToFolder:"dist"})
// console.log(envFilesArray)

}

main()