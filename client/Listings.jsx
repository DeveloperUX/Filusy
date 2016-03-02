
Listings = React.createClass({
  mixins: [ReactMeteorData],
  componentDidMount() {
    GoogleMaps.load();

    var slider = document.getElementById('test5');
    noUiSlider.create(slider, {
     start: [20, 80],
     connect: true,
     step: 1,
     range: {
       'min': 0,
       'max': 100
     },
     format: wNumb({
       decimals: 0
     })
    });


    // $(document).ready(function() {
        $('select').material_select();
    // });
    // $(ReactDOM.findDOMNode(this.refs.select)).material_select();

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
          <div className="row ontop">
            <div className="col s12 m5">
              <div className="card-panel white">
                <form action="#">
                  <p className="range-field">
                    <input type="range" id="test5" min="0" max="100" />
                  </p>
                  <div className="input-field col s12">
                    <select id={this.props.var} value="1" defaultValue="1">
                      <option value="0" disabled>Choose your option</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                    <label>Materialize Select</label>
                  </div>
                </form>
              </div>
            </div>
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
