import React, { Component } from 'react';

class More extends Component {
    render() {
        return (
            <div className="inner-content faq-text" id="more">
                <p className="padding-text">
                    <span className="header-yellow question">Q</span> 
                    <span className="q-text">
                        At which point of my studies can
                        I participate? Do I need to have certain
                        courses or skills before it?
                    </span>
                </p>
                <span className="header-blue answer">A</span>
                <p className="padding-text a-text">
                   You can apply at any point of your studies, even right after
                   your first year. Your motivation and urge to learn are more
                   important than the skills you already have.
                </p>
           <div className="qa"/>
              <p className="padding-text">
                <span className="header-yellow question">Q</span> 
                <span className="q-text">
                    I'm not sure if I'm skilled enough. Can I fail?
                </span>
             </p>
                <span className="header-blue answer">A</span>
                <p className="padding-text a-text">
                   WIMMA lab is a safe environment to try new things and
                   fail. You are here to learn!
                </p>
            </div>
        );
    }
}
export default More;