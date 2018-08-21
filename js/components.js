class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: 5
        }

        this.updateTime = this.updateTime.bind(this);
    }

    updateTime(timeValue){
        console.log(timeValue);
        this.setState({
                time: timeValue
            });
    }

    render() {
        return (
            <div>
                <TimerDisplay parentValue = {this.state.time}/>
                <TimerForm time={this.state.time} updateTimeFn={this.updateTime} />
            </div>
        )
    }
}



const TimerDisplay = (props) => {
     return ( <div> {props.parentValue} </div>);
 }


class TimerForm extends React.Component {
    constructor(props){
        super(props);
        this.handleTimeChange = this.handleTimeChange.bind(this);
    }

    handleTimeChange(e) {
        this.props.updateTimeFn(e.target.value);
    }

    render() {
        const timeValues = [5,10,15,20,25,30,35,40,45,50,55,60];
        return (
            <form>
                <select
                    onChange={this.handleTimeChange}
                    value={this.props.time}
                >
                    {
                        timeValues.map((val,idx) => (
                            <option key={idx} value={val}>{val}</option>
                        ))
                    }
                </select>
            </form>
        )
    }
}


ReactDOM.render(
    <Timer/>,
    document.getElementById("timer-content")
 );