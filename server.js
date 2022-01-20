const RoamPrivateApi = require( 'roam-research-private-api' );

const api = new RoamPrivateApi( "test-graph", "test@gmail.com", "testpassword", {
    headless: true,
} );

api.logIn()
    .then( () => api.createBlock( "test", "tvQ2DO-BH" ))
    .then( () => api.createBlock( "test2", "tvQ2DO-BH" ))
    .then( () => api.createBlock( "test3", "tvQ2DO-BH" ))
    .then( result => api.close() );
