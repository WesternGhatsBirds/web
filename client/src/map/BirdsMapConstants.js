const BirdsMapConstants = {
  LAYOUT: {
    title: 'Birds of the Western Ghats',
    autosize: true,
    width: 1000,
    height: 800,
    margin: { l: 65, r: 50, b: 65, t: 90 },
    geo: {
      scope: 'india',
      resolution: 50,
      lataxis: { 'range': [0, 30] },
      lonaxis: { 'range': [50, 100] },
      showrivers: true,
      rivercolor: '#fff',
      showlakes: true,
      lakecolor: '#fff',
      showland: true,
      landcolor: '#EAEAAE',
      countrycolor: '#d3d3d3',
      countrywidth: 1.5,
      subunitcolor: '#d3d3d3'
    }
  }
};

export default BirdsMapConstants;