class AttrsBuild {
    constructor(AttrsBuilder){
        Object.defineProperties(this, {
            '_class': {
                writable: true,
                enumerable: true,
                configurable: false
            },
            '_style': {
                writable: true,
                enumerable: true,
                configurable: false
            },
            '_id': {
                writable: true,
                enumerable: true,
                configurable: false
            },
            'className': {
                configurable: false,
                enumerable: true,
            
                set (val) {
                    if (typeof val === 'string') {
                        if (this._class == null || '') {
                            this._class = val;
                        } else {
                            this._class += val; 
                            }
                        } else {
                            throw('ClassName only takes a string as an argument');
                        }
                    },
                get () {
                    return this._class;
                }
            },
            'style': {
                enumerable: true,
                configurable: false,

                set (val) {
                    if (typeof val === 'object' && Object.keys(val) != null || 0 || undefined) {
                        this._style = val;
                    }
                    
                },
                get () {
                    return this._style;
                }
        

            },
            'id': {
                enumerable: true,
                configurable: false,
        
                set (id) {
                    if (typeof id === 'string') {
                        this._id = id;
                    } else {
                        throw('AttrsBuilder.withId: Argument must be a string.');
                    }
                },
                get () {
                    return this._id;
                }
            },
            'name':{
                enumerable: true,
                writable: true,
                configurable: false,

            },
            'value': {
                enumerable: true,
                writable: true,
                configurable: false,
            }
        });

      
        this.className = AttrsBuilder?.className ?? '';
        this.style = AttrsBuilder?.style ?? {};
        this.id = AttrsBuilder?.id ?? '';
        this.name = AttrsBuilder?.name ?? '';
        this.value = AttrsBuilder?.value ?? null;
    
    }

        //this._class = AttrsBuilder?._className ?? '';
        //this._style = AttrsBuilder?._style ?? {};
        //this._id = AttrsBuilder?._id ?? '';
        //this.cla = AttrsBuilder?.className ?? '';
        //this.style = AttrsBuilder?.style ?? {};
        //this.id = AttrsBuilder?.id ?? '';
        
   /*     if (AttrsBuilder != null || undefined){
            for (const key in Object.keys(AttrsBuilder)){
                if (key !== ('className'||'id'||'style')){
                    this[key] = AttrsBuilder[key];
                }
            }
        }   
     */
    static get AttrsBuilder() {
        class AttrsBuilder{
            constructor(AttrsBuilder){
                this.className = AttrsBuilder?.className ?? '';
                this.style = AttrsBuilder?.style ?? {};
                this.id = AttrsBuilder?.id ?? '';
                this.name = AttrsBuilder?.name ?? '';
                this.value = AttrsBuilder?.value ?? null;

               
            }   
        withClass(string) {
            if (this.className !== '') {
                this.className += ` ${string}`;
            } else {
                this.className = string;
            }
            return this;
        }
        withStyle({styleObjectkey, styleObjectValue} = styleObject) {
            if (typeof this.style === 'object' && Object.keys(this.style) > 0) {
                this['style'][styleObjectkey] = styleObjectValue;
            
            }
            return this;
        }
        withId(val) {
            this.id = val;
            return this;
        }
        withName(name) {
            this.name = name;
            return this;
        }
        withValue(val){
            this.value = val;
            return this;
        }
        setAttribute(AttrName, AttrVal) {
            Object.defineProperty(this, `${AttrName}`, {
                value: AttrVal,
                writable: true,
                configurable: true,
                enumerable: true
            })
            return this;
        }
        build() {
            return new AttrsBuilder(this);
            }
        }
        return AttrsBuilder;
    }
}

class PropsBuild {
    /**
     * This is designed to be a helpful builder
     * @param {Object} PropsBuilder Instance of the PropsBuilder Class OR can be a Javascript Object
     */
    constructor (PropsBuilder){
        this.data = PropsBuilder.data ?? null;
        this.children = PropsBuilder.children ?? [];

        for (const key in Object.keys(PropsBuilder)){
            if (key !== ('data'||'children')){
                this[key] = PropsBuilder[key];
            }
        }
    }
    static get PropsBuilder() {
        class PropsBuilder{
            constructor(propsBuilder){
                Object.defineProperties(this,{ 
                    'children': {
                        writable: true,
                        enumerable: true,
                        configurable: false,
                        value: [],
                        },
                    'data' : {
                        writable: true,
                        enumerable: true,
                        configurable: true,
                        } 
                    })

                this.data = propsBuilder?.data ?? {};
                this.children = propsBuilder?.children ?? [];

            }   
            withData(object) {

                Object.defineProperty(this, 'data', {
                    writable: true,
                    configurable: true,
                    enumerable: true,

                    })
            
                this.data = object;
                return this;
            }
            withChildren(child) {
                if (Array.isArray(child)){
                    child.forEach(kid => { 
                        if ((kid instanceof Vnode) || (typeof kid === 'string')) {
                            this.children.push(kid);
                        } else {
                            throw('Children must be vnode Element or string')
                        }
                    });
                } else {
                    if ((child instanceof Vnode) || (typeof child === 'string')) {
                        this.children.push(child);
                        }
                }
                return this;
            }
            withProps(Prop, value) {

                Object.defineProperty(this ,`${Prop}`, {
                    enumerable: true,
                    configurable: true,
                    value: value
                });
                return this;
            }
            build() {
                return new PropsBuild(this);
                }
            }
            return PropsBuilder;
        }
}


