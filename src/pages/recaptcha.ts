import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  interface RequestData {
    recaptcha: string;
  }

  const data: RequestData = await request.json();
  console.log("data recaptcha:")
  console.log("ebat captcha!")
  console.log(data.recaptcha)
  const recaptchaURL = "https://www.google.com/recaptcha/api/siteverify";
  const requestHeaders: HeadersInit = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  console.log()
  const requestBody = new URLSearchParams({
    secret: import.meta.env.RECAPTCHA_SECRET_KEY || "",
    response: data.recaptcha,
  });
  console.log("request body:")
  console.log(requestBody)
  const response = await fetch(recaptchaURL, {
    method: "POST",
    headers: requestHeaders,
    body: requestBody.toString(),
  });

  const responseData = await response.json();
  console.log("response data:")
  console.log(responseData)
  return new Response(JSON.stringify(responseData), { status: 200 });
};