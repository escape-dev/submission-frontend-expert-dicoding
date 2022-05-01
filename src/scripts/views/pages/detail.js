import UrlParser from '../../routes/url-parser';
import RestaurantApiDbSource from '../../data/restaurantdb-source';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FormReviewInitiator from '../../utils/form-review-initiator';

const Detail = {
  async render() {
    return `
        <section class="container">
            <div class="content">
                <div class="detail-restaurant" id="detailRestaurant">

                </div>
                <div id="formReviewContainer"></div>
                <div id="likeButtonContainer"></div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detailRestaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const heroContainer = document.querySelector('#heroContainer');
    heroContainer.innerHTML = '';

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
      },
    });

    FormReviewInitiator.init({
      formReviewContainer: document.querySelector('#formReviewContainer'),
      id: restaurant.id,
    });
  },
};

export default Detail;
