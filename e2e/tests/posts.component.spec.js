/*
 * Author: Tharindu Seneviratne
 * Date: 29/02/2020
 *
 * tests for validating the posts reading flow
 */
describe('posts reading flow test', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have posts list screen', async () => {
    await expect(element(by.id('posts-container'))).toBeVisible();
  });
  it('should have label welcome', async () => {
    await expect(element(by.text('Welcome'))).toBeVisible();
  });

  it('should have post item with id:1', async () => {
    await expect(element(by.id('post_item_1'))).toBeVisible();
  });

  it('click the post_item_1 for navigating to post information screen', async () => {
    await element(by.id('post_item_1')).tap();
    await expect(element(by.text('Information'))).toBeVisible();
    await expect(element(by.text('Welcome'))).toNotExist();
  });
});
