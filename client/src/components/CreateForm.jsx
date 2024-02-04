import { Fragment, useState } from 'react';
import png from "../assets/img/profile.png"
import {IsEmail, IsEmpty, IsMobile} from "../helper/FormHelper.js";
import {toast} from "react-toastify";
import {Create} from "../ApiRequest/Api.js";
import {useNavigate} from "react-router";

const LoginRegistration = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [img, setImg] = useState(png)
    const [number, setNumber] = useState("")
    const [id, setId] = useState("")
    const [dept, setDept] = useState("")

    const handleImageChange = (e) => {
        // Assuming you are uploading a single file
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const navigate  = useNavigate()

    const SaveData =async (e) => {
        e.preventDefault();

        try {
            if (IsEmpty(name)){
                toast.error("Name Required")
            }
            if (IsEmpty(email)){
                toast.error("Email Required")
            }
            if (IsEmpty(img)){
                toast.error("Photo Required")
            }
            if (IsEmpty(number)){
                toast.error("Phone Number Required")
            }
            if (IsEmpty(id)){
                toast.error("Id Required")
            }
            if (IsEmpty(dept)){
                toast.error("Department Name Required")
            }
            // if (!IsEmail()){
            //     toast.error("Email is not valid")
            // }
            // if (!IsMobile()){
            //     toast.error("Mobile Number is not valid")
            // }
            else {
                const data  =  await Create(name, email, img, number, id, dept)
                if (data){
                    navigate('/list')
                    toast.success("Success")
                }
            }
        }
        catch (e) {
            console.log(e)
        }
    };
    return (
        <Fragment>
            <div className="formPage">
                <div className="formbox ">

                    <h1 className="text-center">Create Student List</h1>
                    <div className=" row">
                        <div className="col-md-12">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter your name..."
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your email..."
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12">
                            <label>Image</label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={handleImageChange}
                                required
                            />
                        </div>
                        <div className="col-md-12">
                            <label>Phone No:</label>
                            <input
                                type="tel"
                                name="number"
                                className="form-control"
                                placeholder="Enter your number..."
                                onChange={(e) => setNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12">
                            <label>ID</label>
                            <input
                                type="text"
                                name="id"
                                className="form-control"
                                placeholder="Enter your ID"
                                onChange={(e) => setId(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12">
                            <label>Dept</label>
                            <input
                                type="text"
                                name="dept"
                                className="form-control"
                                placeholder="Enter your Dept..."
                                onChange={(e) => setDept(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button
                        onClick={SaveData}
                        className="bttn mt-4 w-100"
                    >Register
                    </button>

                </div>
            </div>
        </Fragment>
    );
};

export default LoginRegistration;