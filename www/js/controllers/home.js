phonecatControllers.controller('HomeCtrl', function ($rootScope, $scope, event, user, storage) {

		// Labels : English
	  var engLabels = {
			events : "Events"
	  },

	  // Labels : French
	  frLabels = {
			events : "Evènements"
	  },

		templates = {
			monthSplit : '<div class="{month}"></div>',
			eventWrapper : '<div class="home-event {dup}">{top}{bottom}</div>',
			eventTop : '<div class="home-event-top"><div class="pure-g"><div class="pure-u-1-3 home-etop-date"><div>{day}<br>{hour}</div></div><div class="pure-u-1-3 home-etop-pic"><div class="home-count">{count}</div><img src="img/profile.jpg"></div><div class="home-etop-map"><img src="img/repere-BM.png"></div></div></div>',
			eventBottom : '<div class="home-event-bottom"><div class="home-ebot-name">{name}</div><div class="home-ebot-content">{content} <span class="event-tags">{tags}</span></div></div>'
		};

	  // Setting the language
	  if($rootScope.language === "fr")
	    $scope.labels = frLabels;
	  else
	    $scope.labels = engLabels;

		$scope.events = [];

		$scope.init = function(){
			$scope.email = $rootScope.user.email;
			$scope.token = $rootScope.user.token;
			user.userInfo($scope.email, $scope.token);
		};

		$scope.fillHomePage = function(data){
			for(var i=0; i<data.length; i++){
				var actual = data[i];
				var top = templates.eventTop
					.replace("{day}", actual.date)
					.replace("{hour}", '')
					.replace("{count}", actual.guestList.length);
				var bottom = templates.eventBottom
					.replace("{name}", actual.authorPseudo)
					.replace("{content}", actual.details)
					.replace("{tags}", actual.details);
				var dom = templates.eventWrapper
					.replace("{dup}", 'home-dup-' + i) 
					.replace("{top}", top)
					.replace("{bottom}", bottom);
				$scope.events.push(dom);
			}
		};

		$scope.$on('userInfo', function(events, response){
			if(response){
				storage.storeUser(response, $scope.token);
				$scope.idUser = response.id;
				event.retrieveEvents($scope.idUser, $scope.email, $scope.token);
			}else{
				alert();
			}
		});

		$scope.$on('eventsOfUser', function(events, response){
			if(response){
				$scope.fillHomePage(response);
			}else{
				alert();
			}
		});
});
