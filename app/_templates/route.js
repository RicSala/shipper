export async function GET(request, { params }) {
  const team = params.team; // '1'
}

// OTHER METHODS

export async function HEAD(request) {}

export async function POST(request) {
  const body = await request.json();
}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request) {}
