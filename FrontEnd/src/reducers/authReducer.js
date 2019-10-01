//'initState' là giá trị khởi tạo ban đầu
const initState = {
  user: null
};

const authReducer = (state = initState, action) => {
  //Tìm các type khác nhau của user, ở mỗi type khác nhau sẽ có action tương ứng
  //'action' có 2 thuộc tính cơ bản là 'type' & 'data' (payload)
  switch (action.type) {
    case "user_data_success":
      return {
        //'...state' copy toàn bộ state cũ và update data user mới
        ...state,
        user: action.data
      };
    case "user_data_failed":
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
