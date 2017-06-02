var $ = require('jquery');
var faker = require('faker');

$('h1,h2,h3,h4,h5,h6,dt,summary,th').filter(':empty').each(function(index, element) {
    $(element).html(headline());
});

$('blockquote,p,q,dd,li,div,article,section').filter(':empty').each(function(index, element) {
    $(element).html(faker.lorem.paragraph());
});

$('cite,b,strong,i,em,span,sub,sup,small,s,u,del,ins,code,samp,kbd,var,td').filter(':empty').each(function(index, element) {
    $(element).html(faker.lorem.words(3));
});

$('abbr').filter(':empty').each(function(index, element) {
    $(element).html(faker.lorem.word().toUpperCase());
});

$('a').filter(':empty').each(function(index, element) {
    let url = faker.internet.url();
    $(element).html(url)
        .attr('href', '#');
});

$('img').filter(':empty').each(function(index, element) {
    $(element).attr('src', faker.image.dataUri(300, 200));
});

$('address').filter(':empty').each(function(index, element) {
    $(element).html([
        faker.name.findName(),
        faker.address.streetAddress(),
        faker.address.zipCode() + ' ' + faker.address.city(),
        faker.address.country()
    ].join('<br>\n')
    );
});

function headline() {
    var text = faker.lorem.words(
        faker.random.number({
            max: 8,
            min: 2,
        })
    );
    return text.charAt(0).toUpperCase() + text.slice(1);
}