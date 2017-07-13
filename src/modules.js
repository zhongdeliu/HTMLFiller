import $ from 'jquery';
import faker from 'faker';

function headline() {
    var text = faker.lorem.words(
        faker.random.number({
            max: 8,
            min: 2,
        })
    );
    return text.charAt(0).toUpperCase() + text.slice(1);
}

var modules = [];

modules.push({
    selector: 'h1,h2,h3,h4,h5,h6,dt,summary,th',
    callback: function(index, element) {
        $(element).html(headline());

        //insertBefore Code
        // element.insertBefore(document.createTextNode(headline()), element.firstChild);
    },
});

modules.push({
    selector: 'blockquote,p,q,dd,li,div,article,section',
    callback: function(index, element) {
        $(element).html(faker.lorem.paragraph());
    },
});

modules.push({
    selector: 'abbr',
    callback: function(index, element) {
        $(element).html(faker.lorem.word().toUpperCase());
    },
});

modules.push({
    selector:
        'cite,b,strong,i,em,span,sub,sup,small,s,u,del,ins,code,samp,kbd,var,td',
    callback: function(index, element) {
        $(element).html(faker.lorem.words(3));
    },
});

modules.push({
    selector: 'a',
    callback: function(index, element) {
        var url = faker.internet.url();
        $(element).html(url).attr('href', '#');
    },
});

modules.push({
    selector: 'img',
    callback: function(index, element) {
        $(element).attr('src', faker.image.dataUri(300, 200));
    },
});

modules.push({
    selector: 'address',
    callback: function(index, element) {
        $(element).html(
            [
                faker.name.findName(),
                faker.address.streetAddress(),
                faker.address.zipCode() + ' ' + faker.address.city(),
                faker.address.country(),
            ].join('<br>\n')
        );
    },
});

export default modules;
