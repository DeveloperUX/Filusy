
Listings = React.createClass({
  mixins: [ReactMeteorData],
  componentDidMount() {
    GoogleMaps.load();
  },
  getMeteorData() {
    return {
      loaded: GoogleMaps.loaded(),
      mapOptions: GoogleMaps.loaded() && this._mapOptions()
    };
  },
  _mapOptions() {
    var stylez = [
      {
        featureType: "all",
        stylers: [
          { hue: "#ffaf1a" }, // Desert Orange
          // { hue: "#86ff05" }, // Bright Lime Green
          { saturation: 15 }
        ]
      },
      {
        featureType: "poi",
        elementType: "label",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    return {
      center: new google.maps.LatLng(30.0500, 31.2333),
      zoom: 12,
      maxZoom: 14,
      minZoom: 8,
      zoomControl: true,
      animatedZoom: true,
      // styles: stylez,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false
    };
  },
  render() {
    if (this.data.loaded) {
      return (
        <div className="map-wrapper">
          <div className="floating-filter">
            <form>
              <label>Amount</label>
              <input type="text"></input>
              <label>Price</label>
              <input type="text"></input>
            </form>
          </div>
          <GoogleMap name="ListingsMap" options={this.data.mapOptions} />
        </div>
      );
    }
    return <div>Loading map...</div>;
  }
});

GoogleMap = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.object.isRequired
  },
  componentDidMount() {
    GoogleMaps.create({
      name: this.props.name,
      element: ReactDOM.findDOMNode(this),
      options: this.props.options
    });

    GoogleMaps.ready(this.props.name, function(map) {
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });
    });
  },
  componentWillUnmount() {
    if (GoogleMaps.maps[this.props.name]) {
      google.maps.event.clearInstanceListeners(GoogleMaps.maps[this.props.name].instance);
      delete GoogleMaps.maps[this.props.name];
    }
  },
  render() {
    return (
      <div className="map-container"></div>
    );
  }
});
