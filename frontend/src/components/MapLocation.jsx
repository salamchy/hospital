const MapLocation = () => {
  return (
    <div className="flex justify-center space-y-5 my-10">
      <div className="mapouter" style={{ width: '1100px', height: '400px' }}>
        <div className="gmap_canvas">
          <iframe
            title="Grande International Hospital Location"
            className="gmap_iframe"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=1100&height=400&hl=en&q=grande international hospital kathmandu&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            style={{ width: '1100px', height: '400px' }}
          ></iframe>
          <style>{`
            .mapouter{position:relative;text-align:right;width:1100px;height:400px;}
            .gmap_canvas {overflow:hidden;background:none!important;width:1100px;height:400px;}
            .gmap_iframe {width:1100px!important;height:400px!important;}
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default MapLocation;