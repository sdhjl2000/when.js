// DOH seems to faily consistently on the first test suite, so I'm putting
// in this fake suite so it will fail and all the real tests results will
// be meaningful.
doh.registerUrl('_fake', '../../_fake-doh.html');

doh.registerUrl('when.isPromise', '../../isPromise.html');
doh.registerUrl('when', '../../when.html');
doh.registerUrl('when.defer', '../../defer.html');
doh.registerUrl('when.some', '../../some.html');
doh.registerUrl('when.chain', '../../chain.html');

doh.run();