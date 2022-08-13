import { useState } from "react"
import { addUser } from "../../store/Actions/Actions";
import { connect } from 'react-redux'

function Login( {addUser} ) {
    const [username, setUsername] = useState("");

    const changeValue = (e) => {
        setUsername(e.target.value);
    }
    const submit = function() {
        addUser(username)
    }

    return (
        <div className="form-group">
            <input onChange={changeValue} id="username" placeholder="enter you name" />
            <button className="form-control" onClick={submit}>Login Or Regiter using this name</button>
        </div>
    )
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { addUser },)(Login)