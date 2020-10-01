import React from 'react';
import { Prompt } from 'react-router-dom'
import '../styles/ContactPage.css';

class ContactPage extends React.Component {
    state = {
        value: '',
        isEmpty: true
    }

    handleText = (e) => {
        const value = e.target.value;
        if (value.length > 0) {
            this.setState({
                value,
                isEmpty: false
            })
        } else {
            this.setState({
                value,
                isEmpty: true
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: '',
            isEmpty: true
        })
    }

    render() {
        return (
            <div className="contact">
                <form>
                    <h3>Napisz do nas!</h3>
                    <textarea value={this.state.value} placeholder="Wpisz wiadomość..." onChange={this.handleText}></textarea>
                    <button onClick={this.handleSubmit}>Wyślij</button>
                </form>
                <Prompt
                    when={!this.state.isEmpty}
                    message='Masz niewypełniony formularz. Chcesz opuścić stronę?' />
            </div>
        )
    }
}

export default ContactPage;