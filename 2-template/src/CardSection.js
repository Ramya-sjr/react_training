import React from 'react'
import Card from './Card'

const CardSection = () => {
    return (
        <section className="contact bg-success ">
            <div className="container ">
                <h2 className="text-white">
                    We love new friends!
                </h2>
                <div className="row">
                    <div className="col-4">
                        <Card title="Card 1" buttonText="BUTTON ONE" cardText="CARD TEXT ONE" src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </div>
                    <div className="col-4">
                        <Card title="Card 2" buttonText="BUTTON TWO" cardText="CARD TEXT TWO" src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </div>
                    <div className="col-4">
                        <Card title="Card 3" buttonText="BUTTON THREE" cardText="CARD TEXT THREE" src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CardSection