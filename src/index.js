import Yoga, { Node } from 'Yoga';

var jsKit = {};

jsKit.createEle = function () {
    let rootNode = Node.create();
    rootNode.setWidth(1024);
    rootNode.setHeight(768);

    rootNode.calculateLayout();
    console.log('root pos', rootNode.getComputedLayout());

    let kitCompile = require('./kit/compile.js');
    let kitRender = require('./kit/render.js');
    let inputs = kitCompile(rootNode);
    kitRender(inputs);
};

window.jsKit = jsKit;
