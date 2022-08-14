import { useState } from "react"
import { addUser } from "../../store/Actions/Actions";
import { connect } from 'react-redux'

function Login({ addUser }) {
    const [username, setUsername] = useState("");

    const changeValue = (e) => {
        setUsername(e.target.value);
    }
    const submit = function () {
        addUser(username)
    }

    return (
        <div id="login-wrapper">
            <h1>Chat Room</h1>
            <div className="form-group" id="login-form">
                <input className="form-control" onChange={changeValue} id="username" placeholder="enter you name" />
            </div>
            <button className="btn btn-primary" onClick={submit}>Login Or Regiter using this name</button>
        </div>
    )
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { addUser },)(Login)