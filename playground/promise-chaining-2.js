require("../src/db/mongoose")
const Task = require("../src/models/task")

// Task.findByIdAndDelete('5cc7321b919bf42bbcf38d0f').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:fasle})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id)=>{
   const task = await Task.findByIdAndDelete(id)
   const count = await Task.countDocuments({completed:false})
   return count
}


deleteTaskAndCount('5cc732e95c627d2cf8dfdfee').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})