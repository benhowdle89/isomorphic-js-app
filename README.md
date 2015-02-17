# Isomorphoric JS app

### Tech used (buzzywords if you will)
* React.js for Views
* Backbone.js for Model, Collection and Router logic
* Node.js for the server
* Browserify for making shared logic happen
* npm as the build/dev tool

### What is it?

It's a JavaScript app that takes advantage of PushState to navigate between different URLs/views.

**HOWEVER**

Because it uses React.js, we can render the initial set of HTML on the server and provide that on page load.

### Isomorphic

tl;dr: No code is repeated between the server & the client, ie. routes are shared, views are shared, data is shared.

### Bootstrapped

No AJAX requests are made on page load. We use the Backbone router to work out what data the user will want to see, and just send it along in the initial payload from the server.

### Why?

Because I wanted to play with React.js, and I figured the best way for me to learn it was to make it work within the kind of apps I build. I then took it one step further with the Isomorphic/server-rendering stuff.
