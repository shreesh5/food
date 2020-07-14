import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer pHZIHoQzbKAJMzIM_ztVRqpb41ZCPWhnKsw0LB5oPeK8y7aeZmwGUVHJ2jW45swnTMXv7M75yvifXaGRMXS_IoFVVV2so5gloldn1-qGLbk-clqGfnRqUrek-kALX3Yx'
    }
});