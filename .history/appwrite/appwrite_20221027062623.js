import { Client, Account, Databases, Avatars } from 'appwrite'

const client = new Client()
client.setEndpoint('http://localhost/v1').setProject('6351b10aa89690061fa4')

const account = new Account(client)
const database = new Databases(client, '635361898603a91fe6f6')

export{
    client,
    account,
    database,
    avatar
}