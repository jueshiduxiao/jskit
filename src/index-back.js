(function () {

var Element = function () {
};
Element.prototype = {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTop: 10,
    borderRight: 0,
    borderBottom: 0,
    borderLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 0,
    height: 0,
    outerWidth: 0,
    outerHeight: 0,
    offsetX: 0,
    offsetY: 0,
    backgroundColor: '#FFF',
    opacity: 1,
    tagName: 'div'
};


var Document = function (root) {
    this.body = root;
    this.canvas = this.body.childNodes[0];
    this.domTree = [];
    this.stream = [];
};
Document.prototype = {
    createByJson: function (json) {
        var _this = this;
        json.forEach(function (item) {
            var ele = new Element();
            _this.domTree.push(ele);
        });
    },
    compute: function () {
        var _this = this;
        _this.domTree.forEach(function (dom) {
            if (dom.borderTop) {
                _this.stream.push({
                    type: 'LINE',
                    x: 0,
                    y: 0,
                    toX: 10,
                    toY: 10,
                    width: 1,
                    color: '#FFF'
                });
            }
            if (dom.backgroundColor) {
                _this.stream.push({
                    type: 'COLOR',
                    x: 0,
                    y: 0,
                    toX: 10,
                    toY: 10,
                    color: '#FFF'
                });
            }
        });
    },
    render: function () {
        var _this = this;
        _this.compute();
        console.log(_this.domTree);
        console.log(_this.stream);
        this.canvas.style.width = '100%';
        this.canvas.style.height = '300px';
    }
};


var jskit = {
    createDocument: function (dom) {
        dom.innerHTML = '<canvas></canvas>';
        return new Document(dom);
    }
};


window.jskit = jskit;


var json = [
    {
        'tagName': 'div',
        'margin': '10 10 10 10',
        'border': '1 1 1 1',
        'padding': '5 5 5 5',
        'kids': []
    }
];


var doc = jskit.createDocument(document.body);
doc.createByJson(json);
doc.render();


}());
