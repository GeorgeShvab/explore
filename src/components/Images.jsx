import { specialCharMap } from '@testing-library/user-event/dist/keyboard'
import React from 'react'

import Card from './Card'

class Images extends React.Component {
    componentDidMount() {
        ;(async () => {
            await fetch('https://192.168.0.97:3000/data.json')
                .then((res) => res.json())
                .then((res) => {
                    this.setState({ data: res })
                })
        })()
    }

    render() {
        if (this.state) {
            console.log(this.state.data)
        }
        return (
            <main className="pb-5">
                <div className="container-md">
                    <div className="row">
                        {this.state ? (
                            <>
                                <div className="col-sm-3 px-1">
                                    {this.state.data.firstColumn.map(
                                        (item, index) => (
                                            <Card
                                                imageUrl={item.imageUrl}
                                                title={item.title}
                                                subTitle={item.subTitle}
                                                key={index}
                                            />
                                        )
                                    )}
                                </div>
                                <div className="col-sm-3 px-1">
                                    {this.state.data.secondColumn.map(
                                        (item, index) => (
                                            <Card
                                                imageUrl={item.imageUrl}
                                                title={item.title}
                                                subTitle={item.subTitle}
                                                key={index}
                                            />
                                        )
                                    )}
                                </div>
                                <div className="col-sm-3 px-1">
                                    {this.state.data.thirdColumn.map(
                                        (item, index) => (
                                            <Card
                                                imageUrl={item.imageUrl}
                                                title={item.title}
                                                subTitle={item.subTitle}
                                                key={index}
                                            />
                                        )
                                    )}
                                </div>
                                <div className="col-sm-3 px-1">
                                    {this.state.data.fourthColumn.map(
                                        (item, index) => (
                                            <Card
                                                imageUrl={item.imageUrl}
                                                title={item.title}
                                                subTitle={item.subTitle}
                                                key={index}
                                            />
                                        )
                                    )}
                                </div>
                            </>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </main>
        )
    }
}

export default Images
