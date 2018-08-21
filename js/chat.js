class ChatApplication extends React.Component {
    constructor(props){
        super(props);
        this.handleUserInteraction  = this.handleUserInteraction.bind(this);
        this.handleTextChange       = this.handleTextChange.bind(this);
        this.fetchJsonData          = this.fetchJsonData.bind(this);
        this.fetchJsonData          = this.fetchJsonData.bind(this);

        this.state = {
            userInteractionText: "",
            messagesParentArray: []
        }
    }

    handleTextChange(e){
        this.setState({
            userInteractionText:e.target.value
        });
    }

    handleUserInteraction(){
        console.log(this.state.userInteractionText);
        this.addEntryToMessageArray();
    }

    addEntryToMessageArray(){
        let userJson = {"title" : this.state.userInteractionText};
        this.state.messagesParentArray.push(userJson);
        this.fetchJsonData(userJson);
        console.log(this.state.messagesParentArray.length)
    }

    fetchJsonData(userJson){
        const source = "https://jsonplaceholder.typicode.com/todos/2";
        fetch(source)
            .then(response => response.json())
            .then(data => {
                let clonedArray = this.state.messagesParentArray.slice();
                clonedArray.push(data);
                this.setState({
                    userInteractionText:"",
                    messagesParentArray: clonedArray
                });
            });
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.messagesParentArray.length != this.state.messagesParentArray.length){
            console.log("lifeCycle method");
            let scrollableChatItems = document.querySelectorAll(".react-chat-display-entry");
            if(scrollableChatItems && scrollableChatItems.length >= 1){
                scrollableChatItems[scrollableChatItems.length-1].scrollIntoView();
            }
        }
    }

    render(){
        return(
            <div id="react-chat-application">
                <ChatDisplayDiv  messagesParent={this.state.messagesParentArray}/>
                <ChatInputDiv handleUserInteractionFn={this.handleUserInteraction} handleTextChangeFn={this.handleTextChange} textValueParent={this.state.userInteractionText}/>
            </div>
        )
    }
}

class ChatInputDiv extends React.Component {
    constructor(props){
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // html elements methods
    handleKeyPress(e){
        if(e.key == 'Enter'){
            this.props.handleUserInteractionFn(e);
        }
    }

    handleImageClick(e){
        this.props.handleUserInteractionFn(e);
    }

    handleChange(e){
        this.props.handleTextChangeFn(e);
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="say something" value={this.props.textValueParent}  onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                <img src="img/submit.jpg" alt="Go" height="25" width="25" onClick={this.handleImageClick}/>
            </div>
        )
    }
}

class ChatDisplayDiv extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="react-chat-display" className="react-chat-display-scroll">{
                this.props.messagesParent.map((item, index) => (
                    <p key={index} id={index} className="react-chat-display-entry">{item.title}</p>
                ))
            }
            </div>
        )
    }
}


ReactDOM.render(
    <ChatApplication/>,
    document.getElementById("react-chat-content")
);