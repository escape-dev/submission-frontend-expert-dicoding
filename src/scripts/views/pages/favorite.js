import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate, createFavoriteMessageEmpty } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="container">
        <div class="content">
          <h2 tabindex="0" class="content-label">Favorite Restaurant</h2>
          <div class="content-list" id="contentList">

          </div>
          <div id="favoriteMessage"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantList = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#contentList');
    const favoriteMessage = document.querySelector('#favoriteMessage');
    const heroContainer = document.querySelector('#heroContainer');
    heroContainer.innerHTML = '';

    if (restaurantList.length === 0) {
      favoriteMessage.innerHTML = createFavoriteMessageEmpty();
    }

    restaurantList.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
