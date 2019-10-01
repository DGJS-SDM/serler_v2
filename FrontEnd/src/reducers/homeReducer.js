//'initState' là giá trị khởi tạo ban đầu
const initState = {
    data: [],
  };
  
  const homeReducer = (state = initState, action) => {
    //Tìm các type khác nhau của user, ở mỗi type khác nhau sẽ có action tương ứng
    //'action' có 2 thuộc tính cơ bản là 'type' & 'data' (payload)
    switch (action.type) {
      case "home_data_success":
        return {
          //'...state' copy toàn bộ state cũ và update data user mới
          ...state,
          data: action.data
        };
      default:
        return state;
    }
  };
  
  export default homeReducer;
  