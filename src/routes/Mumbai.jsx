import React from "react";
import Layout from "../pages/layout/Layout";
import "./mumbai.css";
import { BiSearchAlt2 } from "react-icons/bi";
import Content from "./components/Content";
import Pagination from "react-bootstrap/Pagination";

export default function Mumbai() {
  const repeat = [
    { name: "West end hotel opp Bombay ", image: "first.jpg", span: "bad" },
    { name: "Hotel Sai Palace Grand", image: "second.jpg", span: "good" },
    { name: "Hotel Sea view Deck", image: "third.jpg", span: "excellent" },
    { name: "Hotel Palacia", image: "forth.jpg", span: "excellent" },
    { name: "Hotel Westin", image: "fifth.jpg", span: "good" },
    { name: "Hotel Pizza by the bay", image: "sixth.jpg", span: "bad" },
  ];

  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Layout>
      <div className="container">
        <div className="part1">
          {/* first div  */}
          <div className="first-part">
            <div class="card">
              <div class="card-body mpage">
                <div className="inner-details">
                  <h3>
                    Search <BiSearchAlt2 />
                  </h3>
                  <div className="down">
                    <label>Your location</label>
                    <input type="text" placeholder="Mumbai" />
                  </div>
                  <div className="down">
                    <label>Check in</label>
                    <input type="date" placeholder="Check in" />
                  </div>
                  <div className="down">
                    <label>Check out</label>
                    <input type="date" placeholder="Check in" />
                  </div>
                  <div className="down">
                    <label>How many guests</label>
                    <input type="number" />
                  </div>
                  <div className="rad-btn">
                    <input type="checkbox" class="same" />
                    <span class="same">Entire homes and elements</span>
                  </div>
                  <div className="rad-btn">
                    <input type="checkbox" class="same" />
                    <span> I am travelling for work</span>
                  </div>
                  <div className="inside-button">
                    <button className="btn btn-primary ndbtn">Search</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="down-section">
              <div className="card bg-light mb-3 ">
                <div className="card-header">Filter by :</div>
                <div className="card-body">
                  <h5 className="card-title">Your previous filter</h5>
                  <p className="card-text">
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>Hotels</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>370</p>
                      </div>
                    </div>
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>Properties that take health & safety measures</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>70</p>
                      </div>
                    </div>
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>5 star</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>24</p>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
              <div className="card bg-light mb-3 ">
                <div className="card-header">Meals:</div>
                <div className="card-body">
                  <h5 className="card-title">Your previous filter</h5>
                  <p className="card-text">
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>Self Catering</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>30</p>
                      </div>
                    </div>
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>breakfast included</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>30</p>
                      </div>
                    </div>
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>All-inclusive</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>30</p>
                      </div>
                    </div>
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>breakfast and lunch included</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>30</p>
                      </div>
                    </div>
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>breakfast and dinner included</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>30</p>
                      </div>
                    </div>
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>All meals included</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>30</p>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
              <div className="card bg-light mb-3 ">
                <div className="card-header">Fun things to do :</div>
                <div className="card-body">
                  <h5 className="card-title">Your previous filter</h5>
                  <p className="card-text">
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>Fitness center</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>30</p>
                      </div>
                    </div>
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>Fitness</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>30</p>
                      </div>
                    </div>
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>Fitness/spa locker rooms</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>30</p>
                      </div>
                    </div>
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>Spa and wellness centre</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>30</p>
                      </div>
                    </div>
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>Massage</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>30</p>
                      </div>
                    </div>
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>Beach</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>30</p>
                      </div>
                    </div>
                    <div className="inner-body3">
                      <div className="filters">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <p>Private Beach area</p>
                        </div>
                      </div>
                      <div className="right-sec">
                        <p>30</p>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* first div ends here  */}
          <div className="second-part">
            <div className="mumbai-heading">
              <h1>Mumbai : 763 properties found</h1>
              <p>Nearby beaches : Girgaon chowpati , Aksa Beach , Juhu Beach</p>
            </div>
            {repeat.map((data, key) => (
              <Content
                key={key}
                name={data.name}
                image={data.image}
                span={data.span}
              />
            ))}
          </div>
        </div>
        <div>
          <Pagination>{items}</Pagination>
        </div>
      </div>
    </Layout>
  );
}
