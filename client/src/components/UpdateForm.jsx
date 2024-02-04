import { Fragment, useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router';
import {getStudentById, updateStudent} from '../ApiRequest/Api.js';
import { toast } from 'react-toastify';

const UpdateForm = () => {
    const { id } = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [img, setImg] = useState('');
    const [number, setNumber] = useState('');
    const [ID, setID] = useState('');
    const [dept, setDept] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) {
                    toast.info('No ID found in the URL parameters.');
                    return;
                }

                const result = await getStudentById(id);

                if (!result) {
                    toast.error('Failed to fetch data for the given ID.');
                    return;
                }

                setName(result.name);
                setEmail(result.email);
                setImg(result.img);
                setNumber(result.number);
                setID(result.id);
                setDept(result.dept);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [id]);
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const navigate= useNavigate()
    const SaveData = async (e) => {
        e.preventDefault()
        try {
            const result = await updateStudent(name, img, number, ID, dept,id)
            if (result){
                navigate('/list')
                toast.success('Update successful')

            }
            window.location.reload()

        }
        catch (e) {
            console.log(e)
        }
    };



    return (
        <Fragment>
            <div className="updateFormPage">
                <div className="updateFormimgBox">
                    <img src={img} className="justify-content-center"
                         style={{height: "450px", width: "450px"}} alt=""/>
                    <hr/>
                    <div>
                        <label>Image</label>
                        <input
                            type="file"
                            className="form-control"
                            onChange={handleImageChange}
                            required
                        />
                    </div>
                </div>
                <div className="updateFormbox ">

                    <h1 className=" text-center">Edit Student details</h1>
                    <div className="col-md-12">
                        <label>Name</label>
                        <input
                            type="text"
                            defaultValue={name}
                                className="form-control"
                                placeholder="Enter your name..."
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12 my-4">
                            <label>Email</label>
                            <input
                                type="email"
                                defaultValue={email}
                                className="form-control"
                                placeholder="Enter your email..."
                                onChange={(e) => setEmail(e.target.value)}
                                readOnly={true}
                            />
                        </div>

                        <div className="col-md-12">
                            <label>Phone No:</label>
                            <input
                                type="number"
                                defaultValue={number}
                                className="form-control"
                                placeholder="Enter your number..."
                                onChange={(e) => setNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12 my-4">
                            <label>ID</label>
                            <input
                                type="text"
                                defaultValue={ID}
                                className="form-control"
                                placeholder="Enter your ID"
                                onChange={(e) => setID(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12">
                            <label>Dept</label>
                            <input
                                type="text"
                                defaultValue={dept}
                                className="form-control"
                                placeholder="Enter your Dept..."
                                onChange={(e) => setDept(e.target.value)}
                                required
                            />
                        </div>
                    <button
                        onClick={SaveData}
                        className="bttn  mt-5 w-100"
                    >Update
                    </button>

                </div>
            </div>

        </Fragment>
    );
};

export default UpdateForm;