import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            imageUrl: props.imageUrl,
            title: props.title,
            subtitle: props.subTitle,
        }
    }

    render() {
        return (
            <div className="card p-2 border-0 text-center postion-relative mb-2">
                <img
                    className="card-img-top"
                    src={this.state.imageUrl}
                    alt={this.title}
                />
                <div className="card-body position-absolute z-index-5 w-100 px-0">
                    <h4 className="card-title text-simonetta fs-5">
                        {this.state.title}
                    </h4>
                    <p className="card-subtitle text-sura text-gray fs-7">
                        {this.state.subtitle}
                    </p>
                </div>
            </div>
        )
    }
}

export default Card
