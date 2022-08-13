export function Message({ message }) {
    console.log(message)
    if (message.isReceived) {
        return (<div className="row msg_container base_receive">
            <div className="col-md-2 col-xs-2 avatar">

            </div>
            <div className="col-md-10 col-xs-10">
                <div className="messages msg_receive">
                    <p>{message.content}</p>
                    <time datetime="2009-11-13T20:00">
                     <strong>{message.sender} </strong>   -  {String(message.date)}
                    </time>
                </div>
            </div>
        </div>)
    }
    return (<div className="row msg_container base_sent">
        <div className="col-md-10 col-xs-10">
            <div className="messages msg_sent">
                <p>{message.content}</p>
                <time datetime="2009-11-13T20:00"><strong>Me-  </strong>  {String(message.date)}</time>
            </div>
        </div>
        <div className="col-md-2 col-xs-2 avatar">

        </div>
    </div>)

}