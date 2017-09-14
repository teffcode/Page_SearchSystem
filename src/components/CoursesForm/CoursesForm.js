import React from 'react';

import '../../styles/CoursesForm.css';

class CoursesForm extends React.Component {

    render() {

        return (
            <div>
                <div className="container"></div>
                <div className="container__banner">   
                    <form className="container__form">
                        <h1 className="title__search">Course Search</h1>
                        <div>
                            <input 
                                className="input__search" 
                                placeholder="Search courses and providers..."
                            />
                        </div>
                        <div>
                            <button className="button__search">
                            +
                            </button>
                        </div>
                        <h2 className="subtitle__search">Florida | Registered Nurse Florida</h2>
                    </form>
                </div>
            </div>
        )
    }
}

export default CoursesForm;