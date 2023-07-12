import React from 'react';

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label for="lname">Last name:</label><br />
                    <input type="text" value="" /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}

export default MyComponent;