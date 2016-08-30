import { NgDemoCLIPage } from './app.po';

describe('ng-demo-cli App', function() {
  let page: NgDemoCLIPage;

  beforeEach(() => {
    page = new NgDemoCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
