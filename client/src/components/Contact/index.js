import {Component} from "react";
import contact_us from "../../images/contact_us.jpg"
import './index.css';

class Contact extends Component{
    render(){
        return(
            <div className="contact-container">
                <h1>Contact us</h1>
                <div className="inside-contact-container">
                    <img className="contact-img" src={contact_us} alt="conatct-us" />
                    <form className="form-container">
                        <div className="first-last-name-container">
                            <div className="name-container">
                                <label>First Name</label>
                                <input type="text" />
                            </div>
                            <div className="name-container">
                                <label>Last Name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <label>Email</label>
                        <input type="email"/>
                        <label>Message</label>
                        <textarea rows="4" cols="50"></textarea>
                        <input className="button btn-submit" type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact