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
            if (IsEmpty(name) ||!IsEmail(email) || IsEmpty(img) ||!IsMobile(number ) || IsEmpty(id) || IsEmpty(dept)){
                toast.error("Wrong information")
            }
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

                    <h1 className="bg-dark text-center text-secondary">Create Student List</h1>
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
                                type="number"
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
                        className="btn btn-primary mt-4 w-100"
                    >Save
                    </button>

                </div>
            </div>
            {/*<div className="LoginSignUpContainer">*/}
            {/*    <div className="LoginSignUpBox">*/}


            {/*        <form*/}
            {/*            className="signUpForm"*/}
            {/*            encType="multipart/form-data"*/}
            {/*            onSubmit={registerSubmit}*/}
            {/*        >*/}
            {/*            <div className="signUpName">*/}
            {/*                <FaceIcon/>*/}
            {/*                <input*/}
            {/*                    type="text"*/}
            {/*                    placeholder="Name"*/}
            {/*                    required*/}
            {/*                    name="name"*/}
            {/*                    value={name}*/}
            {/*                    onChange={registerDataChange}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="signUpEmail">*/}
            {/*                <MailOutlineIcon/>*/}
            {/*                <input*/}
            {/*                    type="email"*/}
            {/*                    placeholder="Email"*/}
            {/*                    required*/}
            {/*                    name="email"*/}
            {/*                    value={email}*/}
            {/*                    onChange={registerDataChange}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="signUpPassword">*/}
            {/*                <LockOpenIcon/>*/}
            {/*                <input*/}
            {/*                    type="password"*/}
            {/*                    placeholder="Password"*/}
            {/*                    required*/}
            {/*                    name="password"*/}
            {/*                    value={password}*/}
            {/*                    onChange={registerDataChange}*/}
            {/*                />*/}
            {/*            </div>*/}

            {/*            <div id="registerImage">*/}
            {/*                <img src={avatar} alt="Avatar Preview"/>*/}
            {/*                <input*/}
            {/*                    type="file"*/}
            {/*                    name="avatar"*/}
            {/*                    accept="image/*"*/}
            {/*                    onChange={setAvatar}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <input type="submit" value="Register" className="signUpBtn"/>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Fragment>
    );
};

export default LoginRegistration;