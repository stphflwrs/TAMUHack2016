Router.route('/', function () {
  this.render('app_body');
});

Router.route('/login', function () {
  this.render('app_blank', {
    name: 'login',
    data: {
      page: 'login',
    },
  });
});

Router.route('/register', function () {
  this.render('app_blank', {
    name: 'register',
    data: {
      page: 'register',
    },
  });
});

Router.route('/home', function () {
  this.render('app_body', {
    name: 'home',
    data: {
      page: 'home',
    },
  });
});

Router.route('/trip-details/:_id', function () {
  this.render('app_body', {
    name: 'trip.details',
    data: {
      page: 'trip_details',
      trip: {
        _id: this.params._id,
        stage: 'Planning',
        title: 'UTRGV goes to TAMUHack 2016',
        participants: [0, 1, 2, 3, 4,],
        roundTrip: true,
        departureDate: new Date('09/30/2016'),
        joinDeadline: new Date('09/25/2016'),
      },
    },
  });
});
