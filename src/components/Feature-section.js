import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
export default function Feature_section() {
  return (
   <Fragment>
<div class="row">
    <div class="col-auto feature-title" id="featured-part">
        <h2>Pizza Special</h2>
    </div>
</div>
<div class=" d-fle flex-md-equa feature-ite d-md-gri gap- row noSpace fig">
    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 item1 overlay-text">
        <figcaption>
            <h2>Best Seller <span>Veggie Lover</span> Special</h2>
            <p>Pizza is officially a vegetable. This garden delight has all the fresh veggie toppings you love: mushrooms, red onions, green bell peppers, Roma tomatoes and black olives. This is served with fresh picked veggies right from Wilmington.</p>
            <a href="#"></a>
        </figcaption>	
    </div>
    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 item2 overlay-text">
        <figcaption>
            <h2>Tasty Zest <span>Hawaiian</span> Pizza</h2>
            <p>Give your taste buds a tropical vacation with this amped up Hawaiian pizza. It's got tasty chicken, ham, pineapple AND green peppers.</p>
            <a href="#"></a>
        </figcaption>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 item3 overlay-text">
        <figcaption>
            <h2>Mouth Watering <span>Omega 3</span> Pizza</h2>
            <p>This loaded pizza is the perfect choice for family dinner or a lunch with your crew. Includes pepperoni, seasoned pork, beef, mushrooms, green bell peppers and red onions.</p>
            <a href="#"></a>
        </figcaption>
    </div>
    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 item4 overlay-text">
        <figcaption>
            <h2>Fresh <span>Meat Meaty</span> Pizza</h2>
            <p>Ever wished your pepperoni pizza had more pepperoni? Of course you did. This oven-hot pizza has 50% more pepperoni than our average pizza pie.</p>
            <a href="#"></a>
        </figcaption>
    </div>
</div>
   </Fragment>
  )
}
