import axios from "axios";

export default ({ req}) => {
    if( typeof window === "undefined"){
        // we are on server
        // request will be made to SVC.NS.svc.cluster.local
        return axios.create({
           baseUrl: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
           headers: req.headers
          })
      } else {
        // we are on browser
        // request will be made to api
        return axios.create({
          baseUrl: '/'
        })
      
      }
}