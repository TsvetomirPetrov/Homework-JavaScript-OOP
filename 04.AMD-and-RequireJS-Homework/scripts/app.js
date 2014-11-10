(function () {
    require.config({
        paths: {
            'container': 'container',
            'section': 'section',
            'item': 'item'
        }
    });
    require(['container'],function(Container){
        var conte=new Container('Title');
        console.log(conte);
        conte.addToDOM(document.body);
    })
})();

