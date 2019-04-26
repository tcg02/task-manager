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

    // db.collection('users').find({age: 31}).toArray((errors, users)=>{
    //   console.log(users)
    // })

    // db.collection('users').find({age: 31}).count((errors, count)=>{
    //   console.log(count)
    // })

    //  db.collection('tasks').findOne({_id: new ObjectID("5cc20797469e102fd4cc2b47")}, (error,task)=>{
    //    if(error){
    //     return console.log('Unable to fetch')
    //    }
    //    if(!task){
    //      return console.log('task not found')
    //    }

    //    console.log(task)

    //  })


    //  db.collection("tasks").find({completed:false}).toArray((error,tasks)=>{
    //    console.log("Incomplete tasks:")
    //    console.log(tasks)
    //  })

    // db.collection("users").updateOne({
    //   _id: new ObjectID("5cc2026c72c0b12bbcd102be")
    // },{
    //   $inc:{       
    //     age:-1
    //   }
    // }).then((result)=>{
    //   console.log(result)
    // }).catch((error)=>{
    //   console.log(error)
    // })
      
    db.collection("tasks").updateMany({
      completed:false
    },{
      $set:{
        completed:true
      }
    }).then((result)=>{
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })


})