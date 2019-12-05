import { CircleCiAngPage } from './app.po';

describe('circle-ci-ang App', () => {
  let page: CircleCiAngPage;

  beforeEach(() => {
    page = new CircleCiAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Lorem Ipsum');
  });
});
