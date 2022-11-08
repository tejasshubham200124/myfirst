import React from 'react'
import "./content.css";
export default function (props) {
  console.log(props);
  return (

    <div className='main-element'>
      <div class="card">
        <div class="card-body">
          <div className='inner-carddtl'>
            <div className='inner-cardimg'>
              <img src={props.image} alt='first' />
            </div>

            <div className='review'>
              <h4>{props.name}</h4>
              <div className='inner-column'>
                <span>{props.span}</span>
                <span>125 reviews</span>
              </div>

            </div>


          </div>
          {/* <div className='inner-carddt2'>
            <p>travel substainable property</p>

            <button className='btn btn-primary'>Search</button>
          </div> */}

        </div>
      </div>
    </div>



  )
}
