import React from 'react';
import DetailSpecs from './DetailSpecs.jsx'
import SocialMedia from './SocialMedia.jsx'
import SocialMediaModal from './SocialMediaModal.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div >
        {/* <DetailSpecs /> */}
        <SocialMedia />
        {/* <SocialMediaModal /> */}
      </div>
    );
  }
}

export default App;