class DomNode {
    constructor(tagName, attrs, props) {
        this.tagName = tagName;
        this._children = [];
        this.attrs = attrs || {};
        this.props = props || {};
        
        
        
        Object.defineProperties(this, {
            '_ParentID': {
                writable: true,
                configurable: false,
                enumerable: false
            },
            'ParentID': {
                configurable: false,
                enumerable: true,

                set (value) {
                    this._ParentID = value;
                },
                get () {
                    return this._ParentID;
                }
            }, 
            '_CompID': {
                writable: true,                
                configurable: false,
                enumerable: false,   
                },
            'CompID': {
                enumerable: true,
                set (value) {
                    this._CompID = value;
                },
                get () {
                    return this._CompID;
                    }
                },
            '_children' : {
                value: [],
                configurable: false,
                enumerable: true
                }
            }
        );
    }       
    getTagName() {
        return this.tagName;
    }
    add() {
        toBeOverwritten();
    }
    remove() {
        toBeOverWritten();
    }
    getChild(){
        toBeOverWritten();    
    }
    hasChildren(){
        toBeOverwritten();
    }

}


class DomTree extends DomNode {
    constructor(tagName, container, attrs, props) {
        super(tagName, attrs, props);
        this.root = container;
        this._children = [];

        this.CompID = 1;
        this.ParentID = 0;

        Object.defineProperties(this, {
            'children': {
                configurable: false,
                enumerable: true,
                get() {
                    return this._children;
                },
                set (val) {
                    this.add(val);
                }
            }
        });
    }
    /**
     * Adds nodes to the DomTree
     * @param {object} node 
     */
    add(node){
        this._children.push(node);
        const CompNum = (this.children.length + this._CompID);
        node.CompID = CompNum;
        node.ParentId = this.CompID;
    }
    /**
     * Take a number which corresponds to the index number of the node in the _children array.
     * @param {number} index 
     * @returns Array less one node
     */
    remove(index){
        const arrLength = this._children.length;
        if (typeof index != 'number'|| index == NaN) {
            throw ('DomTree.remove() only takes an integer as an argument')
        } else {
            let removeArray = [];
            for (let i = 0; i < this._children.length; i++) {
                if (i !== index) {
                    removeArray.push(this._children[i]);
                }
            }
            return this._children = removeArray;
        }        
    }
    replace(newNode, oldNodeIndex){

        let spliceArr = this._children;
        
        const oldNode = this.getChild(oldNodeIndex);

        let oldCompID = oldNode.CompID;

        /* CompID and ParentID of OldNode are set on newNode */
        newNode.CompID = oldCompID;
        newNode.ParentID = this.CompID;
        spliceArr.splice(oldNodeIndex , 1, newNode);
        
        
        return this._children = spliceArr;
    
    }
    /**
     * A getter that gives us a shortcut to accessing the children property without the constant need to type props.
     */
    
    /**
     * This will get a Child at a given array. It may be worth writing a function to traverse an array looking for a certain child (i.e call indexOf). 
     * @param {number} index An index number for an array 
     * @returns a child located at the given index in an array will re
     */
    getChild(index) {
        if ((typeof index == 'number'|| 'bigInt') && index != NaN) {
            if (index < this._children.length) {
                return this._children[index];
            } else {
                throw('DomTree.getChild(): Argument exceeds index');
            }
            
        } else {
            throw('DomTree.getChild() only takes number as parameter');
        }
    }
    /**
     * Checks type and length of children array. 
     * If it is not an Array or its length is not greater than 0, false will be returned.  
     * As we shall see later, leaf nodes such as those with Text will either have a specific check placed on them or will hold an empty children property.
     * 
     @returns true or false
     */
    hasChildren() {
        if (Array.isArray(this._children) && (this._children.length > 0 )) {
            return true;
        } else {
            return false;
        }
    }
    getRoot() {
        return this.root;
    }
}

