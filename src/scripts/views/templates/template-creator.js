import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="detail-title" tabindex="0">${restaurant.name}</h2>
    <figure class="detail-img">
       <img tabindex="0" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" alt="${restaurant.name}" />
    </figure>
    <div class="detail-content">
      <div class="detail-restaurant">
        <p tabindex="0" class="rating"><i title="icon rating" class="fa fa-star rating"></i>${restaurant.rating}</p>
        <p class="detail-location" tabindex="0"><i title="icon location" class="fa fa-location-arrow"></i> ${restaurant.address}, ${restaurant.city}</p>
        <div class="detail-description">
            <h3 tabindex="0">   Description</h3>
            <p tabindex="0">${restaurant.description}</p>
        </div>
      </div>
      <div class="detail-menu">
        <h3 class="detail-menu-title" tabindex="0">Kategori</h3>
        ${restaurant.categories.map((category) => `<span tabindex="0" class="detail-category">${category.name}</span>`).join('')}
        <h3 class="detail-menu-title" tabindex="0">Daftar Makanan</h3>
        ${restaurant.menus.foods.map((food) => `<span tabindex="0" class="detail-food">${food.name}</span> `)}
        <h3 class="detail-menu-title" tabindex="0">Daftar Minuman</h3>
        ${restaurant.menus.drinks.map((drink) => `<span tabindex="0" class="detail-drink">${drink.name}</span> `)}
      </div>
    </div>
    <div class="review">
      <h3 class="review-title" tabindex="0">Review Customer</h3>
      <div class="review-container"             >
       ${restaurant.customerReviews.map((review) => `
        <div class="review-item">
          <h3 class="review-name" tabindex="0">${review.name}</h3>
          <p class="review-date" tabindex="0">${review.date}</p>
          <p class="review-comment" tabindex="0">${review.review}</p>
        </div>`).join('')}
      </div>      
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="content-item">
        <div class="content-city">
            <p tabindex="0">Kota ${restaurant.city}</p>
        </div>
        <img tabindex="0" class="content-item-img" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}">
        <div class="content-item-container">
            <h3 class="content-item-title">
                <a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
            </h3>
            <span tabindex="0" class="rating"><i title="icon rating" class="fa fa-star rating"></i>${restaurant.rating}</span>
            <p tabindex="0" class="content-item-description">${restaurant.description}</p>
        </div>
    </article>
`;

const createFormReviewTemplate = () => `
    <h3 class="review-title" tabindex="0">Add Review</h3>
    <form>
        <label for="name">Name</label>
        <input type="text" class="form-name" name="name" id="name" placeholder="Enter your name">
        <label for="review">Review</label>
        <textarea name="review" class="form-review" id="review" placeholder="Enter Review" requried></textarea>
        <button type="submit" id="btnAction">Kirim</button>
    </form>
`;

const createHero = () => `
    <div class="hero">
        <div class="hero-inner">
            <h2 tabindex="0" class="hero-description">There's a recipe for every life</h2>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const createFavoriteMessageEmpty = () => `
    <h2>Favorite restaurant empty</h2>
`;

export {
  createHero,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFormReviewTemplate,
  createFavoriteMessageEmpty,
};
