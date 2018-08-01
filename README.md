# Unity3DReactWebView
Unity3D WebGL inside a ReactJS web view

A ReactJS SPA web app that should be able to communicate with an
embedded Unity3D WebGL game. Tested in Chrome 67

Utilizes:
1. ReactJS 16
2. Webpack 4
3. Redux 4
4. React Router Redux 5 Alpha9
5. Bootstrap 3.3.7
6. Unity3D 2018.1.8f1 WebGL game build
7. react-unity-webgl 7.0.6

WHY:
Instead of using traditional WebGL code in development (which is hard to learn let alone master),
if one was to setup a WebGL build in Unity for data visualization,
and ReactJS/Redux could feed it data, it would simplify the development
process, increase re-usability and better yet be able to make mad visuals.
This is an attempt to see if that is doable.

WARNING:
Important to use React Router Redux 5 otherwise the application fails with React.create,
where it claims it receives undefined stating that something has not been properly exported
even though that is not the case.

NOTE:
Using Bootstrap version 3 still since React Bootstrap currently only supports that version.