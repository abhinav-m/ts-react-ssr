/**
 * Html
 * This Html.ts file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 *
 * To do: Add meta tag options apart from title.
 */

const html = ({ body, title }: { body: string; title: string }) => {
  return(
  `<!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
    `);
};

export default html;
