const { isAndroid } = require('../module/UserAgent');

describe('UserAgent.isAndroid()', () => {
  beforeEach(() => {
  });

  afterEach(() => {
  });

  it('ユーザエージェントがAndroidの場合、trueを返す', () => {
    // Android(phone)
    const UA_ANDROID_PHONE = 'Mozilla/5.0 (Linux; U; Android 4.1.1; ja-jp; ' +
      'Galaxy Nexus Build/JRO03H) AppleWebKit/534.30 (KHTML, like Gecko) ' +
      'Version/4.0 Mobile Safari/534.30';
    expect(isAndroid(UA_ANDROID_PHONE)).to.be.ok();
  });

  it('ユーザエージェントがAndroidでない場合、falseを返す', () => {
    // iPhone
    const UA_IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) ' +
      'AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25/';
    expect(isAndroid(UA_IPHONE)).to.not.be.ok();

    // iPad
    const UA_IPAD = 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 ' +
      '(KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25';
    expect(isAndroid(UA_IPAD)).to.not.be.ok();

    // WindowsPhone(phone)
    const UA_WINDOWS_PHONE = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; ' +
      'Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)';
    expect(isAndroid(UA_WINDOWS_PHONE)).to.not.be.ok();

    // BlackBerry(phone)
    const UA_BLACKBERRY_PHONE = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; ja) ' +
      'AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.74 Mobile Safari/534.11+';
    expect(isAndroid(UA_BLACKBERRY_PHONE)).to.not.be.ok();
  });
});
