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

    // db.collection('users').findOne({_id: new ObjectID("5cc200faa197473f24d38d4a")},(error,user)=>{
    //   if(error){
    //     return console.log('Unable to fetch')
    //   }
    //   if(!user){
    //     return console.log('User not in database')
    //   }

    //   console.log(user)

    // })

    db.collection('users').find({age: 31}).toArray((errors, users)=>{
      console.log(users)
    })

    db.collection('users').find({age: 31}).count((errors, count)=>{
      console.log(count)
    })

     


})