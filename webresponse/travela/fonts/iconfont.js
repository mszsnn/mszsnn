;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1229 1024">' +
    '' +
    '<path d="M0 0l0 102.399586 1228.800552 0L1228.800552 0 0 0zM0 563.199793l1228.800552 0 0-102.399586L0 460.800207 0 563.199793zM0 1024l1228.800552 0 0-102.399586L0 921.600414 0 1024z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidan1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M60.14976 308.92032l903.70048 0c32.31744 0 58.60352-29.02016 58.60352-64.69632s-26.28608-64.69632-58.60352-64.69632L60.14976 179.52768c-32.3072 0-58.59328 29.02016-58.59328 64.69632S27.84256 308.92032 60.14976 308.92032z"  ></path>' +
    '' +
    '<path d="M963.85024 447.30368 60.14976 447.30368c-32.3072 0-58.59328 29.02016-58.59328 64.69632s26.28608 64.69632 58.59328 64.69632l903.70048 0c32.31744 0 58.60352-29.0304 58.60352-64.69632S996.15744 447.30368 963.85024 447.30368z"  ></path>' +
    '' +
    '<path d="M963.85024 715.06944 60.14976 715.06944c-32.3072 0-58.59328 29.0304-58.59328 64.69632s26.28608 64.69632 58.59328 64.69632l903.70048 0c32.31744 0 58.60352-29.02016 58.60352-64.69632S996.15744 715.06944 963.85024 715.06944z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconset0193" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128 303.104l750.592 0c47.104 0 84.992-38.912 84.992-84.992s-38.912-84.992-84.992-84.992L128 133.12c-47.104 0-84.992 38.912-84.992 84.992C47.104 264.192 84.992 303.104 128 303.104zM128 179.2l750.592 0c21.504 0 43.008 17.408 43.008 43.008 0 21.504-17.408 43.008-43.008 43.008L128 265.216c-21.504 0-43.008-17.408-43.008-43.008C89.088 196.608 106.496 179.2 128 179.2zM878.592 720.896 128 720.896c-47.104 0-84.992 38.912-84.992 84.992 0 47.104 37.888 84.992 84.992 84.992l750.592 0c47.104 0 84.992-38.912 84.992-84.992C964.608 759.808 925.696 720.896 878.592 720.896zM878.592 844.8 128 844.8c-21.504 0-43.008-17.408-43.008-43.008 0-21.504 17.408-43.008 43.008-43.008l750.592 0c21.504 0 43.008 17.408 43.008 43.008S904.192 844.8 878.592 844.8zM878.592 427.008 128 427.008c-47.104 0-84.992 38.912-84.992 84.992s37.888 84.992 84.992 84.992l750.592 0c47.104 0 84.992-38.912 84.992-84.992S925.696 427.008 878.592 427.008zM878.592 555.008 128 555.008c-21.504 0-43.008-17.408-43.008-43.008 0-21.504 17.408-43.008 43.008-43.008l750.592 0c21.504 0 43.008 17.408 43.008 43.008C921.6 533.504 904.192 555.008 878.592 555.008z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M949.082218 519.343245 508.704442 107.590414 68.326667 518.133697c-8.615215 8.03193-9.096169 21.538549-1.043772 30.144554 8.043187 8.599865 21.566178 9.085936 30.175253 1.035586l411.214573-383.337665 411.232992 384.505257c4.125971 3.854794 9.363252 5.760191 14.5903 5.760191 5.690606 0 11.384281-2.260483 15.58393-6.757914C958.138478 540.883841 957.695387 527.388479 949.082218 519.343245L949.082218 519.343245zM949.082218 519.343245"  ></path>' +
    '' +
    '<path d="M814.699602 527.800871c-11.787464 0-21.349237 9.555633-21.349237 21.327748l0 327.037405L622.552373 876.166023 622.552373 648.662543 394.824789 648.662543l0 227.503481L224.032938 876.166023 224.032938 549.128619c0-11.772115-9.55154-21.327748-21.348214-21.327748-11.802814 0-21.35333 9.555633-21.35333 21.327748l0 369.691877 256.19494 0L437.526333 691.318038l142.329613 0 0 227.502457 256.1888 0L836.044746 549.128619C836.045769 537.356504 826.481949 527.800871 814.699602 527.800871L814.699602 527.800871zM814.699602 527.800871"  ></path>' +
    '' +
    '<path d="M665.254941 222.095307l128.095423 0 0 113.74867c0 11.789511 9.562796 21.332864 21.349237 21.332864 11.783371 0 21.346167-9.543354 21.346167-21.332864L836.045769 179.439812 665.254941 179.439812c-11.789511 0-21.35333 9.538237-21.35333 21.327748C643.900587 212.554 653.464407 222.095307 665.254941 222.095307L665.254941 222.095307zM665.254941 222.095307"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M716.6003 213.800623c-138.851102-138.915088-364.020238-138.915088-502.935326 0s-138.915088 364.084225 0 502.935326a355.573996 355.573996 0 0 0 502.935326 0 355.573996 355.573996 0 0 0 0-502.935326z m-580.359212 580.359212a465.183184 465.183184 0 1 1 657.783099 0 465.183184 465.183184 0 0 1-657.783099 0z m868.939152 211.156054a63.474789 63.474789 0 0 1-89.837303 0l-89.773316-89.837303a63.410803 63.410803 0 1 1 89.773316-89.773316l89.837303 89.773316a63.346816 63.346816 0 0 1 0 89.837303z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M716.66461 213.8c-138.85-138.914-364.02-138.914-502.935 0s-138.915 364.085 0 502.936a355.574 355.574 0 0 0 502.935 0 355.574 355.574 0 0 0 0-502.935zM136.30561 794.16a465.183 465.183 0 1 1 657.783 0 465.183 465.183 0 0 1-657.783 0z m868.94 211.156a63.475 63.475 0 0 1-89.838 0l-89.773-89.837a63.41 63.41 0 1 1 89.773-89.774l89.837 89.774a63.347 63.347 0 0 1 0 89.837z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M873.244444 830.448485c6.852525 8.016162 10.214141 16.808081 10.214142 26.50505 0 10.860606-3.878788 20.169697-11.507071 27.79798-6.852525 7.111111-16.549495 11.636364-27.280808 11.636364h-0.646465c-4.525253 0-8.921212-0.775758-13.187878-2.19798-6.464646-2.19798-11.894949-5.818182-16.032324-10.731313l0.129293 0.90505-211.652525-213.20404c-50.812121 35.943434-107.70101 53.915152-170.537374 53.915151-6.335354 0-12.670707-0.258586-19.264646-0.775757-12.929293-1.163636-24.824242-3.232323-36.20202-6.335354-35.555556-2.456566-82.618182-22.49697-121.276768-52.622222-23.40202-13.834343-55.466667-47.709091-79.385859-89.987879-19.523232-32.711111-32.711111-71.369697-36.848484-112.743434 2.19798 25.341414-2.456566-3.232323-2.715152-32.969697 0.258586 10.214141 0 3.878788 0-2.456566 0-17.842424 1.551515-35.29697 4.654546-52.234343 7.49899-46.674747 26.505051-89.6 54.044444-125.672727 13.705051-25.6 57.276768-64.646465 109.381818-88.565657-27.151515 11.119192 1.034343-4.266667 32.064647-15.127273 28.444444-10.343434 61.284848-16.290909 95.547474-16.290909 13.705051 0 26.892929 0.905051 39.434344 2.585859 33.745455 4.525253 65.939394 14.868687 96.840404 30.771717 49.907071 25.987879 90.117172 64.646465 117.268687 111.838384-9.826263-22.238384 10.60202 10.860606 24.565656 49.131313s20.169697 77.058586 18.488889 116.363636c-2.327273 65.680808-24.824242 124.767677-67.749495 177.260606L874.020202 830.448485h-0.775758zM684.735354 439.208081c0.258586-3.878788 0.387879-8.274747 0.387878-12.8 0-32.452525-6.464646-63.353535-18.10101-91.539394-13.705051-36.20202-35.814141-68.137374-63.870707-93.608081 21.850505 20.945455 7.111111 5.171717-9.69697-8.791919-31.288889-26.246465-69.559596-45.252525-111.70909-53.785859 26.634343 4.525253-9.438384-4.008081-47.321213-4.008081-10.214141 0-20.29899 0.646465-30.125252 1.810101-1.680808-0.129293-4.525253 0.258586-7.111111 0.905051l-4.525253 0.775758c-46.157576 7.369697-87.014141 26.763636-120.113131 54.949495-24.824242 15.515152-57.535354 57.923232-74.60202 107.70101-2.068687-7.111111-13.705051 31.806061-15.773738 74.60202-1.939394 42.79596 5.818182 82.488889 23.531314 118.949495 21.591919 47.450505 56.630303 85.591919 100.331313 110.416161-0.129293 5.688889 44.606061 26.505051 93.995959 32.711111 1.551515 3.10303 38.4 5.171717 75.507071-1.163636 32.064646-5.818182 60.638384-16.937374 86.238384-32.452525 8.921212-1.680808 41.244444-26.505051 66.585858-57.147475-9.826263 16.420202 18.230303-18.230303 36.202021-58.440404-25.858586 46.028283-15.127273 29.608081-6.59394 12.024243 16.420202-31.547475 26.246465-68.783838 26.763637-108.218182v7.111111z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.255261 935.96091l-0.028444-0.028443v0.028443h0.028444c9.130355 10.666302 13.709754 22.470343 13.709754 35.412124 0 14.477728-5.148269 26.850638-15.444806 37.147175A50.686268 50.686268 0 0 1 971.34459 1023.965015c-6.115347 0-12.003145-0.967078-17.720283-2.872791a47.216165 47.216165 0 0 1-15.444806-8.533042l-5.717138-4.579399-282.529014-284.5485c-67.837682 48.012582-143.724867 71.990429-227.604667 71.990429-8.390824 0-16.95231-0.369765-25.7129-1.109295a277.608293 277.608293 0 0 1-25.741342-3.441661 368.058536 368.058536 0 0 1-162.440673-59.446857c-53.359955-34.274385-96.053607-79.584836-128.080957-135.988243a370.902883 370.902883 0 0 1-36.03788-83.424705 408.39138 408.39138 0 0 1-16.013675-90.279582 387.172549 387.172549 0 0 1 5.148269-91.417321 377.331108 377.331108 0 0 1 50.344946-137.723295 380.374559 380.374559 0 0 1 98.357529-109.137604c33.563298-26.679977 71.108682-47.244608 112.664595-61.722336A384.925515 384.925515 0 0 1 422.328682 0c18.317596 0 35.838776 1.137739 52.648867 3.44166 44.96913 6.086903 88.032548 19.796657 129.218697 41.129262a381.483855 381.483855 0 0 1 107.54477 82.286966c35.810332 37.34628 63.059179 81.518993 81.74654 132.575026 18.687362 51.056033 26.907525 102.851597 24.603604 155.415134-3.043452 87.634339-33.165089 166.479645-90.364913 236.564362l283.638309 284.5485h-1.109295z m-251.639403-522.250601a320.557936 320.557936 0 0 0-22.868552-137.125981 323.572945 323.572945 0 0 0-40.048409-75.43209c-16.781649-23.608082-36.407645-44.741582-58.877988-63.428944a338.477324 338.477324 0 0 0-72.616186-46.305973 332.276647 332.276647 0 0 0-178.425904-28.557246 52.620424 52.620424 0 0 0-10.296537 1.137738l-6.88332 1.137739a324.568466 324.568466 0 0 0-135.533147 54.270146 323.260066 323.260066 0 0 0-98.926398 106.862127c-28.187481 46.448191-43.632287 98.272198-46.334417 155.415134-2.673686 57.142937 7.793511 110.104683 31.458481 158.856795a319.989067 319.989067 0 0 0 86.325939 114.285873 330.570039 330.570039 0 0 0 126.374349 67.439473c48.808999 13.709754 97.987763 16.38344 147.536293 7.992616a332.617969 332.617969 0 0 0 75.517419-22.840108 345.81574 345.81574 0 0 0 68.036787-39.422653 346.356166 346.356166 0 0 0 57.199823-53.72972c17.151414-20.194866 31.458481-42.096339 42.892757-65.704422v0.028444a328.152344 328.152344 0 0 0 35.46901-134.878948z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)