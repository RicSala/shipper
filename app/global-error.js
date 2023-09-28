// This file is a "global-error" file. Specifically created to catch errors in the layout of the App root segment (as those wouldn't be catched by a normal error.js file). It won't catch errors that are not trown in the layout (aka, it doesn't work as a "catch all errors" file, you need to create also the error.js in the main route for that)

// About error.js files:
// "route" error files should be named "error.js" and will create an error boundary for the routes in that segment (excep those thrown in the layout - for those, use the error in the parent segment)

"use client";

export default function GlobalError({ error, reset }) {
  // In server components, the message will be a generic one to avoid leaking sensitive details
  const { message } = error;

  return (
    <html>
      <body>
        <h2>Something went wrong (GLOBAL)</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
