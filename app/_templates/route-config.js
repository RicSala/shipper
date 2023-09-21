export const dynamicParams = true; // true | false,
// true (default): Dynamic segments not included in generateStaticParams are generated on demand.
// false: Dynamic segments not included in generateStaticParams will return a 404.

export const dynamic = 'auto';
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
// 'error': Force static rendering and cache the data of a layout or page by causing an error if any components use dynamic functions or uncached data.

export const revalidate = false;
// false | 'force-cache' | 0 | number (seconds)
// Set the default revalidation time for a layout or page. This option does not override the revalidate value set by individual fetch requests.
