const mongoose= require('mongoose')
const DataSchema = mongoose.Schema({
    name :{type:String},
    img :{type:String},
    email :{type:String},
    number :{type:Number},
    id :{type:String},
    dept :{type:String},
    CreateDate:{type:Date , default:Date.now()}
},{versionKey:false})


const ProductsModel = mongoose.model('students', DataSchema)

module.exports = ProductsModel;