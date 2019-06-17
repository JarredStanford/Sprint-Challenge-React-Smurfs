1.  Explain the differences between `client-side routing` and `server-side routing`.

    Client-side routing loads all of the required Javascript when the user first accesses the page. User requests are handled by routing the javascript that is already loaded. This allows the app to provide quicker transitions from page to page and doesn't require a full reload with each page transition.

    Server-side routing sends only the data required for the currently presented page. This requires a full repaint of the page with each new request. One strength of server-side is SEO optimization. Many sites still use Server-side for their marketing and landing pages, but stick with client-side for their actual apps where SEO is not really important.

1)  What does HTTP stand for?

    HyperText transfer protocol. A set of rules for web browers to communication with servers.

1)  What does CRUD stand for?

    Create, read, update, delete.

1)  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    C = post
    R = get
    U = put
    D = delete

1)  Mention three tools we can use to make AJAX requests

    1. return New Promise
    2. fetch (newer tool built into browser APIs that does not require its own package)
    3. axios (requires package that increases web page load but is very powerful.)
