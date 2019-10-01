// -------------------------- GET DATA --------------------------
export const getDataByCondition = condition => dispatch => {
  console.log(condition);
  const data = [
    {
      title: "Data exchange inter",
      author: "Jason Henderson",
      type: "Academic Journal",
      issuedOn: "15/08/2013",
      publisher: "IEEE",
      doi: "4320121234",
      rating: "5"
    },
    {
      title: "Data exchange inter 01",
      author: "Tuan Bui",
      type: "ABC Journal",
      issuedOn: "18/08/2013",
      publisher: "NZ",
      doi: "23232343",
      rating: "2.1"
    },
    {
      title: "Data exchange inter 02",
      author: "Aladin",
      type: "DEF Journal",
      issuedOn: "22/08/2013",
      publisher: "Middle Earth",
      doi: "34534534",
      rating: "4.2"
    },
    {
      title: "Data exchange inter 03",
      author: "Osama",
      type: "GHK Journal",
      issuedOn: "11/08/2013",
      publisher: "IS",
      doi: "121234344",
      rating: "3"
    }
  ];
  getDataSuccess(dispatch, data);
};

const getDataSuccess = (dispatch, data) => {
  dispatch({
    type: "home_data_success",
    data
  });
};
