Feature('ReviewingRestaurants');

Scenario('Posting review for a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('#contentList');

  I.click(locate('.content-item-title a').first());

  I.seeElement('#formReviewContainer');
  I.fillField('name', 'testing');
  I.fillField('review', 'test review');
  I.click('#btnAction');

  I.see('test review', 'p.review-comment');
});