import React from 'react';
import DetailSpecs from './DetailSpecs.jsx'
import SocialMedia from './SocialMedia.jsx'
import SocialMediaModal from './SocialMediaModal.jsx'
import Axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DetailSpecs: {ProductDetail: {Title: '', Body: ''}, ProductSpecification: []},
    };
    this.getRequest = this.getRequest.bind(this)
  }

  componentDidMount() {
    this.getRequest()
  }

  getRequest() {
    Axios.get('/api/bechampions/productspecdetail/id')
      .then((details) => {
        this.setState({
          DetailSpecs: details.data[0]
        })
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="BigContainer">
        <DetailSpecs DetailSpecs={this.state.DetailSpecs}/>
        <SocialMedia />
        {/* <SocialMediaModal /> */}
      </div>
    );
  }
}

export default App;
