import axios from "axios";

const LandingPage = ({ currentUser}) => {
  console.log(currentUser);

  //axios.get('/api/users/currentuser')
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialPage = async ({ req}) => {
  if( typeof window === "undefined"){
    // we are on server
    // request will be made to SVC.NS.svc.cluster.local
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      { headers: {
         Host: req.headers
       }
     }
      )
  } else {
    // we are on browser
    // request will be made to api
    const { data } = await axios.get(
      '/api/users/currentuser/api/users/currentuser'
      )
    return data
  }

}

export default LandingPage;
