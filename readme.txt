A UI in react is a composition of components.
Data Flow -> parent child relationship.  Normally parents provide data to their children -> flowing down.
Data supplied to a child component by its parent is referred to as properties.
Actions flow up -> A parent component can pass a function to a child as well.
                    Child components use these functions to tell the parent about what happened, onchange, or onclick events for instance.
A component can be Rendered in wo way: 1. appears inside the JSX of another component. 2. passed to ReactDOM to be rendered.

Attributes passed to JSX elements must appear in camelCase.
        Notice that in our TimerDisplay example, the div‘s class is defined with a className Similarly,
        event handlers like onclick and onchange become onClick and onChange.

JSX elements must be wrapped in an enclosing tag -> always return 1 element: <div> elem1, elem2, elem3 </div> -> fiv is returned.

props -> properties from the parent, cannot be changed by the child.
state  -> data from parent that CAN be changed by the child.
        Changing state will re-render the component and all it's children.

lifeCycle functions: constructor, render
                       componentDidMount = after React finished loading it and after render is executed.

