import React from 'react'
import Layout from '../pages/layout/Layout'
import "./mumbai.css";
import { BiSearchAlt2 } from 'react-icons/bi';
import Content from "./components/Content";

export default function Mumbai() {
    const repeat = [
        { name: "West end hotel opp Bombay hospital", image: "first.jpg", span: "bad" },
        { name: "Hotel Sai Palace Grand", image: "second.jpg", span: "good" },
        { name: "Hotel Sea view Deck", image: "third.jpg", span: "excellent" },
        { name: "Hotel Palacia", image: "forth.jpg", span: "excellent" },
        { name: "Hotel Westin", image: "fifth.jpg", span: "good" },
        { name: "Hotel Pizza by the bay", image: "sixth.jpg", span: "bad" }

    ]

    return (
        <Layout>
            <div className='container'>
                <div className='part1'>

                    <div className='first-part'>

                        <div class="card">
                            <div class="card-body mpage">
                                <div className='inner-details'>
                                    <h3>Search  <BiSearchAlt2 /></h3>
                                    <div className='down'>
                                        <label>Your location</label>
                                        <input type="text" placeholder='Mumbai' />
                                    </div>
                                    <div className='down'>
                                        <label>Check in</label>
                                        <input type="date" placeholder='Check in' />
                                    </div>
                                    <div className='down'>
                                        <label>Check out</label>
                                        <input type="date" placeholder='Check in' />
                                    </div>
                                    <div className='down'>
                                        <label>How many guests</label>
                                        <input type="number" />
                                    </div>
                                    <div className='rad-btn'>
                                        <input type="checkbox" class="same" />
                                        <span class="same">Entire homes and elements</span>
                                    </div>
                                    <div className='rad-btn'>
                                        <input type="checkbox" class="same" />
                                        <span> I am travelling for work</span>
                                    </div>
                                    <div className='inside-button'>
                                        <button className='btn btn-primary ndbtn'>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='second-part'>
                    {
                        repeat.map((data, key) =>
                            <Content key={key} name={data.name} image={data.image} span={data.span} />
                        )
                    }
                    </div>

                </div>

            </div>
        </Layout>
    )
}
