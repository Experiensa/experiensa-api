import showcase from '../modules/showcase';
import request from '../modules/request';
import catalog from '../modules/catalog/index';
import extracatalog from '../modules/extracatalog';
export default {
    init() {
        // console.log('voy por common');
        // JavaScript to be fired on all pages
        showcase.renderShowcase();
        catalog.renderCatalog();
        extracatalog.renderExtraCatalog();
        request.renderRequest();
    },
    finalize() {
        // JavaScript to be fired on all pages, after page specific JS is fired
    },
};