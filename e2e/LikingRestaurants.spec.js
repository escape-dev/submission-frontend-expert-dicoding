const assert = require('assert');

Feature('LikingRestaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#contentList');
  I.see('Favorite restaurant empty', '#favoriteMessage');
});

Scenario('liking and unliking a restaurants', async ({ I }) => {
  I.see('Favorite restaurant empty', '#favoriteMessage');

  I.amOnPage('/');

  I.seeElement('#contentList');

  const firstRestaurant = locate('.content-item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#contentList');
  const likeRestaurantTitle = await I.grabTextFrom('.content-item-title');

  assert.strictEqual(firstRestaurantTitle, likeRestaurantTitle);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#favoriteMessage');

  const favoriteMessage = await I.grabTextFrom('#favoriteMessage h2');
  assert.strictEqual(favoriteMessage, 'Favorite restaurant empty');
});