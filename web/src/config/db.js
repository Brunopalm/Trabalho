import { bindActionCreators } from "redux";
import { actions as toastrActions } from "react-redux-toastr";
import { baseApiUrl, notificConfig, axios } from "../config";

export async function getDb(db, id) {
  try {
    var response = {};
    if (id) {
      response = await axios.get(`${baseApiUrl}/${db}/${id}`);
    } else {
      response = await axios.get(`${baseApiUrl}/${db}`);
    }
    return response;
  } catch (err) {
    console.log(err);
  }
}
// export async function getPeopleByCategory(category, self){
//     try{
//         const response = await axios
//           .get(`${baseApiUrl}/people/${category}`);

//         let peoples = response.data;
//         self.setState({
//         [peoples.title]: peoples.data.map((people, i) => (
//             self[peoples.title]({people, i}, peoples.title)
//           )),
//         });

//     }catch (err) {
//         console.log(err);
//     }

// }

export const removeDocumentDb = (id) => async (dispatch) => {
  const toastr = bindActionCreators(toastrActions, dispatch);
  try {
    const res = await axios.delete(`${baseApiUrl}/documents/${id}`);
    await toastr.add(notificConfig(res.data, "success"));
  } catch (err) {
    await toastr.add(notificConfig(err.response.data, "error"));
  }
};

export const setDocumentDb = (id) => async (dispatch) => {
  const toastr = bindActionCreators(toastrActions, dispatch);
  try {
    const res = await axios.post(`${baseApiUrl}/documents`, id);
    await toastr.add(notificConfig(res.data, "success"));
  } catch (err) {
    await toastr.add(notificConfig(err.response.data, "error"));
  }
};
export default { setDocumentDb, getDb, removeDocumentDb };
