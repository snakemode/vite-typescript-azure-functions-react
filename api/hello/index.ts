import { Context, HttpRequest } from "@azure/functions";

export default async function (context: Context, req: HttpRequest): Promise<void> {
  context.res = { status: 200, body: JSON.stringify({ hello: "world" }) };
}
