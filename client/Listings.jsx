
Listings = React.createClass({

  mixins: [ReactMeteorData],

  getInitialState() {
    return {maxPrice: 10.5};
  },

  componentDidMount() {
    GoogleMaps.load();
  },

  componentDidUpdate() {

    var el = this.refs.rangeslider;

    $(this.refs.amountSelector).material_select();

  },

  changePrice(event) {
    this.setState({maxPrice: event.target.value});
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
          <div className="filter-box ontop">
            <div className="col s12 m6 l4">
              <div className="card-panel white filter-panel">
                <form action="#">
                  <div className="input-field col s12">
                    <select id="amount-selector" ref="amountSelector" defaultValue="0" >
                      <option value="0" disabled>Atleast This Amount</option>
                      <option value="100">$100</option>
                      <option value="500">$500</option>
                      <option value="1000">$1000</option>
                      <option value="5000">$5000</option>
                      <option value="10000">$10000</option>
                      <option value="50000">$50000</option>
                    </select>
                    <label>Minimum Amount</label>
                  </div>
                  <p className="input-field col s12 range-field">
                    <input type="range"
                      ref="priceSelector" id="priceSelector"
                      min="8" max="12" step="0.1"
                      value={this.state.maxPrice}
                      onChange={this.changePrice} />
                    <span className="row">
                      <span className="col s4 left-align">$8.00</span>
                      <span className="col s4 center-align">
                        {"$" + parseFloat(this.state.maxPrice).toFixed(2)}
                      </span>
                      <span className="col s4 right-align">$12.00</span>
                    </span>
                  </p>
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
        icon: {
          url: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Marker-Outside-Chartreuse-icon.png'
        },
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
