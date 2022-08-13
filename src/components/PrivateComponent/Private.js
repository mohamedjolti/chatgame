import  Chat from "../ChatComponent/Chat";
import Login from "../LoginCompoent/Login";
import { connect } from 'react-redux'

function Private({ isLogged }) {
    console.log(isLogged)
    if (isLogged)
        return <Chat />
    return <Login />
}

const mapStateToProps = state => ({
    isLogged:state.users.isLogged

})

export default connect(mapStateToProps, {},)(Private)