
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './component/Profile/ProfilePhoto';
import FullName from './component/Profile/FullName';
import Address from './component/Profile/Address';
function App() {
  return (
    <div className="container mt-5">
      <div className="row">
      <div className="col-md-4">
        <ProfilePhoto/>;
      </div>
      <div className="col-md-8 d-flex flex-column justify-content-center">
      <FullName />
      <Address />
      </div>
      </div>
    
    </div>
  );
}

export default App;
