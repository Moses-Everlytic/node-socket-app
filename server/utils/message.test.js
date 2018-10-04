const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Moses';
    var text = 'Testing Text';

    var message = generateMessage(from, text);

    // expect(message.from).toBe(from);
    // expect(message.text).toBe(text);
    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Username';
    var latitude = 27;
    var longitude = 80;
    var url = 'https://google.com/maps?q=27,80';

    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage).toInclude({from, url});
    expect(locationMessage.url).toBe(url);
    expect(locationMessage.createdAt).toBeA('number');
  });
});
