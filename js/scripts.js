$(document).ready(function() {
  let maxKiddieHeight = 36;
  let maxAdultHeight = maxKiddieHeight + 1;
  let isAdult = false;

  $('.clickable').click(function(){
    let tempHeight = 0;
    tempHeight = $('.container').find('#myHeight').val();
    console.log(tempHeight);
    whichRide(tempHeight);
  });
  function whichRide(myHeight){
    if(myHeight < maxKiddieHeight){
      isAdult = false;
    }else{
      isAdult = true;
    }
    switch (isAdult) {
      case true:
        $('.container').find('#ridesSmall').hide();
        $('.container').find('#ridesBig').show();
        break;
      case false:
        $('.container').find('#ridesBig').hide();
        $('.container').find('#ridesSmall').show();
        break;

    }

  };
});
