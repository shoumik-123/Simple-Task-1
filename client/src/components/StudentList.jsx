import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {Delete, Read} from "../ApiRequest/Api.js";
import {toast} from "react-toastify";
import store from "../redux/store/store.js";
import {HideLoader, ShowLoader} from "../redux/slice/settingsSlice.js";

const StudentList = () => {


    let [DataList, SetDataList]= useState([])

    const navigate = useNavigate()




    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Fetching data...');
                const result = await Read();
                console.log('Data fetched:', result);
                SetDataList(result);
            } catch (error) {
                console.error('Error fetching data:', error);

                // Log additional details if available
                if (error.response) {
                    console.error('Error Response Data:', error.response.data);
                    console.error('Error Response Status:', error.response.status);
                    console.error('Error Response Headers:', error.response.headers);
                } else if (error.request) {
                    console.error('Error Request:', error.request);
                } else {
                    console.error('Error Details:', error.message);
                }
            }
        };

        fetchData();


    }, []);

    const DeleteItem = async (_id) => {
        store.dispatch(ShowLoader());
        try {
            await Delete(_id);
            SetDataList((prevData) => prevData.filter((item) => item._id !== _id));
            store.dispatch(HideLoader());
            toast.success("Deleted");
        } catch (e) {
            store.dispatch(HideLoader());
            console.log(e);
        }
    };



    const UpdateItem = (_id) => {
        navigate('/update/'+_id)
    };

    const goToRegister = () => {
        navigate("/create")
    };
    if(DataList.length>0){
        return (
            <div>
                <div className="container-fluid ">
                    <table className="table text-secondary table-bordered">
                        <thead>
                        <tr>
                            <th className="p-3 tableHeader">No</th>
                            <th className="p-3 tableHeader">Image</th>
                            <th className="p-3 tableHeader">Name</th>
                            <th className="p-3 tableHeader">Email</th>
                            <th className="p-3 tableHeader">Phone No</th>
                            <th className="p-3 tableHeader">Student ID</th>
                            <th className="p-3 tableHeader">Dept</th>
                            <th className="p-3 tableHeader">Update</th>
                            <th className="p-3 tableHeader">Delete</th>
                        </tr>
                        </thead>

                        <tbody>

                        {DataList.map((item, i) => {
                            return (
                                <tr key={item._id}>
                                    <td className="p-3">{i + 1}</td>
                                    <td className="p-3"><img style={{height:"70px",width:"70px" }} src={item.img}/></td>
                                    <td className="p-3">{item.name}</td>
                                    <td className="p-3">{item.email}</td>
                                    <td className="p-3">{item.number}</td>
                                    <td className="p-3">{item.id}</td>
                                    <td className="p-3">{item.dept}</td>
                                    <td className="py-2">
                                        <button onClick={UpdateItem.bind(this, item._id)}
                                                className="btn btn-info mx-2">Update
                                        </button>
                                    </td>
                                    <td className="py-2">
                                        <button onClick={DeleteItem.bind(this, item._id)}
                                                className="btn btn-danger mx-2">Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
    else {
        return (
            <div className="noStudent">
                <h1>There are no students there at the moment</h1>
                <button onClick={goToRegister}>Registration</button>
            </div>
        )
    }
};

export default StudentList;