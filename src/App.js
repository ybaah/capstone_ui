import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ImgUpload from './components/ImgUpload.component';
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Upload Image
              </div>
              <div className="card-body">
                <ImgUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
