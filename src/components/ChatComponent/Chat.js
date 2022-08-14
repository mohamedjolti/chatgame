import { ChatWrapper } from "../ChatWrapperComponent/ChatWrapper"
import { Message } from "../MessageComponent/Message"
import "./Chat.css"
import { connect } from 'react-redux'
import { addMessage, fetchMessges } from "../../store/Actions/Actions"
import { useEffect, useState } from "react"
import { scrolHelper } from "../../helpers/scrollHelper"
import { clearMessageInput } from "../../helpers/clearMessageInput"

function Chat({ addMessage, username, messages, fetchMessges }) {
    const [message, setMessage] = useState("");

    const changeValue = (e) => {
        setMessage(e.target.value);
    }
    const messagesTemplate = messages.map((message) => {
        return <Message key={message.date} message={{
            isReceived: (message.sender != username) ? true : false,
            content: message.content,
            date: message.date,
            sender: message.sender
        }}
        />
    })
    const sendMessage = () => {
        addMessage({
            sender: username,
            date: new Date(),
            content: message
        })
        scrolHelper();
        clearMessageInput();
    }
    useEffect(() => {
        fetchMessges();
        scrolHelper();
        clearMessageInput()
    }, []);
    window.addEventListener("storage", () => {
        fetchMessges();
        scrolHelper();
    });

    return (
        <ChatWrapper>
            <div className="panel-body msg_container_base">
                {messagesTemplate}
            </div>
            <div className="panel-footer">
                <div className="input-group">
                    <input onChange={changeValue} id="btn-input" type="text" className="form-control input-sm chat_input" placeholder="Write your message here..." />
                    <span className="input-group-btn">
                        <button onClick={sendMessage} className="btn btn-primary btn-sm" id="btn-chat">Send</button>
                    </span>
                </div>
            </div>
        </ChatWrapper>
    )

}

const mapStateToProps = state => ({
    isLogged: state.users.isLogged,
    messages: state.messages.messages,
    username: state.users.username

})


export default connect(mapStateToProps, { addMessage, fetchMessges },)(Chat)