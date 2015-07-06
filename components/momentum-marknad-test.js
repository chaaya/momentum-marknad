var testURL = "http://moms40.momentumsoftware.se";
function checkEvent(runTest) {
	return setTimeout(function() {
				runTest();
		}, 8000)
}

suite('Momentum marknad', function() {

		suite("constructor", function() {

				test('no url parameter should throw execption', function() {
						var urlMissingException = 'Missing url property';
						expect(addMomentumComponent).to.throw(urlMissingException);
				});

				test('elemets url property is set correctly', function() {
						var page = '/pgSearchResult.aspx';
						var element = addMomentumComponent('/pgSearchResult.aspx');
						expect(element.url).to.equal(testURL+page);
				});

		});

		suite("events", function() {

				test('should trigger page-visit', function(done) {
						var eventTriggered = false;
						var element = addMomentumComponent("/pgSearchResult.aspx");

						var runTest = function() {
								try {
										expect(eventTriggered).to.be.true;
										done();
								} catch (err) {
										done(err);
								}
						};

						var timeOut = checkEvent(runTest);

						element.addEventListener('page-visit', function(event) {
								eventTriggered = true;
								clearTimeout(timeOut);
								runTest();
						});


				});

				test('should trigger login', function(done) {
						var eventTriggered = false;
						var element = addMomentumComponent("/pgLogin.aspx");

						var runTest = function() {
									try {
											expect(eventTriggered).to.be.true;
											done();
									} catch (err) {
											done(err);
									}
						};

						var timeOut = checkEvent(runTest);

						element.addEventListener('login', function(event) {
								eventTriggered = true;
								clearTimeout(timeOut);
								runTest();
						});



				});

				test('should trigger login with correct return in event.detail', function(done) {
						var returnUrl = null;;
						var pageUserTriesToReachWithoutLogin = '/pgClientStart.aspx';
						var element = addMomentumComponent(pageUserTriesToReachWithoutLogin);

						var runTest = function() {
								try {
										expect(returnUrl).to.equal(pageUserTriesToReachWithoutLogin);
										done();
								} catch (err) {
										done(err);
								}
						};

						var timeOut = checkEvent(runTest);

						element.addEventListener('login', function(event) {
								returnUrl = pageUserTriesToReachWithoutLogin;
								clearTimeout(timeOut);
								runTest();
						});



				});

		});
});



function addMomentumComponent(page) {
		var element = null;
		if (page) {
				element = new MomentumMarknad(testURL + page);
		} else {
				element = new MomentumMarknad("");
		}
		document.body.appendChild(element);
		return element;
}