class Vnode extends DomNode {
    constructor(vnodeBuilder) {
        super(vnodeBuilder.tagName);
        //this.tagName = vnodeBuilder.tagName;
        this.attrs = vnodeBuilder.attrs ?? {}; 
        this.props = vnodeBuilder.props ?? {};

        if (vnodeBuilder.props?.children != null) {
            if (vnodeBuilder.props?.children != undefined && vnodeBuilder.props?.children instanceof Array) {
                vnodeBuilder.props.children.forEach(child => this.add(child));
            } else {
                // Put Something Here?!?
            }
        }
    }
    static get vnodeBuilder() {
        class vnodeBuilder {
            /**
             * This builds our vNode for us and helps us to write objects in a fluent style. Note, the vNodeBuilder parameter is optional.
             * Note: Builder supports using fluent style (vnode.Builder.withTagName().withAttrs().build()). Always terminate with .build() to ensure 'this' value is returned.
             * @param {string} tagName Tag for HTML, defaults to 'div' if none supplied. HTML. The virtual DOM does not check this for validity,
             * @param {object} vnodeBuilder Object comprised of attrs and props. Optional as both default to empty object literals if nothing is passed. 
             */
            constructor(tagName, vnodeBuilder){
                this.tagName = tagName || (vnodeBuilder?.tagname ?? 'div');
                this.attrs = vnodeBuilder?.attrs ?? {};
                this.props = vnodeBuilder?.props ?? {};
            
            }
            /**
             * 
             * @param {string} tag Tag for HTML, defaults to 'div' if none supplied. HTML. The virtual DOM does not check this for validity,
             * @returns Object with {'tagName': {your_tag_here}}
             */
            withTagName(tag){
                this.tagName = tag;
                return this;
            }
            /**
             * Returns an attrs object to the instance. This function can be passed an AttrsBuild instance (including AttrsBuild.AttrsBuilder()).
             * @param {Object} attrs Object Comprised of attrs
             * @returns 
             */
            withAttrs(attrs) {
                this.attrs = attrs;
                return this;
                 
            }
            withProps(props){
                this.props = props;
                return this;
                
            }
            build() {
                return new vnodeBuilder(this.tagName, this);
            }
        }
        return vnodeBuilder;
    }
    /**
     * This adds a node as a child to the vNode. Also sets the CompID and ParentID on the node.
     * 
     * 
     * @param {any} node Must be instanceof Vnode or string;
     */
    add(node) {
        if (node instanceof Vnode || typeof node === 'string') {
            if ((this.CompID != null || 0) || node instanceof Vnode) {
                const CompNum = (this._CompID * 100) + this.children.length;
                node.CompID = CompNum;
                node.ParentId = this.CompID;
            }
            this._children.push(node);
            
        } else {
            throw new TypeError('Node must be string or Vnode');
        }
    }
    get children(){
        return this._children;
    }
    /**
     * 
     * @param {integer} index index number of child node in array.
     * @returns A string or a Vnode instance
     */
    getChild(index) {
        if ((typeof index == 'number'|| 'bigInt') && index != NaN) {
            if (index < this._children.length) {
                return this._children[index];
            } else {
                throw('vnode.getChild(): Argument exceeds index');
            }
            
        } else {
            throw('vnode.getChild() only takes number as parameter');
            }
        }
    
    /**
     * Checks to see if node has any child nodes
     * @returns true or false
     */
    hasChildren() {
        if (Array.isArray(this._children) && (this._children.length > 0 )) {
            return true;
        } else {
            return false;
        }
    }
    set ParentID(id) {
        this._ParentID = id;

    }
    set CompID(id) {
        this.CompID = id;
        let i = 1;
        this.children.forEach(child => {
            if ((child instanceof vnode || DomNode) && child.ParentID == null && child.CompID == null) {
                child.ParentID = this.CompID;
                child.CompID = (this.CompID * 100) + i;  
            }
            i++; 
        })
    }
}





