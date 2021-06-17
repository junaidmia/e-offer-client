import React, { useState } from 'react';
import './UpComingOffer.css'

const UpComingOffer = () => {

    const UpComingOfferData = [
        {
            title: 'evaly offer',
            img: '',
            company: 'evaly'
        },
        {
            title: 'dhamaka offer',
            img: '',
            company: 'dhamaka'
        },
        {
            title: 'alesha mart offer',
            img: 'https://aleshamart.anvs.xyz/images/profile-photo.png',
            company: 'alesha'
        },
    ];

    const [comingOffer, setComingOffer] = useState(UpComingOfferData)
    const filterCompany = (CompanyName) => {
        const clickedCompany = UpComingOfferData.filter((currentCompany) => {
            return currentCompany.company === CompanyName
        })
        setComingOffer(clickedCompany)
    }

    return (
        <section className="pt-5">
            <div className="container">

                <div className="p-5">
                    <h2>Up Comming Offers</h2>
                </div>

                <div className="d-flex justify-content-around bg-light p-3 rounded">
                    <button className="btn btn-danger" onClick={() => setComingOffer(UpComingOfferData)}>All</button>
                    <button className="btn btn-danger" onClick={() => filterCompany('evaly')}>Evaly</button>
                    <button className="btn btn-danger" onClick={() => filterCompany('dhamaka')}>Dhamaka</button>
                    <button className="btn btn-danger" onClick={() => filterCompany('alesha')}>Alesha Mart</button>
                </div>

                <div className="row">
                    {
                        comingOffer.map(comingOffer =>
                            <div className="col-md-4 pt-5">
                                <div class="card" >
                                    <img style={{ width: '20%' }} src={comingOffer.img} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{comingOffer.title}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default UpComingOffer;