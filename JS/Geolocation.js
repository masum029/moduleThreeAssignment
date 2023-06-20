function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      console.log('tes');
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  

  getLocation();