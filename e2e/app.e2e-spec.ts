import { BusinesscontactPage } from './app.po';

describe('businesscontact App', function() {
  let page: BusinesscontactPage;

  beforeEach(() => {
    page = new BusinesscontactPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
