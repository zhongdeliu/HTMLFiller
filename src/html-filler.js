import $ from 'jquery';
import faker from 'faker';
import modules from './modules';

var HTMLFiller = {};

HTMLFiller.execute = function(selector = 'body') {
    var $context = $(selector);

    modules.forEach(module => {
        $context.find(module.selector).filter(':empty').each(module.callback);
    });
};

window.HTMLFiller = HTMLFiller;
export default HTMLFiller;
