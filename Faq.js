import React, { Component } from 'react';
import ShowMore from './ShowMore';

class Faq extends Component {
    render() {
        return(
            <div className="Faq" id="faq">
                <h1 className="header-yellow"><span className="cool-span">FAQ</span></h1>
                <div className="inner-content faq-text">
                    <span className="header-yellow question">Q</span> 
                    <p className="padding-text">
                        <span className="q-text">
                            Do I get paid in WIMMA lab?
                        </span>
                    </p>
                    <span className="header-blue answer">A</span>
                    <p className="padding-text a-text">
                            No, but you get ECTS credits and can apply for student allowance.
                            You will also expand your professional network and learn
                            valuable skills you will need in working life.
                    </p>
                <div className="qa"/>
                    <p className="padding-text">
                        <span className="header-yellow question">Q</span> 
                        <span className="q-text">
                            Do I get an employment certificate and referees?
                        </span>
                    </p>
                <span className="header-blue answer">A</span>
                    <p className="padding-text a-text">
                       Yes, both.
                    </p>
               <div className="qa"/>
                  <p className="padding-text">
                    <span className="header-yellow question">Q</span> 
                    <span className="q-text">
                        How are the participants selected?
                    </span>
                </p>
                <span className="header-blue answer">A</span>
                    <p className="padding-text a-text">
                        By interviews. The purpose of the interviews is to learn
                        about students' motivation and skills. There's a demand
                        for people with various skills.
                </p>
            </div>
            <ShowMore/>
        </div>
        );
    }
}
export default Faq;