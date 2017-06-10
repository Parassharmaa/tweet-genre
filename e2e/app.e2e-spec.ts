import { TestappPage } from './app.po';

describe('testapp App', () => {
  let page: TestappPage;

  beforeEach(() => {
    page = new TestappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
