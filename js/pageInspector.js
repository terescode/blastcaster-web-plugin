/*
 * Copyright (C) 2017, Terescode, LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Scott DeWitt <scott@terescode.com>, 2017
 */
var ExtensionPreprocessingJS = {};

(function (exports) {

  function replaceEntites(str) {
    var regex = /[&](?:([#][0-9]+)|([#]x[0-9a-f]+)|([a-zA-Z0-9]+))[;]/gi,
      entities = {
        "quot": 34,
        "amp": 38,
        "apos": 39,
        "lt": 60,
        "gt": 62,
        "nbsp": 160,
        "iexcl": 161,
        "cent": 162,
        "pound": 163,
        "curren": 164,
        "yen": 165,
        "brvbar": 166,
        "sect": 167,
        "uml": 168,
        "copy": 169,
        "ordf": 170,
        "laquo": 171,
        "not": 172,
        "shy": 173,
        "reg": 174,
        "macr": 175,
        "deg": 176,
        "plusmn": 177,
        "sup2": 178,
        "sup3": 179,
        "acute": 180,
        "micro": 181,
        "para": 182,
        "middot": 183,
        "cedil": 184,
        "sup1": 185,
        "ordm": 186,
        "raquo": 187,
        "frac14": 188,
        "frac12": 189,
        "frac34": 190,
        "iquest": 191,
        "Agrave": 192,
        "Aacute": 193,
        "Acirc": 194,
        "Atilde": 195,
        "Auml": 196,
        "Aring": 197,
        "AElig": 198,
        "Ccedil": 199,
        "Egrave": 200,
        "Eacute": 201,
        "Ecirc": 202,
        "Euml": 203,
        "Igrave": 204,
        "Iacute": 205,
        "Icirc": 206,
        "Iuml": 207,
        "ETH": 208,
        "Ntilde": 209,
        "Ograve": 210,
        "Oacute": 211,
        "Ocirc": 212,
        "Otilde": 213,
        "Ouml": 214,
        "times": 215,
        "Oslash": 216,
        "Ugrave": 217,
        "Uacute": 218,
        "Ucirc": 219,
        "Uuml": 220,
        "Yacute": 221,
        "THORN": 222,
        "szlig": 223,
        "agrave": 224,
        "aacute": 225,
        "acirc": 226,
        "atilde": 227,
        "auml": 228,
        "aring": 229,
        "aelig": 230,
        "ccedil": 231,
        "egrave": 232,
        "eacute": 233,
        "ecirc": 234,
        "euml": 235,
        "igrave": 236,
        "iacute": 237,
        "icirc": 238,
        "iuml": 239,
        "eth": 240,
        "ntilde": 241,
        "ograve": 242,
        "oacute": 243,
        "ocirc": 244,
        "otilde": 245,
        "ouml": 246,
        "divide": 247,
        "oslash": 248,
        "ugrave": 249,
        "uacute": 250,
        "ucirc": 251,
        "uuml": 252,
        "yacute": 253,
        "thorn": 254,
        "yuml": 255,
        "OElig": 338,
        "oelig": 339,
        "Scaron": 352,
        "scaron": 353,
        "Yuml": 376,
        "fnof": 402,
        "circ": 710,
        "tilde": 732,
        "Alpha": 913,
        "Beta": 914,
        "Gamma": 915,
        "Delta": 916,
        "Epsilon": 917,
        "Zeta": 918,
        "Eta": 919,
        "Theta": 920,
        "Iota": 921,
        "Kappa": 922,
        "Lambda": 923,
        "Mu": 924,
        "Nu": 925,
        "Xi": 926,
        "Omicron": 927,
        "Pi": 928,
        "Rho": 929,
        "Sigma": 931,
        "Tau": 932,
        "Upsilon": 933,
        "Phi": 934,
        "Chi": 935,
        "Psi": 936,
        "Omega": 937,
        "alpha": 945,
        "beta": 946,
        "gamma": 947,
        "delta": 948,
        "epsilon": 949,
        "zeta": 950,
        "eta": 951,
        "theta": 952,
        "iota": 953,
        "kappa": 954,
        "lambda": 955,
        "mu": 956,
        "nu": 957,
        "xi": 958,
        "omicron": 959,
        "pi": 960,
        "rho": 961,
        "sigmaf": 962,
        "sigma": 963,
        "tau": 964,
        "upsilon": 965,
        "phi": 966,
        "chi": 967,
        "psi": 968,
        "omega": 969,
        "thetasym": 977,
        "upsih": 978,
        "piv": 982,
        "ensp": 8194,
        "emsp": 8195,
        "thinsp": 8201,
        "zwnj": 8204,
        "zwj": 8205,
        "lrm": 8206,
        "rlm": 8207,
        "ndash": 8211,
        "mdash": 8212,
        "lsquo": 8216,
        "rsquo": 8217,
        "sbquo": 8218,
        "ldquo": 8220,
        "rdquo": 8221,
        "bdquo": 8222,
        "dagger": 8224,
        "Dagger": 8225,
        "bull": 8226,
        "hellip": 8230,
        "permil": 8240,
        "prime": 8242,
        "Prime": 8243,
        "lsaquo": 8249,
        "rsaquo": 8250,
        "oline": 8254,
        "frasl": 8260,
        "euro": 8364,
        "image": 8465,
        "weierp": 8472,
        "real": 8476,
        "trade": 8482,
        "alefsym": 8501,
        "larr": 8592,
        "uarr": 8593,
        "rarr": 8594,
        "darr": 8595,
        "harr": 8596,
        "crarr": 8629,
        "lArr": 8656,
        "uArr": 8657,
        "rArr": 8658,
        "dArr": 8659,
        "hArr": 8660,
        "forall": 8704,
        "part": 8706,
        "exist": 8707,
        "empty": 8709,
        "nabla": 8711,
        "isin": 8712,
        "notin": 8713,
        "ni": 8715,
        "prod": 8719,
        "sum": 8721,
        "minus": 8722,
        "lowast": 8727,
        "radic": 8730,
        "prop": 8733,
        "infin": 8734,
        "ang": 8736,
        "and": 8743,
        "or": 8744,
        "cap": 8745,
        "cup": 8746,
        "int": 8747,
        "there4": 8756,
        "sim": 8764,
        "cong": 8773,
        "asymp": 8776,
        "ne": 8800,
        "equiv": 8801,
        "le": 8804,
        "ge": 8805,
        "sub": 8834,
        "sup": 8835,
        "nsub": 8836,
        "sube": 8838,
        "supe": 8839,
        "oplus": 8853,
        "otimes": 8855,
        "perp": 8869,
        "sdot": 8901,
        "lceil": 8968,
        "rceil": 8969,
        "lfloor": 8970,
        "rfloor": 8971,
        "lang": 9001,
        "rang": 9002,
        "loz": 9674,
        "spades": 9824,
        "clubs": 9827,
        "hearts": 9829,
        "diams": 9830
      };
    return str.replace(regex, function (match, decEntity, hexEntity, entity) {
      if (decEntity) {
        return String.fromCharCode(parseInt(decEntity, 10));
      } else if (hexEntity) {
        return String.fromCharCode(parseInt(hexEntity, 16));
      } else if (entity) {
        if (entities[entity]) {
          return String.fromCharCode(entities[entity]);
        } else {
          return entity;
        }
      } else {
        return '';
      }
    });
  }

  function addUnique(ary, str, isUrl) {
    str = str.trim();
    if (str) {
      if (isUrl) {
        var found = false;
        ary.forEach(function (element, index) {
          if (element.toLowerCase() === str) {
            found = true;
          }
        });
        if (!found) {
          ary.push(str);
        }
      } else {
        str = replaceEntites(str);
        if (ary.indexOf(str) === -1) {
          ary.push(str);
        }
      }
    }
  }

  function addUniqueUrl(ary, url) {
    url = url.trim();
    if (url) {
      var idx = url.indexOf('?');
      if (-1 !== idx) {
        url = url.substr(0, idx);
      }
      addUnique(ary, url, true);
    }
  }

  function getText(node) {
    var children,
      i,
      text = null;
    if (node.hasChildNodes()) {
      children = node.childNodes;
      for (i = 0; !text && i < children.length; i += 1) {
        if (children[i].nodeType === 3) {
          if (children[i].textContent) {
            text = children[i].textContent.trim();
            if (20 > text.length) {
              text = null;
            }
          }
        }
      }
    }
    return text;
  }

  function getFirstPText(parent) {
    var itemProps = parent.querySelectorAll('p'),
      text = null,
      j;
    if (itemProps) {
      for (j = 0; !text && j < itemProps.length; j += 1) {
        text = getText(itemProps[j]);
      }
    }
    return text;
  }

  function processCanonicalUrl(pd) {
    var canonicalUrl = document.querySelectorAll('link[rel="canonical"]');
    if (canonicalUrl && 0 < canonicalUrl.length && canonicalUrl[0].href) {
      addUnique(pd.urls, canonicalUrl[0].href, true);
    }
  }

  function processMetaTags(pd) {
    var metaTags = document.querySelectorAll('meta'),
      tag,
      name,
      content,
      i;
    if (metaTags) {
      for (i = 0; i < metaTags.length; i += 1) {
        tag = metaTags[i];
        if (tag.name) {
          name = tag.name.toLowerCase();
        } else if (tag.hasAttribute('property')) {
          name = tag.getAttribute('property').toLowerCase();
        }

        if (tag.content) {
          content = tag.content;
        } else if (tag.hasAttribute('value')) {
          content = tag.getAttribute('value');
        }

        if (name && content) {
          if ('twitter:title' === name) {
            pd.twitterCard.title = content;
            addUnique(pd.titles, content);
          } else if ('twitter:description' === name) {
            pd.twitterCard.description = content;
            addUnique(pd.descriptions, content);
          } else if ('twitter:image' === name) {
            pd.twitterCard.image = content;
            addUniqueUrl(pd.images, content);
          } else if ('twitter:card' === name) {
            pd.twitterCard.cardType = content;
          } else if ('twitter:site' === name) {
            pd.twitterCard.site = content;
          } else if ('twitter:creator' === name) {
            pd.twitterCard.creator = content;
          } else if ('twitter:url' === name) {
            pd.twitterCard.url = content;
            addUnique(pd.urls, content, true);
          } else if ('og:title' === name) {
            pd.openGraph.title = content;
            addUnique(pd.titles, content);
          } else if ('og:description' === name) {
            pd.openGraph.description = content;
            addUnique(pd.descriptions, content);
          } else if ('og:image' === name) {
            pd.openGraph.image = content;
            addUniqueUrl(pd.images, content);
          } else if ('og:type' === name) {
            pd.openGraph.type = content;
          } else if ('og:site_name' === name) {
            pd.openGraph.site = content;
          } else if ('og:language' === name) {
            pd.openGraph.lang = content;
          } else if ('og:country-name' === name) {
            pd.openGraph.country = content;
          } else if ('article:tag' === name) {
            Array.prototype.push.apply(pd.tags, content.split(','));
          } else if ('article:section' === name) {
            Array.prototype.push.apply(pd.tags, content.split(','));
          } else if ('description' === name) {
            addUnique(pd.descriptions, content);
          } else if ('news_keywords' === name) {
            Array.prototype.push.apply(pd.tags, content.split(','));
          } else if ('keywords' === name) {
            Array.prototype.push.apply(pd.tags, content.split(','));
          }
        }
      }
    }
  }

  function processJsonLd(pd) {
    var nodes = document.querySelectorAll('script[type="application/ld+json"]'),
      jsonld,
      type,
      isArticle,
      i;
    if (nodes) {
      for (i = 0; i < nodes.length; i += 1) {
        if (nodes[i].textContent) {
          try {
            jsonld = JSON.parse(nodes[i].textContent);
            if (jsonld['@type']) {
              type = jsonld['@type'];
              isArticle = false;
              if (Array.isArray(type)) {
                isArticle = type.contains("Article")
                  || type.contains("NewsArticle");
              } else {
                isArticle = type === "Article"
                  || type === "NewsArticle";
              }
              if (isArticle) {
                if (jsonld.headline) {
                  addUnique(pd.titles, jsonld.headline);
                }
                if (jsonld.url) {
                  addUnique(pd.urls, jsonld.url, true);
                }
                if (jsonld.thumbnailUrl) {
                  addUniqueUrl(pd.images, jsonld.thumbnailUrl);
                }
                if (jsonld.keywords && Array.isArray(jsonld.keywords)) {
                  Array.prototype.push.apply(pd.tags, jsonld.keywords);
                }
              }
            }
          } catch (ignore) {
          }
        }
      }
    }
  }

  function processItemProps(pd) {
    var article = document.querySelectorAll('[itemtype*="//schema.org/Article"]'),
      itemProps,
      element,
      name,
      url,
      headline,
      description,
      text,
      i;
    if (article && 0 < article.length) {
      itemProps = article[0].querySelectorAll('[itemprop]');
      if (itemProps) {
        for (i = 0; i < itemProps.length; i += 1) {
          element = itemProps[i];
          name = element.getAttribute('itemprop').toLowerCase();
          if ('url' === name) {
            if (element.hasAttribute('href')) {
              url = element.getAttribute('href');
            } else if (element.hasAttribute('content')) {
              url = element.getAttribute('content');
            } else if (element.hasAttribute('src')) {
              url = element.getAttribute('src');
            }
            if (url) {
              addUnique(pd.urls, url, true);
            }
          } else if ('headline' === name) {
            if (element.hasAttribute('content')) {
              headline = element.getAttribute('content');
            } else {
              headline = element.textContent;
            }
            if (headline) {
              addUnique(pd.titles, headline);
            }
          } else if ('articlebody' === name) {
            // need a good heuristic for extracting article bodies
            text = getFirstPText(element);
            if (text) {
              addUnique(pd.descriptions, text);
            }
          } else if ('description' === name) {
            if (element.hasAttribute('content')) {
              description = element.getAttribute('content');
            } else {
              description = element.textContent;
            }
            if (description) {
              addUnique(pd.descriptions, description);
            }
          }
        }
      }
      itemProps = article[0].querySelectorAll('img');
      if (itemProps) {
        for (i = 0; i < 2; i += 1) {
          addUniqueUrl(pd.images, itemProps[i].src, true);
        }
      }
    }
  }

  function processArticleTags(pd) {
    var nodes = document.querySelectorAll('article'),
      article,
      images,
      text,
      i,
      j;
    if (nodes) {
      for (i = 0; i < nodes.length; i += 1) {
        article = nodes[i];
        text = getFirstPText(article);
        if (text) {
          addUnique(pd.descriptions, text);
        }
        images = article.querySelectorAll('img');
        if (images) {
          for (j = 0; j < 2 && j < images.length; j += 1) {
            addUniqueUrl(pd.images, images[j].src, true);
          }
        }
      }
    }
  }

  function processDocumentObject(pd) {
    addUnique(pd.urls, document.location.href, true);
    addUnique(pd.titles, document.title);
  }

  function processH1Tags(pd) {
    var nodes = document.querySelectorAll('h1'),
      i;
    if (nodes) {
      for (i = 0; i < nodes.length; i += 1) {
        addUnique(pd.titles, nodes[i].textContent);
      }
    }
  }

  function processImages(pd) {
    var i;
    if (document.images) {
      for (i = 0; i < document.images.length; i += 1) {
        addUnique(pd.allImages, document.images[i].src, true);
      }
    }
  }

  function PageData() {
    this.urls = [];
    this.titles = [];
    this.descriptions = [];
    this.tags = [];
    this.images = [];
    this.allImages = [];
    this.twitterCard = {};
    this.openGraph = {};
  }

  function DataExtractor(extractions) {
    this.extractions = extractions;
  }

  DataExtractor.prototype.extract = function (pageData) {
    this.extractions.forEach(function (fn, index) {
      fn(pageData);
    });
    return pageData;
  };

  exports.run = function (obj) {
    obj.completionFunction(new DataExtractor([
      processCanonicalUrl,
      processMetaTags,
      processJsonLd,
      processItemProps,
      processArticleTags,
      processDocumentObject,
      processH1Tags,
      processImages
    ]).extract(new PageData()));
  };

}(ExtensionPreprocessingJS));

if (typeof chrome !== 'undefined') {
  ExtensionPreprocessingJS.run({
    completionFunction: function (obj) {
      chrome.runtime.sendMessage({
        type: 'pageInspected',
        result: obj
      });
    }
  });
}
