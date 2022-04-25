import RestaurantApiDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate, createHero } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="container">
        <div class="content">
          <h2 tabindex="0" class="content-label">Explore Restaurant</h2>
          <div class="content-list" id="contentList">

          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantList = await RestaurantApiDbSource.restaurantList();
    const restaurantContainer = document.querySelector('#contentList');
    const heroContainer = document.querySelector('#heroContainer');
    heroContainer.innerHTML = createHero();
    restaurantList.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
