// import axios from "axios";
// import store from "../redux/store/store.js";
// import {HideLoader, ShowLoader} from "../redux/slice/settingsSlice.js";
// // import {setToken} from "../helper/SessionHelper.js";
// // const BaseURI = "https://simple-task-1.vercel.app";
// const BaseURI = "http://localhost:8005/api/v1";
//
// export async function createStudent(name, email, img, number, id, dept) {
//     store.dispatch(ShowLoader())
//     try {
//         let URL = BaseURI + "/create";
//         let PostBody = {
//             name: name,
//             email: email,
//             img: img,
//             number: number,
//             id: id,
//             dept: dept
//         };
//
//         const res = await axios.post(URL, PostBody);
//         store.dispatch(HideLoader())
//
//         return res.data.status === "success";
//     } catch (err) {
//         store.dispatch(HideLoader())
//         console.error(err);
//         return false;
//     }
// }
//
//
//
// export async function getStudentList() {
//     try {
//         let URL = BaseURI + "/read";
//         const res = await axios.get(URL);
//         console.log('API Response:', res);
//
//         if (res.status === 200) {
//             return res.data['data'];
//         } else {
//             console.error("Unexpected status code:", res.status);
//             console.error("Response Data:", res.data);
//             return false;
//         }
//     } catch (e) {
//         console.error("Error:", e.message);
//         console.error("Error Details:", e.response);
//         return false;
//     }
// }
//
//
//
//
// export async function getStudentById(id) {
//     store.dispatch(ShowLoader())
//
//     try {
//         let URL= BaseURI + "/readByID/" + id;
//
//         const res = await axios.get(URL)
//         store.dispatch(HideLoader())
//         if(res.status===200){
//             return res.data['data']
//         }else {
//             return false
//         }
//     }
//     catch (e) {
//         store.dispatch(HideLoader())
//         console.log(e)
//         return false;
//     }
// }
//
//
//
//
// export async function updateStudent(name, img, number, id, dept,_id) {
//     store.dispatch(ShowLoader())
//
//     try {
//         let URL=BaseURI+"/update/"+_id;
//         let PostBody = {
//             name: name,
//             img: img,
//             number: number,
//             id: id,
//             dept: dept
//         };
//
//         const res = await axios.post(URL,PostBody)
//         store.dispatch(HideLoader())
//         if (res.status === 200){
//             return true
//         }
//     }
//     catch (e) {
//         store.dispatch(HideLoader())
//         console.log(e)
//         return false
//     }
// }
//
//
//
//
// export async function deleteStudent(id) {
//     store.dispatch(ShowLoader())
//
//     try {
//         let URL=BaseURI+"/delete/"+id;
//
//         const res = await axios.post(URL)
//         store.dispatch(HideLoader())
//         return res.status === 200;
//     }
//
//     catch (e) {
//         store.dispatch(HideLoader())
//         console.log(e)
//         return false
//     }
//
// }





import axios from "axios";
import store from "../redux/store/store.js";
import { HideLoader, ShowLoader } from "../redux/slice/settingsSlice.js";

const BaseURI = "http://localhost:8005/api/v1";

export async function createStudent(name, email, img, number, id, dept) {
    store.dispatch(ShowLoader());
    try {
        let URL = BaseURI + "/create";
        let PostBody = { name, email, img, number, id, dept };

        const res = await axios.post(URL, PostBody);
        store.dispatch(HideLoader());

        return res.data.status === "success";
    } catch (err) {
        store.dispatch(HideLoader());
        console.error(err);
        return false;
    }
}

export async function getStudentList() {
    try {
        let URL = BaseURI + "/read";
        const res = await axios.get(URL);

        if (res.status === 200) {
            return res.data['data'];
        } else {
            console.error("Unexpected status code:", res.status);
            console.error("Response Data:", res.data);
            return false;
        }
    } catch (e) {
        console.error("Error:", e.message);
        console.error("Error Details:", e.response);
        return false;
    }
}

export async function getStudentById(id) {
    store.dispatch(ShowLoader());
    try {
        let URL = BaseURI + "/readByID/" + id;
        const res = await axios.get(URL);
        store.dispatch(HideLoader());

        if (res.status === 200) {
            return res.data['data'];
        } else {
            return false;
        }
    } catch (e) {
        store.dispatch(HideLoader());
        console.log(e);
        return false;
    }
}

export async function updateStudent(name, img, number, id, dept, _id) {
    store.dispatch(ShowLoader());

    try {
        let URL = BaseURI + "/update/" + _id;
        let PostBody = { name, img, number, id, dept };

        const res = await axios.post(URL, PostBody);
        store.dispatch(HideLoader());

        if (res.status === 200) {
            return true;
        }
    } catch (e) {
        store.dispatch(HideLoader());
        console.log(e);
        return false;
    }
}

export async function deleteStudent(id) {
    store.dispatch(ShowLoader());

    try {
        let URL = BaseURI + "/delete/" + id;
        const res = await axios.post(URL);
        store.dispatch(HideLoader());

        return res.status === 200;
    } catch (e) {
        store.dispatch(HideLoader());
        console.log(e);
        return false;
    }
}
