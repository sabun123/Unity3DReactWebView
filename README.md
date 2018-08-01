# Unity3DReactWebView
Unity3D WebGL inside a ReactJS web view

A ReactJS SPA web app that should be able to communicate with an
embedded Unity3D WebGL game.

Utilizes:
1. ReactJS 16
2. Webpack 4
3. Redux 4
4. React Router Redux 5 Alpha9
5. Bootstrap 3.3.7

WARNING:
Important to use React Router Redux 5 otherwise the application fails with React.create,
where it claims it receives undefined stating that something has not been properly exported
even though that is not the case.

NOTE:
Using Bootstrap version 3 still since React Bootstrap currently only supports that version.