const cors = "https://cors-anywhere.herokuapp.com/";
const getTokenUrl = "https://oauth.fatsecret.com/connect/token";

export const getToken = async () => {
  const response = await fetch(cors + getTokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
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
