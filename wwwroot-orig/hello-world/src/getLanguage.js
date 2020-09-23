import {getUrl} from 'seturl';
import get from 'get-object-value';
import {win, doc} from 'win-doc';
import getCookie, {setCookie} from 'get-cookie';

const langs = ['en', 'zh-hans', 'zh-hant', 'ja'];

const langMap = {
  ja: 'ja',
  jp: 'ja',
  tw: 'zh-hant',
  cn: 'zh-hans',
  us: 'en',
  en: 'en',
  'zh-tw': 'zh-hant',
  'zh-ch': 'zh-hans',
  'en-us': 'en',
  'ja-jp': 'ja',
};

const normalize = s => {
  const rawlang = s.replace('_', '-').toLowerCase();
  return get(langMap, [rawlang], rawlang);
};

const hostReg = /^(http)(s)?(\:\/\/)([^\.]*)/;
const getHostLang = url => get(hostReg.exec(url), [4], '');
const getLangByHost = url => {
  const l = normalize(getHostLang(url));
  let result = false;
  langs.some(lang => {
    if (lang === l) {
      result = lang;
      return true;
    } else {
      return false;
    }
  });
  return result;
};

const getLanguage = (url, nav) => {
  let result = langs[0];
  url = url || doc().URL;
  if (!url) {
    return result;
  }
  // first detect
  let l = getUrl('l', url);
  let needSetCooke = false;
  // second detect
  if (!l) {
    l = getLangByHost(url) || getCookie('django_language');
    // third detect
    if (!l) {
      if (!nav) {
        nav = win().navigator;
      }
      l = get(nav, ['userLanguage'], get(nav, ['language']));
    }
  } else {
    needSetCooke = true;
  }
  l = normalize(l);
  langs.some(lang => {
    if (lang === l) {
      result = lang;
      return true;
    } else {
      return false;
    }
  });
  if (needSetCooke) {
    setCookie('django_language', l);
  }
  return result;
};

export default getLanguage;
