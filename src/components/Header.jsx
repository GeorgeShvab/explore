import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="position-fixed paralax py-5 w-100">
                    <div className="container-md">
                        <div className="row align-items-center">
                            <div className="col-12 text-center">
                                <h1 className="text-saira fw-bold m-0 logo">
                                    Explore Ukraine
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
