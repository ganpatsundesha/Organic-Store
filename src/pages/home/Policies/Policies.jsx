import React from 'react'
import Container from '../../../components/container/Container'
import { FaTruck, FaMoneyBill1Wave } from "react-icons/fa6";
import { FaRecycle } from "react-icons/fa";
import { IoIdCard } from "react-icons/io5";

import './style.scss'
import PoliciesCard from '../../../components/PoliciesCard/PoliciesCard';

const Policies = () => {
    return (
        <section className='sectionPolicies'>
            <Container>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <PoliciesCard icon={<FaTruck />} title="Free Shipping" description="Above $5 Only" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <PoliciesCard icon={<IoIdCard />} title="Certified Organic" description="100% Guarantee" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <PoliciesCard icon={<FaMoneyBill1Wave />} title="Huge Savings" description="At Lowest Price" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <PoliciesCard icon={<FaRecycle />} title="Easy Returns" description="No Questions Asked" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Policies