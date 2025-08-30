1. createroot() : 
2. when we use normal javascript , then for every updation in UI , the complet DOM tree is created again by browser (called as page reload), therefore takes more time to load complex apps.
3. But react uses virtual dom (created by createroot()) which means it creates a copy of actual dom and updates only that part of ui which has been changed . 
4. reconciliation process :
    - when state changes, react compares old vdom with new vdom
    - if there are any differences between them , then react will update only those parts of ui which have been changed.
5. Fiber architecture :
    - fiber is a unit of work. It can be thought of as a task or job that React needs to perform during rendering.
    - Fiber allows React to break up large tasks into smaller chunks so that they can be processed incrementally over multiple frames.
    - This helps improve performance by preventing long-running computations from blocking the main thread.
    - When a component's state changes, React schedules an update using requestIdleCallback().
    - The scheduler determines how much time should be spent on each update based on factors like available CPU resources and user interactions.
    - Once enough time has passed since the last frame was rendered, React begins processing updates one at a time until all pending updates have been completed.   
6. Hooks:
    - Hooks allow you to reuse logic across components without having to create custom classes or inheritance hierarchies.
    - They provide a way to manage stateful behavior within functional components.
7. props: 
    - Props stands for properties and refers to data passed down from parent components to child components.
