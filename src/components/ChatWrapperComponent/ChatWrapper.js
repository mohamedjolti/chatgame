export const ChatWrapper = ({ children }) => {
  return  <div className="container">
        <div className="row chat-window col-xs-5 col-md-3" id="chat_window_1">
            <div className="col-xs-12 col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading top-bar">
                        <div className="col-md-8 col-xs-8">
                            <h3 className="panel-title"><span className="glyphicon glyphicon-comment"></span> Chat - Test</h3>
                        </div>
                        <div className="col-md-4 col-xs-4" >
                            <a href="#"><span id="minim_chat_window" className="glyphicon glyphicon-minus icon_minim"></span></a>
                            <a href="#"><span className="glyphicon glyphicon-remove icon_close" data-id="chat_window_1"></span></a>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>

        <div className="btn-group dropup">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                <span className="glyphicon glyphicon-cog"></span>
                <span className="sr-only">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu" role="menu">
                <li><a href="#" id="new_chat"><span className="glyphicon glyphicon-plus"></span> Novo</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-list"></span> Ver outras</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-remove"></span> Fechar Tudo</a></li>
                <li className="divider"></li>
                <li><a href="#"><span className="glyphicon glyphicon-eye-close"></span> Invisivel</a></li>
            </ul>
        </div>
    </div>
}