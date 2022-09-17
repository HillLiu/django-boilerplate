import { ajaxDispatch } from "organism-react-ajax";

const getConfig = (l) => {
  const configUrl = "/conf/" + (l ? "?l=" + l : "");
  ajaxDispatch("ajaxGet", {
    url: configUrl,
    ini: true,
  });
};

export default getConfig;
