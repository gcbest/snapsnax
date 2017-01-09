// =========Start Materialize=========
  // Document Ready with the Materialize triggers
  $(document).ready(function(){
    //Parallax Trigger
    $('.parallax').parallax();
    // material select trigger
    $('select').material_select();
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      starting_top: '4%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute
     }
  );
  });
  // =========End Materialize=========

  // =========Start Yelp=========
$("#submit").on("click", function() {
var yelpTerms = $("#breakfast").attr("value");
console.log(yelpTerms);
var yelpAddress = $("#userLocation").val().trim();
var zipcode = ""; 
var auth = {
    consumerKey: 'A57Bv67Jx1i_WTKhVxaiTg', 
    consumerSecret: 'z4fnfyiWxl25JrABzDChCd8NGGI',
    accessToken: 'aDHmxuRU28TxZ_c4ltxXPkc7rb77UwUH',
    accessTokenSecret: 'L_Q6vCfuuCl5QuaXSFi4lZ9X_UM',
    serviceProvider: {
    signatureMethod: "HMAC-SHA1"
        }
    };

    var terms = yelpTerms;
    var near = yelpAddress;
    var limit = 12;
    var image_url = 'image_url';
    var rating_img_url_large = 'rating_img_url_large';
    var phone = 'phone';
    var yelpUrl = 'url';
    var radius = 8000;
    var price = "" // This will come from the user input

    var accessor = {
      consumerSecret: auth.consumerSecret,
      tokenSecret: auth.accessTokenSecret
    };

    parameters = [];
    parameters.push(['url', yelpUrl]);
    parameters.push(['term', terms]);
    parameters.push(['location', near]);
    parameters.push(['limit', limit]);
    parameters.push(['image_url', image_url]);
    parameters.push(['rating_img_url_large', rating_img_url_large]);
    parameters.push(['phone', phone]);
    parameters.push(['radius', radius]);
    parameters.push(['price', price]);
    parameters.push(['callback', 'cb']);
    parameters.push(['oauth_consumer_key', auth.consumerKey]);
    parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
    parameters.push(['oauth_token', auth.accessToken]);
    parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

    var message = {
      'action': 'http://api.yelp.com/v2/search',
      'method': 'GET',
      'parameters': parameters
    };

    OAuth.setTimestampAndNonce(message);
    OAuth.SignatureMethod.sign(message, accessor);
    var parameterMap = OAuth.getParameterMap(message.parameters);
    parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature);

        $.ajax({'url': message.action,    
                  'method': 'GET',
                  'data': parameterMap,
                  'cache': true,
                  'dataType': 'jsonp',
                  'jsonpCallback': 'cb',}).done(function(response) {
            

            console.log($.ajax({'url': message.action,    
                  'method': 'GET',
                  'data': parameterMap,
                  'cache': true,
                  'dataType': 'jsonp',
                  'jsonpCallback': 'cb',}));
            console.log(message);
            console.log(response.businesses);
            });
        })
  // =========End Yelp=========

/////////////GOOGLE/////////////////
$("#submit").on('click', function(){
  //alert("It works");
  var inputAddress = $("#userLocation").val().trim();
  var quoAdd = "\" "+ inputAddress +"\""
  console.log(quoAdd);
  var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(quoAdd)+"&key=AIzaSyCNEH9ddgTnDDO-HPKQtW1INRnXiYkp5aA";
  console.log(inputAddress);
  console.log(googleUrl);
});
///////////////END GOOGLE///////////