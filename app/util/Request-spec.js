import Request from 'app/util/Request';

describe('Send Request', () => {
  var request;

  beforeEach(() => {
    request = new Request();
  });

  it('When URL is null', () => {
    expect(request.isUrlValid(undefined)).toBe(true);
  });
});
