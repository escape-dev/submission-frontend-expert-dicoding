import RestaurantApiDbSource from '../data/restaurantdb-source';
import { createFormReviewTemplate } from '../views/templates/template-creator';

const FormReviewInitiator = {
  async init({ formReviewContainer, id }) {
    this._formReviewContainer = formReviewContainer;
    this._id = id;

    await this._renderForm();
  },

  async _renderForm() {
    this._formReviewContainer.innerHTML = createFormReviewTemplate();

    const action = document.querySelector('#btnAction');
    action.addEventListener('click', async () => {
      const name = document.querySelector('#name');
      const review = document.querySelector('#review');

      const reviewData = {
        id: this._id,
        name: name.value,
        review: review.value,
      };

      if (!name.value) {
        alert('Name cannot be empty');
      } else if (!review.value) {
        alert('Review cannot be empty');
      } else {
        await RestaurantApiDbSource.addReviewRestaurant(reviewData);
      }
    });
  },
};

export default FormReviewInitiator;
