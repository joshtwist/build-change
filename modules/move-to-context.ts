import {ZuploContext, ZuploRequest} from "@zuplo/runtime";


export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: never,
  policyName: string
) {
 
  const foo = request.params.foo;

  context.custom.params = { 
    foo : (foo === "cat") ? "dog" : foo
  };

  return request;
}
