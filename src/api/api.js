const justCorsUrl = "https://justcors.com/tl_a74b835/";
const getTokenUrl = "https://oauth.fatsecret.com/connect/token";
const apiUrl = "https://platform.fatsecret.com/rest/server.api/";

export const getToken = async () => {
  const response = await fetch(justCorsUrl + getTokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
      Authorization:
        "Basic " +
        btoa(
          "3db7ae348a784bb69c326c30c05774be" +
            ":" +
            "3a1f51f995fa4fa3a5f00a54f5650caf"
        ),
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      scope: "basic",
    }),
  });
  const data = await response.json();
  return data.access_token;
};

export const searchApi = async (string = "") => {
  let token = localStorage.token;
  const response = await fetch(
    apiUrl + `?method=foods.search&search_expression=${string}&format=json`,
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + token,
      },
    }
  );
  const data = await response.json();
  return data.foods.food;
};

export const getByIdApi = async (id) => {
  let token = localStorage.token;
  const response = await fetch(
    apiUrl + `?method=food.get.v3&food_id=${id}&format=json`,
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + token,
      },
    }
  );
  const data = await response.json();
  return data.food;
};
