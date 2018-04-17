const app = {
    showDetails: false
}

const toggleDetails = () => {
    app.showDetails = !app.showDetails
    render()
}

const appRoot = document.getElementById('app');

function render() {
    const template = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={toggleDetails}>{app.showDetails ? 'Hide' : 'Show'} details</button>
            {app.showDetails && (
                <p>Here are details</p>
            )}
        </div>
    )

    ReactDOM.render(template, appRoot)
}

render()