/* ------------------------------------------------------------------------------------------------------------------- VIRTUAL DOM FUNCTIONS -------------------------------- */
const vdom = {
    /**
     * Simple alternative to the vNode & vNOde Builders
     * @param {String} tagName - 'div'; 'span'; 'p' etc.
     * @param {Object} attrs - Example: 'id: operand1, src:'img.jpg', alt:'Image of an example operand''
     * @param {Object} props - List of objects. Example: "'text: '400', children: [h(tagName, attrs, props), h(tagName...), ...children]"
     * @returns Object comprised of supplied arguments
     */
    h: function (tagName, attrs, props) {
        
        this.tagName = tagName;
        this.attrs= attrs;
        this.props = props;
    },
    /**
     * This function takes our virtual Dom and mounts it.
     * Turns the various nodes (objects) in DOM Elements which are then appended to one another.
     * 
     * @param {object} vnode Either a vnode or dom_tree instance
     * @param {Element} container An element object to which our virtual Dom will attach itself after manifestation.
     */
    mount: function (vnode, container) {
        // vnode is the vDOMElement we created earlier but with a more succinct name
        // container is the part of the existing DOM which will hold the rendered VDOM.
        // create DOM element by using createElement built-in function
        const el = document.createElement(vnode.tagName)

        vnode['el'] = el;
     
        // iterate over the js Object and set DOM attributes in accordance with the attrs assigned to the vDOM object
         /**
          * This loops passes key to a switch whih evaluates them and  conducts the necessary operations          
          * 
          * */
        for (const key in vnode.attrs) {
            switch(key) {
                case 'className':
                case 'class':
                    vnode.el.setAttribute('class', `${vnode['attrs'][key]}`);
                    break;
                case 'style':
                    let styleString = '';
                    for (const key in vnode['attrs']['_style']){
                        styleString += `${key}:${vnode['attrs']['_style'][key]};`
                    }
                    vnode.el.setAttribute('style', styleString);
                case 'id':
                    vnode.el.setAttribute('id', `${vnode['attrs']['_id']}`)
                default:
                    vnode.el.setAttribute(key, `${vnode['attrs'][key]}`);
            }   
        } 
        /**
         * The _children property is marked private on our Vnode. It copies the children in props.children. _children will either contain vnodes or strings, which we can deal with here specifically.
         */
        // loop over props object and assign data to textNode or attribute
        if (vnode.hasChildren() === true) {
            for (const child of vnode._children) {
                if (typeof child === 'object') {
                            vdom.mount(child, vnode.el);
                        } else {
                            vnode.el.append(child);
                            }
                        }
                    }
        container.appendChild(vnode.el);
    },

    unmount: function(vnode) {
        if (vnode.hasOwnProperty('el') && (vnode.el.parentElement) !== null) {
                vnode.el.parentElement.removeChild(vnode.el);
                }
             else {
                throw new Error(`${vnode} could not be unmounted. No element property.`);
            }
    
    }, 
    /**
     * @param {object} oldNode - a vnode or a dom_tree object 
     * @param {object} newNode - a vnode or a dom_tree object 
    */ 
    patch: function(oldNode, newNode) {


        if (oldNode.hasOwnProperty('el')){
            newNode.el = oldNode.el;        
        } else {
            throw new Error(`${oldNode} does not have an element property set. Please render and mount it first.`);
        }
    
        const new_el = newNode.el;
        const parentNode = oldNode.el.parentElement;
    
        if (oldNode.tagName !== newNode.tagName) {
            vdom.unmount(oldNode);
            vdom.mount(newNode, parentNode);
            
        } else {      
            if (newNode.children.length !== oldNode.children.length) {
                const aChild = oldNode.children;
                const bChild = newNode.children;
                const common_length = Math.min(aChild.length, bChild.length);
    
                for (let i = 0; i < common_length; i++) {
                    vdom.patch(aChild[i], bChild[i]);
                }
                if (bChild > aChild){
                    bChild.slice(aChild.length).forEach(child => {
                        vdom.mount(child, new_el);
                });
    
                } else {
                    aChild.slice(bChild.length).forEach(child => {
                        vdom.unmount(child);
                    });
                }
            } else {
                vdom.unmount(oldNode);
                vdom.mount(newNode, parentNode)
                
            }
        }
        return newNode;
    }
}


/* ---------------------------------------------------------------------------------------------------------------------- END OF LIBRARY ---------------------------------- */



/* -------------------------------------------------------------------------------------------- APP -------------------------------------------------------------------------- */

function createButton(buttonValue, buttonName, buttonClasses) {

    const button_vnode = new Vnode(new Vnode.vnodeBuilder()
                            .withTagName('button')
                            .withAttrs(new AttrsBuild(new AttrsBuild.AttrsBuilder()
                                        .withId(`${buttonName}`)
                                        .withClass(`${buttonClasses}`)
                                        .withClass(`${buttonName}`)
                                        .withName(`${buttonName}`)
                                        .withValue(`${buttonValue}`)
                                        .build())
                                    )
                            .withProps(new PropsBuild.PropsBuilder()
                                        .withChildren([`${buttonValue}`])
                                        .build()
                                    )
                            .build()
                                );
    return button_vnode;
}

