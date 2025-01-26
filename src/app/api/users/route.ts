import { NextRequest, NextResponse } from "next/server";



export const GET = async (request: NextRequest) => {
  console.log(request.url);
  console.log(request.nextUrl.searchParams.get('id'));

  return NextResponse.redirect(new URL('/', request.url));
};