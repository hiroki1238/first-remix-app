import {
  Form,
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./global.scss";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1 className="text-blue-700">Remix Contacts</h1>
          <div className="bg-cyan-100 p-4 rounded-md">
            <Form id="search-form" role="search" className="mb-4">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
            </Form>
            <Form method="post">
              <button type="submit" className="bg-blue-500 text-white px-2">
                New
              </button>
            </Form>
          </div>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <a
                  href={`/contacts/1`}
                  className="text-blue-500 hover:underline"
                >
                  Your Name
                </a>
              </li>
              <li>
                <a
                  href={`/contacts/2`}
                  className="text-blue-500 hover:underline"
                >
                  Your Friend
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
