import axios from "axios";

// eslint-disable-next-line no-undef
const BASE_URL = process.env["REACT_APP_TMDB_API_URL"];

export const API = axios.create({
  baseURL: BASE_URL,
});

export const axiosBaseQuery =
  (axios_api = API) =>
  async ({ method = "get", url, data = null, params = {} }: any) => {
    try {
      const result = await axios_api({
        url,
        method: method.toLowerCase(),
        data,
        params: {
          ...params,
          language: "en-US",
          // eslint-disable-next-line no-undef
          api_key: process.env["REACT_APP_API_KEY"],
        },
      });
      return { data: result.data };
    } catch (axiosError: any) {
      return {
        error: {
          status: axiosError.response.status,
          data: axiosError.response.data || axiosError.message,
        },
      };
    }
  };
