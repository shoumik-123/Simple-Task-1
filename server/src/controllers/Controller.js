
const Model = require('../models/Model');
// const jwt = require('jsonwebtoken');


//Create
module.exports.Create = async function (req, res) {
    try {
        let reqBody = req.body;
        let user = await Model.create(reqBody);

        if (user) {
            res.status(201).json({ status: "success", data: user });
        } else {
            res.status(400).json({ status: "fail" });
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({ status: "fail", data: err.message });
    }
}


// //login
// module.exports.Login = async function(req,res){
//     try {
//
//         let reqBody= req.body;
//         let user =await Model.aggregate([
//                 {$match:reqBody },
//                 {$project:{_id:0,email:1}}
//             ]
//         )
//         // console.log("user",user)
//         if(user.length > 0){
//             let payload =  {exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: user}
//             let token = jwt.sign( payload , process.env.SECRET_KEY);
//
//             res.status(200).json({status:"success" , token: token ,  data:user})
//         }
//         else{
//             res.status(401).json({status:"Unauthorized"})
//         }
//     }
//     catch(err){
//         res.status(400).json({status : "fail" , data : err})
//     }
//
// }

//Read
module.exports.Read = async function (req, res) {
    try {
        let result = await Model.find();

        if (result.length > 0) {
            return res.status(200).json({ status: 'success', data: result });
        }

        return res.status(404).json({ status: 'fail', message: 'No data found' });
    } catch (err) {
        console.error('Error:', err);

        return res.status(500).json({ status: 'error', message: 'Internal Server Error', data: err.message });
    }
};

// ReadById
module.exports.ReadByID = async function (req, res) {
    try {
        let id = req.params.id;

        const data = await Model.findOne({ _id: id });

        if (data) {
            return res.status(200).json({ status: "Success", data: data });
        } else {
            return res.status(404).json({ status: "Fail", message: "Data not found" });
        }
    } catch (e) {
        return res.status(500).json({ status: "Fail", message: "Internal Server Error", data: e.message });
    }
};


//UpdateForm
module.exports.Update =async function (req, res){
    try {
        let id =req.params.id;
        let Query = {_id:id}
        let reqBody = req.body;

        const data = await     Model.updateOne(Query,reqBody)

        if (data){
            res.status(200).json({status: "Updated", data: data})
        }
        res.status(400).json({status: "Fail"})
    }
    catch (e) {
        res.status(400).json({status: "Fail", data: e})

    }
}


// Delete
module.exports.Delete =async function (req, res)  {
    try {
        let id = req.params.id;
        let query = { _id: id };

        const data = await Model.deleteOne(query)

        if (data.deletedCount === 1) {
            res.status(204).json({ status: "Success", message: "Record deleted successfully." });
        } else {
            res.status(404).json({ status: "Fail", message: "Record not found." });
        }
    }
    catch (err){
        res.status(500).json({ status: "Error", message: "Internal Server Error", error: err });

    }
}



















