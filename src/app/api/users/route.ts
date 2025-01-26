import { NextRequest, NextResponse } from "next/server";
import { fetchUsers } from "../../../../utils/actions";


export const GET = async (request: NextRequest) => {
  console.log(request.url);
  console.log(request.nextUrl.searchParams.get('id'));

  const users = await fetchUsers();
  return NextResponse.redirect(new URL('/', request.url));
};