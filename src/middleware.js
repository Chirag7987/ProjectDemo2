import { NextResponse } from 'next/server';

const middleware = (req) => {
  try {
    // Use a hardcoded localhost URL
    const appUrl = 'http://localhost:3000';
    const { host: appHost } = new URL(appUrl);

    const url = req.nextUrl.clone();
    const { pathname } = req.nextUrl;
    const hostname = req.headers.get('host');

    // Check if hostname exists
    if (!hostname) {
      console.error('Hostname is missing from the request headers.');
      return new Response('Invalid request.', { status: 400 });
    }

    // Get the subdomain
    const currentHost = hostname.replace(`.${appHost}`, '');

    // Handle special cases for specific paths
    if (pathname.startsWith(`/_sites`)) {
      return new Response(null, { status: 404 });
    }

    if (!pathname.includes('.') && !pathname.startsWith('/api')) {
      if (hostname === 'localhost:3000') {
        // If hostname matches localhost, serve the main app
        url.pathname = `${pathname}`;
      } else {
        // Otherwise, handle as a subdomain request
        url.pathname = `/_sites/${currentHost}${pathname}`;
      }

      return NextResponse.rewrite(url);
    }
  } catch (error) {
    console.error('Middleware error:', error.message);
    return new Response('Internal server error.', { status: 500 });
  }
};

export default middleware;
