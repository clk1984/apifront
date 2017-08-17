import { ApifrontPage } from './app.po';

describe('apifront App', () => {
  let page: ApifrontPage;

  beforeEach(() => {
    page = new ApifrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
