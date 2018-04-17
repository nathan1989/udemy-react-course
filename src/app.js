class IndecisionApp extends React.Component {
    render(){
        const title = 'Test'
        const subtitle = 'Hey there'
        const options = [
            'thing one',
            'thing two',
            'thing four'
        ]

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action/>
                <Options options={options} />
                <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick(){
        alert('handlePick')
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

// All Remove All button
// setup handleRemoveAll -> alert some message
// setup onClick to fire the method

class Options extends React.Component {
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll(){
        console.log(this.props.options)
    }
    render(){
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {
                    this.props.options.map((option, i) => <Option key={i} optionText={option}/>)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return (
            <p>{this.props.optionText}</p>
        )
    }
}

// 1. Setup form with text input and submit
// 2. wire up onsubmit
// 3. define method handleAddOption -> fetch value typed -> if value, alert

class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault()
        const value = e.target.elements.option.value
        if(value){
            alert(`Your value is: ${value}`)
        }
    }
    render(){
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))