//CRUD
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mangodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id =  new ObjectID()

// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error,client)=>{
    if(error){
      return  console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({    //    
    //     name: 'Peter',
    //     age: 30
    // }, (error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.insertedCount)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Not santosh',
    //     age: 13
    // },
    // {
    //     name: 'dahal',
    //     age:27
    // }
    // ],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.insertedIds)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:"Learn nodejs",
    //         completed:true
    //     },
    //     {
    //         description: "Learn MongoDB",
    //         completed: false
    //     },
    //     {
    //         description: "Implement learned knowlege to working site",
    //         completed: false
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert task')
    //     }

    //     console.log(result.insertedIds)
    // })



})