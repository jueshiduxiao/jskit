var jsKit = {};

jsKit.createEle = function () {
    var Yoga = require('./lib/yoga.bundle.js');
    var Node = Yoga.Node;

    let rootNode = Node.create();
    rootNode.setWidth(1024);
    rootNode.setHeight(768);

    rootNode.calculateLayout();
    console.log('root pos', rootNode.getComputedLayout());

    var kitCompile = require('./kit/compile.js');
    var kitRender = require('./kit/render.js');
    var inputs = kitCompile(rootNode);
    kitRender(inputs);
};

window.jsKit = jsKit;
module.exports = jsKit;
