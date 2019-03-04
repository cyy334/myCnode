function details(state={
    data: {
        author: {
            loginname:"",
            avatar_url:""
        },
        replies:[],
        reply_count:0,
        create_at:"",
        good: false,
        tab: true,
    },
    loading: true
},action){
    switch(action.type){
        case "DETAILS_UPDATA":
            return {
                loading: true,
                data: state.data
            }
        case "DETAILS_UPDATA_SUCCESS":
            return {
                loading: false,
                data: action.data.data
            }
        case "DETAILS_UPDATA_ERROR":
            return {
                loading: true,
                data: {
                    data: {
                        author: {
                            loginname:"",
                            avatar_url:""
                        },
                        replies:[],
                        reply_count:0,
                        create_at:"",
                        good: false,
                        tab: true,
                    }
                }
            }
        default:
            return state;
    }
}
export default details;