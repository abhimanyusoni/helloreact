import simple from './images/simple.png';

const data = [
    {
        title: "A Simple Component",
        content: "React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.",
        contentMore: "JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.",
        imgsrc: simple,
    },
    {
        title: "A Stateful Component",
        content: "In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().",
        imgsrc: simple,
    },
    {
        title: "An Application",
        content: "Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.",
        imgsrc: simple,
    },
    {
        title: "A Component Using External Plugins",
        content: "React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time.",
        imgsrc: simple,
    },
]

export default data;