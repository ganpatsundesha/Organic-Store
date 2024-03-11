import React from 'react';
import Button from '../../../components/button/Button';
import { FaCartShopping } from "react-icons/fa6";
import Container from '../../../components/container/Container';

import './style.scss';

const OfferBox = () => {
    return (
        <>
            <section className='sectionOffer black'>
                <Container>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                                <h2>Get 25% Off On Your First Purchase!</h2>
                                <Button><FaCartShopping />Shop Now</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='sectionOffer '>
                <Container>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                                <h3>Try It For Free. No Registration Needed.</h3>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default OfferBox