function createComponent(tag, classNames = '', id = '') {

    return new Vnode(new Vnode.vnodeBuilder()
        .withTagName(tag)
        .withAttrs(new AttrsBuild(new AttrsBuild.AttrsBuilder()
                    .withId(id)
                    .withClass(classNames)
                    .build())
                )
        .withProps(new PropsBuild.PropsBuilder()
                    .build()
                    )
        .build()
            );
}
/**
 * 
 * @param {string} tag 
 * @param {string} state sets the vNodes sole child - a string.
 * @param {string} classNames 
 * @param {string} id 
 * @returns new Vnode with above
 */
function createTextComponent(tag, state, classNames, id) {

    return new Vnode(new Vnode.vnodeBuilder()
                            .withTagName(tag)
                            .withAttrs(new AttrsBuild(new AttrsBuild.AttrsBuilder()
                                        .withId(id)
                                        .withClass(classNames)
                                        .build())
                                    )
                            .withProps(new PropsBuild.PropsBuilder()
                                        .withChildren([`${state}`])
                                        .build()
                                    )
                            .build()
                                );
}

/* --------------------------------------------------------------------------------------------------------------------------------------END OF BUTTON BUILDER FUNCTION -------- */

/* ------------------------------------------------- ----------------------------------------------------------------------------------- CHANGEPAGE FUNCTION ----------------- */
/* ----------------------------------------------------------------------------------------------------------------- END OF changePage() Function ------------------ */

document.addEventListener('DOMContentLoaded', () => {

    console.log('DOM CONTENT LOADED listener fired');

/* ----------------------------------------------------------------------------------------------- Basic Display Components --------------------------- */
    const display_calc = createComponent('div', 'display lightmode-bg', 'appRoot');    
    const result_display = createTextComponent('div', '0', 'number text-dark', 'result_display'); 
    const operation_display = createTextComponent('div', '0', 'number text-dark', 'op_display');

    const mountPoint = document.getElementById('app-container');
    const dom_tree = new DomTree('div', mountPoint);

    dom_tree.add(display_calc);
    display_calc.add(result_display);
    display_calc.add(operation_display);

    vdom.mount(dom_tree, mountPoint);

    let currentDomTree = dom_tree;

    const buttonTree = new DomTree('div', mountPoint, {'className': 'button-container'});

    function renderButtonComponent(tree) {

        const num_button_container = createComponent('div', 'num-buttons-container');

        const num_button = {'one': 1, 'two': 2, 'three':3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine':9, 'zero': 0} 
        const op_button = {'plus':'+', 'minus':'-', 'multiply':'x', 'divide':'÷', 'clear':'C','equals': '=', 'decimal' : '.'};

        for (const key in num_button) {
            let currButton = createButton(num_button[key], key, 'num-button lightmode-bg test-dark');
            num_button_container.add(currButton);
        }
        for (const key in op_button) {
            let currButton = null
            if (key !== 'equals') {
            currButton = createButton(op_button[key], key, 'num-button op-button-bg test-dark');

            } else {
            currButton = createButton(op_button[key], key, 'num-button equals-button-bg test-dark');
            }
            num_button_container.add(currButton);
        }
        tree.add(num_button_container);
        return tree;
    }
    
    vdom.mount(renderButtonComponent(buttonTree), mountPoint);

    function set_event_listeners(document, func) {
        let dom_buttons = document.getElementsByTagName('button');
        for (button of dom_buttons) {
            button.addEventListener('click', func);
        }    
    }

    
    
    /**
     * Creates a DOM Tree with an updated Display 
     * @param {string} operand 
     * @param {string} result
     * @returns new DomTree 
     */
    function makeNewTree(operand, result, tree) {

        const new_display_calc = createComponent('div', 'display lightmode-bg', 'appRoot');
        const new_result = createTextComponent('div', result, 'number text-dark', 'result_display');
        const new_op_display = createTextComponent('div', operand, 'number text-dark', 'op_display');

        new_display_calc.add(new_op_display);
        new_display_calc.add(new_result);
        tree.add(new_display_calc);

        return tree;
    }

    function updateDisplay(value, newTree){
        
        const newRoot = makeNewTree(value, '0', newTree);
        vdom.patch(currentDomTree, newRoot);
        currentDomTree = newRoot;

        return currentDomTree;
    }

    //set_event_listeners(document, function() {updateDisplay(this.value, currentDomTree, new DomTree('div', mountPoint))});
    set_event_listeners(document, function() {updateDisplay(this.value, new DomTree('div', mountPoint))});



    
}) /* --------------------------------------------------------------- END OF DOCUMENT CONTENT LOADED LISTENER ------------------------ */