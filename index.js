const mongoClient = require("mongodb").MongoClient

const url = "mongodb://localhost:27017"

mongoClient.connect(url, (err,suc)=>{

    // creating connection

    if(err) console.log(err)
    console.log("Connected")

    // Creating DataBase and Data to be inserted

    const actualDb = suc.db("Human_Resources")
    // const employee = {
    //     firstName: "John",
    //     lastName: "Doe",
    //     salary: 25000,
    //     department: "HR",
    //     lastCompany: "X",
    //     lastSalary: 10000,
    //     overallExp: 2,
    //     contactInfo: 1234567890,
    //     yearGrad: 2016,
    //     gradStream: "CSE"
    // }
    // const employeeData = [{
    //     firstName: "Rohan",
    //     lastName: "Jame",
    //     salary: 30000,
    //     department: "Technical",
    //     lastCompany: "Y",
    //     lastSalary: 15000,
    //     overallExp: 1,
    //     contactInfo: 123456789,
    //     yearGrad: 2015,
    //     gradStream: "CSE"
    // },
    // {
    //     firstName: "Jame",
    //     lastName: "Doe",
    //     salary: 35000,
    //     department: "Accounts",
    //     lastCompany: "Z",
    //     lastSalary: 20000,
    //     overallExp: 1,
    //     contactInfo: 123456789,
    //     yearGrad: 2019,
    //     gradStream: "ECE"
    // },
    // {
    //     firstName: "Sao",
    //     lastName: "Avika",
    //     salary: 30000,
    //     department: "Sales",
    //     lastCompany: "Y",
    //     lastSalary: "15000",
    //     overallExp: 2,
    //     contactInfo: 123456894,
    //     yearGrad: 2014,
    //     gradStream: "CSE"
    // },
    // {
    //     firstName: "Jame",
    //     lastName: "Roh",
    //     salary: 35000,
    //     department: "Accounts",
    //     lastCompany: "Z",
    //     lastSalary: 15000,
    //     overallExp: 2,
    //     contactInfo: 123456789,
    //     yearGrad: 2019,
    //     gradStream: "EEE"
    // },
    // {
    //     firstName: "Rohan",
    //     lastName: "Jame",
    //     salary: 30000,
    //     department: "Technical",
    //     lastCompany: "Y",
    //     lastSalary: 15000,
    //     overallExp: 1,
    //     contactInfo: 123456789,
    //     yearGrad: 2015,
    //     gradStream: "CSE"
    // },
    // {
    //     firstName: "Jame",
    //     lastName: "Doe",
    //     salary: 35000,
    //     department: "Accounts",
    //     lastCompany: "Z",
    //     lastSalary: 20000,
    //     overallExp: 1,
    //     contactInfo: 123456789,
    //     yearGrad: 2019,
    //     gradStream: "ECE"
    // },
    // {
    //     firstName: "Sao",
    //     lastName: "Avika",
    //     salary: 30000,
    //     department: "Sales",
    //     lastCompany: "Y",
    //     lastSalary: "15000",
    //     overallExp: 2,
    //     contactInfo: 123456894,
    //     yearGrad: 2014,
    //     gradStream: "CSE"
    // },
    // {
    //     firstName: "Jame",
    //     lastName: "Roh",
    //     salary: 35000,
    //     department: "Accounts",
    //     lastCompany: "Z",
    //     lastSalary: 15000,
    //     overallExp: 2,
    //     contactInfo: 123456789,
    //     yearGrad: 2019,
    //     gradStream: "EEE"
    // }
    // ]

    // Creating Collection and Inserting the data

    // actualDb.createCollection("employees",(err,suc)=>{
    //     if(err) console.log(err)
    //     console.log("Collection Created")
    // })
    // actualDb.collection("employees").insertOne(employee,(err,suc)=>{
    //     if(err) console.log(err)
    //     console.log("Employee Inserted Successfully")
    // })
    // actualDb.collection("employees").insertMany(employeeData,(err,suc)=>{
    //     if(err) console.log(err)
    //     console.log("EmployeeData Inserted Successfully")
    // })

    // Querying the Documents

    // actualDb.collection("employees").find({salary: {$gt:30000}}).toArray((err,res)=>{
    //     if(err) console.log(err)
    //     console.log(res)
    // })

    // Updating the document

    // let query = {salary: 30000}
    // let newQuery = {salary: 28000}
    // actualDb.collection("employees").updateMany(query,{$set:newQuery},(err,res)=>{
    //     if(err) console.log(err)
    //     console.log(res)
    // })
    // actualDb.collection("employees").find({salary: 28000}).toArray((err,res)=>{
    //     if(err) console.log(err)
    //     console.log(res)
    // })

    //Deleting the Documents
    
    // let data = {lastCompany: "Z"}
    // actualDb.collection("employees").deleteMany(data,(err,res)=>{
    //     if(err) console.log(err)
    //     console.log(res)
    // })
    actualDb.collection("employees").find({lastCompany: "Z"}).toArray((err,res)=>{
        if(err) console.log(err)
        console.log(res)
    })
})
