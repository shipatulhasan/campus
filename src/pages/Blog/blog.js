export const blogs = [
    {
        id:122210021,
        question:`what is cors ?`,
        ans:`
        Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.`

    },
    {
        id:122210023,
        question:`Why are you using firebase? What other options do you have to implement authentication?`,
        ans:`
        Firebase is easy to use and it's more secure then other server. It provides backend services and ready-made UI libraries to authenticate users to app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
        Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
        `

    },
    {
        id:122210025,
        question:`How does the private route work ?`,
        ans:`
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. This means that users must first meet certain conditions before accessing that specific route. For instance, In this application can require only logged-in users be able to visit the checkout page.
        `

    },
    {
        id:122210027,
        question:`What is Node? How does Node work?`,
        ans:`
        Node is used as backend service where javascript works on the server-side of the application. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
        `

    },

]