import { JsSlidePuzzlePage } from './app.po';

describe('js-slide-puzzle App', () => {
  let page: JsSlidePuzzlePage;

  beforeEach(() => {
    page = new JsSlidePuzzlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
