import _extends from '@babel/runtime/helpers/extends';
import * as primitives from '@react-pdf/primitives';
export * from '@react-pdf/primitives';
import _regeneratorRuntime from '@babel/runtime/helpers/regeneratorRuntime';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import fs from 'fs';
import { Buffer } from 'buffer';
import FontStore from '@react-pdf/font';
import renderPDF from '@react-pdf/render';
import PDFDocument from '@react-pdf/pdfkit';
import layoutDocument from '@react-pdf/layout';
import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/objectWithoutPropertiesLoose';
import require$$0 from 'object-assign';
import require$$1 from 'react';
import * as scheduler from 'scheduler';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var reactReconciler_production_min = {exports: {}};

var require$$2 = /*@__PURE__*/getAugmentedNamespace(scheduler);

/** @license React v0.23.0
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (module) {
	module.exports = function $$$reconciler($$$hostConfig) {

	  var aa = require$$0,
	    ba = require$$1,
	    m = require$$2;
	  function n(a) {
	    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
	    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	  }
	  var q = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	  q.hasOwnProperty("ReactCurrentDispatcher") || (q.ReactCurrentDispatcher = {
	    current: null
	  });
	  q.hasOwnProperty("ReactCurrentBatchConfig") || (q.ReactCurrentBatchConfig = {
	    suspense: null
	  });
	  var u = "function" === typeof Symbol && Symbol.for,
	    ca = u ? Symbol.for("react.element") : 60103,
	    da = u ? Symbol.for("react.portal") : 60106,
	    ea = u ? Symbol.for("react.fragment") : 60107,
	    fa = u ? Symbol.for("react.strict_mode") : 60108,
	    ha = u ? Symbol.for("react.profiler") : 60114,
	    ia = u ? Symbol.for("react.provider") : 60109,
	    ja = u ? Symbol.for("react.context") : 60110,
	    ka = u ? Symbol.for("react.concurrent_mode") : 60111,
	    la = u ? Symbol.for("react.forward_ref") : 60112,
	    ma = u ? Symbol.for("react.suspense") : 60113,
	    na = u ? Symbol.for("react.suspense_list") : 60120,
	    oa = u ? Symbol.for("react.memo") : 60115,
	    pa = u ? Symbol.for("react.lazy") : 60116;
	  var qa = "function" === typeof Symbol && Symbol.iterator;
	  function ra(a) {
	    if (null === a || "object" !== typeof a) return null;
	    a = qa && a[qa] || a["@@iterator"];
	    return "function" === typeof a ? a : null;
	  }
	  function sa(a) {
	    if (-1 === a._status) {
	      a._status = 0;
	      var b = a._ctor;
	      b = b();
	      a._result = b;
	      b.then(function (b) {
	        0 === a._status && (b = b.default, a._status = 1, a._result = b);
	      }, function (b) {
	        0 === a._status && (a._status = 2, a._result = b);
	      });
	    }
	  }
	  function ta(a) {
	    if (null == a) return null;
	    if ("function" === typeof a) return a.displayName || a.name || null;
	    if ("string" === typeof a) return a;
	    switch (a) {
	      case ea:
	        return "Fragment";
	      case da:
	        return "Portal";
	      case ha:
	        return "Profiler";
	      case fa:
	        return "StrictMode";
	      case ma:
	        return "Suspense";
	      case na:
	        return "SuspenseList";
	    }
	    if ("object" === typeof a) switch (a.$$typeof) {
	      case ja:
	        return "Context.Consumer";
	      case ia:
	        return "Context.Provider";
	      case la:
	        var b = a.render;
	        b = b.displayName || b.name || "";
	        return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
	      case oa:
	        return ta(a.type);
	      case pa:
	        if (a = 1 === a._status ? a._result : null) return ta(a);
	    }
	    return null;
	  }
	  function ua(a) {
	    var b = a,
	      c = a;
	    if (a.alternate) for (; b.return;) b = b.return;else {
	      a = b;
	      do b = a, 0 !== (b.effectTag & 1026) && (c = b.return), a = b.return; while (a);
	    }
	    return 3 === b.tag ? c : null;
	  }
	  function va(a) {
	    if (ua(a) !== a) throw Error(n(188));
	  }
	  function wa(a) {
	    var b = a.alternate;
	    if (!b) {
	      b = ua(a);
	      if (null === b) throw Error(n(188));
	      return b !== a ? null : a;
	    }
	    for (var c = a, d = b;;) {
	      var e = c.return;
	      if (null === e) break;
	      var f = e.alternate;
	      if (null === f) {
	        d = e.return;
	        if (null !== d) {
	          c = d;
	          continue;
	        }
	        break;
	      }
	      if (e.child === f.child) {
	        for (f = e.child; f;) {
	          if (f === c) return va(e), a;
	          if (f === d) return va(e), b;
	          f = f.sibling;
	        }
	        throw Error(n(188));
	      }
	      if (c.return !== d.return) c = e, d = f;else {
	        for (var g = !1, l = e.child; l;) {
	          if (l === c) {
	            g = !0;
	            c = e;
	            d = f;
	            break;
	          }
	          if (l === d) {
	            g = !0;
	            d = e;
	            c = f;
	            break;
	          }
	          l = l.sibling;
	        }
	        if (!g) {
	          for (l = f.child; l;) {
	            if (l === c) {
	              g = !0;
	              c = f;
	              d = e;
	              break;
	            }
	            if (l === d) {
	              g = !0;
	              d = f;
	              c = e;
	              break;
	            }
	            l = l.sibling;
	          }
	          if (!g) throw Error(n(189));
	        }
	      }
	      if (c.alternate !== d) throw Error(n(190));
	    }
	    if (3 !== c.tag) throw Error(n(188));
	    return c.stateNode.current === c ? a : b;
	  }
	  function xa(a) {
	    a = wa(a);
	    if (!a) return null;
	    for (var b = a;;) {
	      if (5 === b.tag || 6 === b.tag) return b;
	      if (b.child) b.child.return = b, b = b.child;else {
	        if (b === a) break;
	        for (; !b.sibling;) {
	          if (!b.return || b.return === a) return null;
	          b = b.return;
	        }
	        b.sibling.return = b.return;
	        b = b.sibling;
	      }
	    }
	    return null;
	  }
	  function ya(a) {
	    a = wa(a);
	    if (!a) return null;
	    for (var b = a;;) {
	      if (5 === b.tag || 6 === b.tag) return b;
	      if (b.child && 4 !== b.tag) b.child.return = b, b = b.child;else {
	        if (b === a) break;
	        for (; !b.sibling;) {
	          if (!b.return || b.return === a) return null;
	          b = b.return;
	        }
	        b.sibling.return = b.return;
	        b = b.sibling;
	      }
	    }
	    return null;
	  }
	  var za = $$$hostConfig.getPublicInstance,
	    Aa = $$$hostConfig.getRootHostContext,
	    Ba = $$$hostConfig.getChildHostContext,
	    Ca = $$$hostConfig.prepareForCommit,
	    Da = $$$hostConfig.resetAfterCommit,
	    Ea = $$$hostConfig.createInstance,
	    Fa = $$$hostConfig.appendInitialChild,
	    Ga = $$$hostConfig.finalizeInitialChildren,
	    Ia = $$$hostConfig.prepareUpdate,
	    Ja = $$$hostConfig.shouldSetTextContent,
	    Ka = $$$hostConfig.shouldDeprioritizeSubtree,
	    La = $$$hostConfig.createTextInstance,
	    Ma = $$$hostConfig.setTimeout,
	    Na = $$$hostConfig.clearTimeout,
	    Oa = $$$hostConfig.noTimeout,
	    Pa = $$$hostConfig.isPrimaryRenderer,
	    Qa = $$$hostConfig.supportsMutation,
	    Ra = $$$hostConfig.supportsPersistence,
	    Sa = $$$hostConfig.supportsHydration,
	    Ta = $$$hostConfig.appendChild,
	    Ua = $$$hostConfig.appendChildToContainer,
	    Va = $$$hostConfig.commitTextUpdate,
	    Wa = $$$hostConfig.commitMount,
	    Xa = $$$hostConfig.commitUpdate,
	    Ya = $$$hostConfig.insertBefore,
	    Za = $$$hostConfig.insertInContainerBefore,
	    $a = $$$hostConfig.removeChild,
	    ab = $$$hostConfig.removeChildFromContainer,
	    bb = $$$hostConfig.resetTextContent,
	    cb = $$$hostConfig.hideInstance,
	    db = $$$hostConfig.hideTextInstance,
	    eb = $$$hostConfig.unhideInstance,
	    fb = $$$hostConfig.unhideTextInstance,
	    gb = $$$hostConfig.cloneInstance,
	    hb = $$$hostConfig.createContainerChildSet,
	    ib = $$$hostConfig.appendChildToContainerChildSet,
	    kb = $$$hostConfig.finalizeContainerChildren,
	    lb = $$$hostConfig.replaceContainerChildren,
	    mb = $$$hostConfig.cloneHiddenInstance,
	    nb = $$$hostConfig.cloneHiddenTextInstance,
	    ob = $$$hostConfig.canHydrateInstance,
	    pb = $$$hostConfig.canHydrateTextInstance,
	    qb = $$$hostConfig.isSuspenseInstancePending,
	    rb = $$$hostConfig.isSuspenseInstanceFallback,
	    sb = $$$hostConfig.getNextHydratableSibling,
	    tb = $$$hostConfig.getFirstHydratableChild,
	    ub = $$$hostConfig.hydrateInstance,
	    vb = $$$hostConfig.hydrateTextInstance,
	    wb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
	    xb = $$$hostConfig.commitHydratedContainer,
	    yb = $$$hostConfig.commitHydratedSuspenseInstance,
	    zb = /^(.*)[\\\/]/;
	  function Ab(a) {
	    var b = "";
	    do {
	      a: switch (a.tag) {
	        case 3:
	        case 4:
	        case 6:
	        case 7:
	        case 10:
	        case 9:
	          var c = "";
	          break a;
	        default:
	          var d = a._debugOwner,
	            e = a._debugSource,
	            f = ta(a.type);
	          c = null;
	          d && (c = ta(d.type));
	          d = f;
	          f = "";
	          e ? f = " (at " + e.fileName.replace(zb, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
	          c = "\n    in " + (d || "Unknown") + f;
	      }
	      b += c;
	      a = a.return;
	    } while (a);
	    return b;
	  }
	  var Bb = [],
	    Cb = -1;
	  function y(a) {
	    0 > Cb || (a.current = Bb[Cb], Bb[Cb] = null, Cb--);
	  }
	  function z(a, b) {
	    Cb++;
	    Bb[Cb] = a.current;
	    a.current = b;
	  }
	  var Db = {},
	    A = {
	      current: Db
	    },
	    B = {
	      current: !1
	    },
	    Eb = Db;
	  function Fb(a, b) {
	    var c = a.type.contextTypes;
	    if (!c) return Db;
	    var d = a.stateNode;
	    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
	    var e = {},
	      f;
	    for (f in c) e[f] = b[f];
	    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
	    return e;
	  }
	  function C(a) {
	    a = a.childContextTypes;
	    return null !== a && void 0 !== a;
	  }
	  function Gb(a) {
	    y(B);
	    y(A);
	  }
	  function Hb(a) {
	    y(B);
	    y(A);
	  }
	  function Ib(a, b, c) {
	    if (A.current !== Db) throw Error(n(168));
	    z(A, b);
	    z(B, c);
	  }
	  function Jb(a, b, c) {
	    var d = a.stateNode;
	    a = b.childContextTypes;
	    if ("function" !== typeof d.getChildContext) return c;
	    d = d.getChildContext();
	    for (var e in d) if (!(e in a)) throw Error(n(108, ta(b) || "Unknown", e));
	    return aa({}, c, {}, d);
	  }
	  function Kb(a) {
	    var b = a.stateNode;
	    b = b && b.__reactInternalMemoizedMergedChildContext || Db;
	    Eb = A.current;
	    z(A, b);
	    z(B, B.current);
	    return !0;
	  }
	  function Lb(a, b, c) {
	    var d = a.stateNode;
	    if (!d) throw Error(n(169));
	    c ? (b = Jb(a, b, Eb), d.__reactInternalMemoizedMergedChildContext = b, y(B), y(A), z(A, b)) : y(B);
	    z(B, c);
	  }
	  var Mb = m.unstable_runWithPriority,
	    Nb = m.unstable_scheduleCallback,
	    Ob = m.unstable_cancelCallback,
	    Pb = m.unstable_shouldYield,
	    Qb = m.unstable_requestPaint,
	    Tb = m.unstable_now,
	    Ub = m.unstable_getCurrentPriorityLevel,
	    Vb = m.unstable_ImmediatePriority,
	    Wb = m.unstable_UserBlockingPriority,
	    Xb = m.unstable_NormalPriority,
	    Yb = m.unstable_LowPriority,
	    Zb = m.unstable_IdlePriority,
	    $b = {},
	    ac = void 0 !== Qb ? Qb : function () {},
	    bc = null,
	    cc = null,
	    dc = !1,
	    ec = Tb(),
	    E = 1E4 > ec ? Tb : function () {
	      return Tb() - ec;
	    };
	  function fc() {
	    switch (Ub()) {
	      case Vb:
	        return 99;
	      case Wb:
	        return 98;
	      case Xb:
	        return 97;
	      case Yb:
	        return 96;
	      case Zb:
	        return 95;
	      default:
	        throw Error(n(332));
	    }
	  }
	  function gc(a) {
	    switch (a) {
	      case 99:
	        return Vb;
	      case 98:
	        return Wb;
	      case 97:
	        return Xb;
	      case 96:
	        return Yb;
	      case 95:
	        return Zb;
	      default:
	        throw Error(n(332));
	    }
	  }
	  function hc(a, b) {
	    a = gc(a);
	    return Mb(a, b);
	  }
	  function ic(a, b, c) {
	    a = gc(a);
	    return Nb(a, b, c);
	  }
	  function jc(a) {
	    null === bc ? (bc = [a], cc = Nb(Vb, kc)) : bc.push(a);
	    return $b;
	  }
	  function F() {
	    if (null !== cc) {
	      var a = cc;
	      cc = null;
	      Ob(a);
	    }
	    kc();
	  }
	  function kc() {
	    if (!dc && null !== bc) {
	      dc = !0;
	      var a = 0;
	      try {
	        var b = bc;
	        hc(99, function () {
	          for (; a < b.length; a++) {
	            var c = b[a];
	            do c = c(!0); while (null !== c);
	          }
	        });
	        bc = null;
	      } catch (c) {
	        throw null !== bc && (bc = bc.slice(a + 1)), Nb(Vb, F), c;
	      } finally {
	        dc = !1;
	      }
	    }
	  }
	  var lc = 3;
	  function mc(a, b, c) {
	    c /= 10;
	    return 1073741821 - (((1073741821 - a + b / 10) / c | 0) + 1) * c;
	  }
	  function nc(a, b) {
	    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	  }
	  var oc = "function" === typeof Object.is ? Object.is : nc,
	    pc = Object.prototype.hasOwnProperty;
	  function qc(a, b) {
	    if (oc(a, b)) return !0;
	    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
	    var c = Object.keys(a),
	      d = Object.keys(b);
	    if (c.length !== d.length) return !1;
	    for (d = 0; d < c.length; d++) if (!pc.call(b, c[d]) || !oc(a[c[d]], b[c[d]])) return !1;
	    return !0;
	  }
	  function rc(a, b) {
	    if (a && a.defaultProps) {
	      b = aa({}, b);
	      a = a.defaultProps;
	      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
	    }
	    return b;
	  }
	  var sc = {
	      current: null
	    },
	    tc = null,
	    uc = null,
	    vc = null;
	  function wc() {
	    vc = uc = tc = null;
	  }
	  function xc(a, b) {
	    var c = a.type._context;
	    Pa ? (z(sc, c._currentValue), c._currentValue = b) : (z(sc, c._currentValue2), c._currentValue2 = b);
	  }
	  function yc(a) {
	    var b = sc.current;
	    y(sc);
	    a = a.type._context;
	    Pa ? a._currentValue = b : a._currentValue2 = b;
	  }
	  function zc(a, b) {
	    for (; null !== a;) {
	      var c = a.alternate;
	      if (a.childExpirationTime < b) a.childExpirationTime = b, null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);else if (null !== c && c.childExpirationTime < b) c.childExpirationTime = b;else break;
	      a = a.return;
	    }
	  }
	  function Ac(a, b) {
	    tc = a;
	    vc = uc = null;
	    a = a.dependencies;
	    null !== a && null !== a.firstContext && (a.expirationTime >= b && (Bc = !0), a.firstContext = null);
	  }
	  function Cc(a, b) {
	    if (vc !== a && !1 !== b && 0 !== b) {
	      if ("number" !== typeof b || 1073741823 === b) vc = a, b = 1073741823;
	      b = {
	        context: a,
	        observedBits: b,
	        next: null
	      };
	      if (null === uc) {
	        if (null === tc) throw Error(n(308));
	        uc = b;
	        tc.dependencies = {
	          expirationTime: 0,
	          firstContext: b,
	          responders: null
	        };
	      } else uc = uc.next = b;
	    }
	    return Pa ? a._currentValue : a._currentValue2;
	  }
	  var Dc = !1;
	  function Ec(a) {
	    return {
	      baseState: a,
	      firstUpdate: null,
	      lastUpdate: null,
	      firstCapturedUpdate: null,
	      lastCapturedUpdate: null,
	      firstEffect: null,
	      lastEffect: null,
	      firstCapturedEffect: null,
	      lastCapturedEffect: null
	    };
	  }
	  function Fc(a) {
	    return {
	      baseState: a.baseState,
	      firstUpdate: a.firstUpdate,
	      lastUpdate: a.lastUpdate,
	      firstCapturedUpdate: null,
	      lastCapturedUpdate: null,
	      firstEffect: null,
	      lastEffect: null,
	      firstCapturedEffect: null,
	      lastCapturedEffect: null
	    };
	  }
	  function Gc(a, b) {
	    return {
	      expirationTime: a,
	      suspenseConfig: b,
	      tag: 0,
	      payload: null,
	      callback: null,
	      next: null,
	      nextEffect: null
	    };
	  }
	  function Hc(a, b) {
	    null === a.lastUpdate ? a.firstUpdate = a.lastUpdate = b : (a.lastUpdate.next = b, a.lastUpdate = b);
	  }
	  function Ic(a, b) {
	    var c = a.alternate;
	    if (null === c) {
	      var d = a.updateQueue;
	      var e = null;
	      null === d && (d = a.updateQueue = Ec(a.memoizedState));
	    } else d = a.updateQueue, e = c.updateQueue, null === d ? null === e ? (d = a.updateQueue = Ec(a.memoizedState), e = c.updateQueue = Ec(c.memoizedState)) : d = a.updateQueue = Fc(e) : null === e && (e = c.updateQueue = Fc(d));
	    null === e || d === e ? Hc(d, b) : null === d.lastUpdate || null === e.lastUpdate ? (Hc(d, b), Hc(e, b)) : (Hc(d, b), e.lastUpdate = b);
	  }
	  function Jc(a, b) {
	    var c = a.updateQueue;
	    c = null === c ? a.updateQueue = Ec(a.memoizedState) : Kc(a, c);
	    null === c.lastCapturedUpdate ? c.firstCapturedUpdate = c.lastCapturedUpdate = b : (c.lastCapturedUpdate.next = b, c.lastCapturedUpdate = b);
	  }
	  function Kc(a, b) {
	    var c = a.alternate;
	    null !== c && b === c.updateQueue && (b = a.updateQueue = Fc(b));
	    return b;
	  }
	  function Lc(a, b, c, d, e, f) {
	    switch (c.tag) {
	      case 1:
	        return a = c.payload, "function" === typeof a ? a.call(f, d, e) : a;
	      case 3:
	        a.effectTag = a.effectTag & -4097 | 64;
	      case 0:
	        a = c.payload;
	        e = "function" === typeof a ? a.call(f, d, e) : a;
	        if (null === e || void 0 === e) break;
	        return aa({}, d, e);
	      case 2:
	        Dc = !0;
	    }
	    return d;
	  }
	  function Nc(a, b, c, d, e) {
	    Dc = !1;
	    b = Kc(a, b);
	    for (var f = b.baseState, g = null, l = 0, h = b.firstUpdate, k = f; null !== h;) {
	      var p = h.expirationTime;
	      p < e ? (null === g && (g = h, f = k), l < p && (l = p)) : (Oc(p, h.suspenseConfig), k = Lc(a, b, h, k, c, d), null !== h.callback && (a.effectTag |= 32, h.nextEffect = null, null === b.lastEffect ? b.firstEffect = b.lastEffect = h : (b.lastEffect.nextEffect = h, b.lastEffect = h)));
	      h = h.next;
	    }
	    p = null;
	    for (h = b.firstCapturedUpdate; null !== h;) {
	      var D = h.expirationTime;
	      D < e ? (null === p && (p = h, null === g && (f = k)), l < D && (l = D)) : (k = Lc(a, b, h, k, c, d), null !== h.callback && (a.effectTag |= 32, h.nextEffect = null, null === b.lastCapturedEffect ? b.firstCapturedEffect = b.lastCapturedEffect = h : (b.lastCapturedEffect.nextEffect = h, b.lastCapturedEffect = h)));
	      h = h.next;
	    }
	    null === g && (b.lastUpdate = null);
	    null === p ? b.lastCapturedUpdate = null : a.effectTag |= 32;
	    null === g && null === p && (f = k);
	    b.baseState = f;
	    b.firstUpdate = g;
	    b.firstCapturedUpdate = p;
	    Pc(l);
	    a.expirationTime = l;
	    a.memoizedState = k;
	  }
	  function Qc(a, b, c) {
	    null !== b.firstCapturedUpdate && (null !== b.lastUpdate && (b.lastUpdate.next = b.firstCapturedUpdate, b.lastUpdate = b.lastCapturedUpdate), b.firstCapturedUpdate = b.lastCapturedUpdate = null);
	    Rc(b.firstEffect, c);
	    b.firstEffect = b.lastEffect = null;
	    Rc(b.firstCapturedEffect, c);
	    b.firstCapturedEffect = b.lastCapturedEffect = null;
	  }
	  function Rc(a, b) {
	    for (; null !== a;) {
	      var c = a.callback;
	      if (null !== c) {
	        a.callback = null;
	        var d = b;
	        if ("function" !== typeof c) throw Error(n(191, c));
	        c.call(d);
	      }
	      a = a.nextEffect;
	    }
	  }
	  var Sc = q.ReactCurrentBatchConfig,
	    Tc = new ba.Component().refs;
	  function Uc(a, b, c, d) {
	    b = a.memoizedState;
	    c = c(d, b);
	    c = null === c || void 0 === c ? b : aa({}, b, c);
	    a.memoizedState = c;
	    d = a.updateQueue;
	    null !== d && 0 === a.expirationTime && (d.baseState = c);
	  }
	  var Xc = {
	    isMounted: function isMounted(a) {
	      return (a = a._reactInternalFiber) ? ua(a) === a : !1;
	    },
	    enqueueSetState: function enqueueSetState(a, b, c) {
	      a = a._reactInternalFiber;
	      var d = G(),
	        e = Sc.suspense;
	      d = Vc(d, a, e);
	      e = Gc(d, e);
	      e.payload = b;
	      void 0 !== c && null !== c && (e.callback = c);
	      Ic(a, e);
	      Wc(a, d);
	    },
	    enqueueReplaceState: function enqueueReplaceState(a, b, c) {
	      a = a._reactInternalFiber;
	      var d = G(),
	        e = Sc.suspense;
	      d = Vc(d, a, e);
	      e = Gc(d, e);
	      e.tag = 1;
	      e.payload = b;
	      void 0 !== c && null !== c && (e.callback = c);
	      Ic(a, e);
	      Wc(a, d);
	    },
	    enqueueForceUpdate: function enqueueForceUpdate(a, b) {
	      a = a._reactInternalFiber;
	      var c = G(),
	        d = Sc.suspense;
	      c = Vc(c, a, d);
	      d = Gc(c, d);
	      d.tag = 2;
	      void 0 !== b && null !== b && (d.callback = b);
	      Ic(a, d);
	      Wc(a, c);
	    }
	  };
	  function Yc(a, b, c, d, e, f, g) {
	    a = a.stateNode;
	    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !qc(c, d) || !qc(e, f) : !0;
	  }
	  function Zc(a, b, c) {
	    var d = !1,
	      e = Db;
	    var f = b.contextType;
	    "object" === typeof f && null !== f ? f = Cc(f) : (e = C(b) ? Eb : A.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Fb(a, e) : Db);
	    b = new b(c, f);
	    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
	    b.updater = Xc;
	    a.stateNode = b;
	    b._reactInternalFiber = a;
	    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
	    return b;
	  }
	  function $c(a, b, c, d) {
	    a = b.state;
	    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
	    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
	    b.state !== a && Xc.enqueueReplaceState(b, b.state, null);
	  }
	  function ad(a, b, c, d) {
	    var e = a.stateNode;
	    e.props = c;
	    e.state = a.memoizedState;
	    e.refs = Tc;
	    var f = b.contextType;
	    "object" === typeof f && null !== f ? e.context = Cc(f) : (f = C(b) ? Eb : A.current, e.context = Fb(a, f));
	    f = a.updateQueue;
	    null !== f && (Nc(a, f, c, e, d), e.state = a.memoizedState);
	    f = b.getDerivedStateFromProps;
	    "function" === typeof f && (Uc(a, b, f, c), e.state = a.memoizedState);
	    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Xc.enqueueReplaceState(e, e.state, null), f = a.updateQueue, null !== f && (Nc(a, f, c, e, d), e.state = a.memoizedState));
	    "function" === typeof e.componentDidMount && (a.effectTag |= 4);
	  }
	  var bd = Array.isArray;
	  function cd(a, b, c) {
	    a = c.ref;
	    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
	      if (c._owner) {
	        c = c._owner;
	        if (c) {
	          if (1 !== c.tag) throw Error(n(309));
	          var d = c.stateNode;
	        }
	        if (!d) throw Error(n(147, a));
	        var e = "" + a;
	        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;
	        b = function b(_b) {
	          var a = d.refs;
	          a === Tc && (a = d.refs = {});
	          null === _b ? delete a[e] : a[e] = _b;
	        };
	        b._stringRef = e;
	        return b;
	      }
	      if ("string" !== typeof a) throw Error(n(284));
	      if (!c._owner) throw Error(n(290, a));
	    }
	    return a;
	  }
	  function dd(a, b) {
	    if ("textarea" !== a.type) throw Error(n(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, ""));
	  }
	  function ed(a) {
	    function b(b, c) {
	      if (a) {
	        var d = b.lastEffect;
	        null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
	        c.nextEffect = null;
	        c.effectTag = 8;
	      }
	    }
	    function c(c, d) {
	      if (!a) return null;
	      for (; null !== d;) b(c, d), d = d.sibling;
	      return null;
	    }
	    function d(b, a) {
	      for (b = new Map(); null !== a;) null !== a.key ? b.set(a.key, a) : b.set(a.index, a), a = a.sibling;
	      return b;
	    }
	    function e(b, a, c) {
	      b = fd(b, a);
	      b.index = 0;
	      b.sibling = null;
	      return b;
	    }
	    function f(b, c, d) {
	      b.index = d;
	      if (!a) return c;
	      d = b.alternate;
	      if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;
	      b.effectTag = 2;
	      return c;
	    }
	    function g(b) {
	      a && null === b.alternate && (b.effectTag = 2);
	      return b;
	    }
	    function l(b, a, c, d) {
	      if (null === a || 6 !== a.tag) return a = gd(c, b.mode, d), a.return = b, a;
	      a = e(a, c);
	      a.return = b;
	      return a;
	    }
	    function h(b, a, c, d) {
	      if (null !== a && a.elementType === c.type) return d = e(a, c.props), d.ref = cd(b, a, c), d.return = b, d;
	      d = hd(c.type, c.key, c.props, null, b.mode, d);
	      d.ref = cd(b, a, c);
	      d.return = b;
	      return d;
	    }
	    function k(b, a, c, d) {
	      if (null === a || 4 !== a.tag || a.stateNode.containerInfo !== c.containerInfo || a.stateNode.implementation !== c.implementation) return a = id(c, b.mode, d), a.return = b, a;
	      a = e(a, c.children || []);
	      a.return = b;
	      return a;
	    }
	    function p(b, a, c, d, f) {
	      if (null === a || 7 !== a.tag) return a = jd(c, b.mode, d, f), a.return = b, a;
	      a = e(a, c);
	      a.return = b;
	      return a;
	    }
	    function D(b, a, c) {
	      if ("string" === typeof a || "number" === typeof a) return a = gd("" + a, b.mode, c), a.return = b, a;
	      if ("object" === typeof a && null !== a) {
	        switch (a.$$typeof) {
	          case ca:
	            return c = hd(a.type, a.key, a.props, null, b.mode, c), c.ref = cd(b, null, a), c.return = b, c;
	          case da:
	            return a = id(a, b.mode, c), a.return = b, a;
	        }
	        if (bd(a) || ra(a)) return a = jd(a, b.mode, c, null), a.return = b, a;
	        dd(b, a);
	      }
	      return null;
	    }
	    function x(b, a, c, d) {
	      var e = null !== a ? a.key : null;
	      if ("string" === typeof c || "number" === typeof c) return null !== e ? null : l(b, a, "" + c, d);
	      if ("object" === typeof c && null !== c) {
	        switch (c.$$typeof) {
	          case ca:
	            return c.key === e ? c.type === ea ? p(b, a, c.props.children, d, e) : h(b, a, c, d) : null;
	          case da:
	            return c.key === e ? k(b, a, c, d) : null;
	        }
	        if (bd(c) || ra(c)) return null !== e ? null : p(b, a, c, d, null);
	        dd(b, c);
	      }
	      return null;
	    }
	    function K(b, a, c, d, e) {
	      if ("string" === typeof d || "number" === typeof d) return b = b.get(c) || null, l(a, b, "" + d, e);
	      if ("object" === typeof d && null !== d) {
	        switch (d.$$typeof) {
	          case ca:
	            return b = b.get(null === d.key ? c : d.key) || null, d.type === ea ? p(a, b, d.props.children, e, d.key) : h(a, b, d, e);
	          case da:
	            return b = b.get(null === d.key ? c : d.key) || null, k(a, b, d, e);
	        }
	        if (bd(d) || ra(d)) return b = b.get(c) || null, p(a, b, d, e, null);
	        dd(a, d);
	      }
	      return null;
	    }
	    function Ha(e, g, h, l) {
	      for (var k = null, w = null, t = g, r = g = 0, p = null; null !== t && r < h.length; r++) {
	        t.index > r ? (p = t, t = null) : p = t.sibling;
	        var v = x(e, t, h[r], l);
	        if (null === v) {
	          null === t && (t = p);
	          break;
	        }
	        a && t && null === v.alternate && b(e, t);
	        g = f(v, g, r);
	        null === w ? k = v : w.sibling = v;
	        w = v;
	        t = p;
	      }
	      if (r === h.length) return c(e, t), k;
	      if (null === t) {
	        for (; r < h.length; r++) t = D(e, h[r], l), null !== t && (g = f(t, g, r), null === w ? k = t : w.sibling = t, w = t);
	        return k;
	      }
	      for (t = d(e, t); r < h.length; r++) p = K(t, e, r, h[r], l), null !== p && (a && null !== p.alternate && t.delete(null === p.key ? r : p.key), g = f(p, g, r), null === w ? k = p : w.sibling = p, w = p);
	      a && t.forEach(function (a) {
	        return b(e, a);
	      });
	      return k;
	    }
	    function O(e, g, h, l) {
	      var k = ra(h);
	      if ("function" !== typeof k) throw Error(n(150));
	      h = k.call(h);
	      if (null == h) throw Error(n(151));
	      for (var t = k = null, r = g, w = g = 0, p = null, v = h.next(); null !== r && !v.done; w++, v = h.next()) {
	        r.index > w ? (p = r, r = null) : p = r.sibling;
	        var N = x(e, r, v.value, l);
	        if (null === N) {
	          null === r && (r = p);
	          break;
	        }
	        a && r && null === N.alternate && b(e, r);
	        g = f(N, g, w);
	        null === t ? k = N : t.sibling = N;
	        t = N;
	        r = p;
	      }
	      if (v.done) return c(e, r), k;
	      if (null === r) {
	        for (; !v.done; w++, v = h.next()) v = D(e, v.value, l), null !== v && (g = f(v, g, w), null === t ? k = v : t.sibling = v, t = v);
	        return k;
	      }
	      for (r = d(e, r); !v.done; w++, v = h.next()) v = K(r, e, w, v.value, l), null !== v && (a && null !== v.alternate && r.delete(null === v.key ? w : v.key), g = f(v, g, w), null === t ? k = v : t.sibling = v, t = v);
	      a && r.forEach(function (a) {
	        return b(e, a);
	      });
	      return k;
	    }
	    return function (a, d, f, h) {
	      var k = "object" === typeof f && null !== f && f.type === ea && null === f.key;
	      k && (f = f.props.children);
	      var l = "object" === typeof f && null !== f;
	      if (l) switch (f.$$typeof) {
	        case ca:
	          a: {
	            l = f.key;
	            for (k = d; null !== k;) {
	              if (k.key === l) {
	                if (7 === k.tag ? f.type === ea : k.elementType === f.type) {
	                  c(a, k.sibling);
	                  d = e(k, f.type === ea ? f.props.children : f.props);
	                  d.ref = cd(a, k, f);
	                  d.return = a;
	                  a = d;
	                  break a;
	                } else {
	                  c(a, k);
	                  break;
	                }
	              } else b(a, k);
	              k = k.sibling;
	            }
	            f.type === ea ? (d = jd(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = hd(f.type, f.key, f.props, null, a.mode, h), h.ref = cd(a, d, f), h.return = a, a = h);
	          }
	          return g(a);
	        case da:
	          a: {
	            for (k = f.key; null !== d;) {
	              if (d.key === k) {
	                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
	                  c(a, d.sibling);
	                  d = e(d, f.children || []);
	                  d.return = a;
	                  a = d;
	                  break a;
	                } else {
	                  c(a, d);
	                  break;
	                }
	              } else b(a, d);
	              d = d.sibling;
	            }
	            d = id(f, a.mode, h);
	            d.return = a;
	            a = d;
	          }
	          return g(a);
	      }
	      if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = gd(f, a.mode, h), d.return = a, a = d), g(a);
	      if (bd(f)) return Ha(a, d, f, h);
	      if (ra(f)) return O(a, d, f, h);
	      l && dd(a, f);
	      if ("undefined" === typeof f && !k) switch (a.tag) {
	        case 1:
	        case 0:
	          throw a = a.type, Error(n(152, a.displayName || a.name || "Component"));
	      }
	      return c(a, d);
	    };
	  }
	  var kd = ed(!0),
	    ld = ed(!1),
	    md = {},
	    H = {
	      current: md
	    },
	    nd = {
	      current: md
	    },
	    od = {
	      current: md
	    };
	  function pd(a) {
	    if (a === md) throw Error(n(174));
	    return a;
	  }
	  function qd(a, b) {
	    z(od, b);
	    z(nd, a);
	    z(H, md);
	    b = Aa(b);
	    y(H);
	    z(H, b);
	  }
	  function rd(a) {
	    y(H);
	    y(nd);
	    y(od);
	  }
	  function sd(a) {
	    var b = pd(od.current),
	      c = pd(H.current);
	    b = Ba(c, a.type, b);
	    c !== b && (z(nd, a), z(H, b));
	  }
	  function td(a) {
	    nd.current === a && (y(H), y(nd));
	  }
	  var I = {
	    current: 0
	  };
	  function ud(a) {
	    for (var b = a; null !== b;) {
	      if (13 === b.tag) {
	        var c = b.memoizedState;
	        if (null !== c && (c = c.dehydrated, null === c || qb(c) || rb(c))) return b;
	      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
	        if (0 !== (b.effectTag & 64)) return b;
	      } else if (null !== b.child) {
	        b.child.return = b;
	        b = b.child;
	        continue;
	      }
	      if (b === a) break;
	      for (; null === b.sibling;) {
	        if (null === b.return || b.return === a) return null;
	        b = b.return;
	      }
	      b.sibling.return = b.return;
	      b = b.sibling;
	    }
	    return null;
	  }
	  function vd(a, b) {
	    return {
	      responder: a,
	      props: b
	    };
	  }
	  var wd = q.ReactCurrentDispatcher,
	    J = q.ReactCurrentBatchConfig,
	    xd = 0,
	    yd = null,
	    L = null,
	    zd = null,
	    Ad = null,
	    M = null,
	    Bd = null,
	    Cd = 0,
	    Dd = null,
	    Ed = 0,
	    Fd = !1,
	    Gd = null,
	    Hd = 0;
	  function P() {
	    throw Error(n(321));
	  }
	  function Id(a, b) {
	    if (null === b) return !1;
	    for (var c = 0; c < b.length && c < a.length; c++) if (!oc(a[c], b[c])) return !1;
	    return !0;
	  }
	  function Jd(a, b, c, d, e, f) {
	    xd = f;
	    yd = b;
	    zd = null !== a ? a.memoizedState : null;
	    wd.current = null === zd ? Kd : Ld;
	    b = c(d, e);
	    if (Fd) {
	      do Fd = !1, Hd += 1, zd = null !== a ? a.memoizedState : null, Bd = Ad, Dd = M = L = null, wd.current = Ld, b = c(d, e); while (Fd);
	      Gd = null;
	      Hd = 0;
	    }
	    wd.current = Md;
	    a = yd;
	    a.memoizedState = Ad;
	    a.expirationTime = Cd;
	    a.updateQueue = Dd;
	    a.effectTag |= Ed;
	    a = null !== L && null !== L.next;
	    xd = 0;
	    Bd = M = Ad = zd = L = yd = null;
	    Cd = 0;
	    Dd = null;
	    Ed = 0;
	    if (a) throw Error(n(300));
	    return b;
	  }
	  function Nd() {
	    wd.current = Md;
	    xd = 0;
	    Bd = M = Ad = zd = L = yd = null;
	    Cd = 0;
	    Dd = null;
	    Ed = 0;
	    Fd = !1;
	    Gd = null;
	    Hd = 0;
	  }
	  function Od() {
	    var a = {
	      memoizedState: null,
	      baseState: null,
	      queue: null,
	      baseUpdate: null,
	      next: null
	    };
	    null === M ? Ad = M = a : M = M.next = a;
	    return M;
	  }
	  function Pd() {
	    if (null !== Bd) M = Bd, Bd = M.next, L = zd, zd = null !== L ? L.next : null;else {
	      if (null === zd) throw Error(n(310));
	      L = zd;
	      var a = {
	        memoizedState: L.memoizedState,
	        baseState: L.baseState,
	        queue: L.queue,
	        baseUpdate: L.baseUpdate,
	        next: null
	      };
	      M = null === M ? Ad = a : M.next = a;
	      zd = L.next;
	    }
	    return M;
	  }
	  function Qd(a, b) {
	    return "function" === typeof b ? b(a) : b;
	  }
	  function Rd(a) {
	    var b = Pd(),
	      c = b.queue;
	    if (null === c) throw Error(n(311));
	    c.lastRenderedReducer = a;
	    if (0 < Hd) {
	      var d = c.dispatch;
	      if (null !== Gd) {
	        var e = Gd.get(c);
	        if (void 0 !== e) {
	          Gd.delete(c);
	          var f = b.memoizedState;
	          do f = a(f, e.action), e = e.next; while (null !== e);
	          oc(f, b.memoizedState) || (Bc = !0);
	          b.memoizedState = f;
	          b.baseUpdate === c.last && (b.baseState = f);
	          c.lastRenderedState = f;
	          return [f, d];
	        }
	      }
	      return [b.memoizedState, d];
	    }
	    d = c.last;
	    var g = b.baseUpdate;
	    f = b.baseState;
	    null !== g ? (null !== d && (d.next = null), d = g.next) : d = null !== d ? d.next : null;
	    if (null !== d) {
	      var l = e = null,
	        h = d,
	        k = !1;
	      do {
	        var p = h.expirationTime;
	        p < xd ? (k || (k = !0, l = g, e = f), p > Cd && (Cd = p, Pc(Cd))) : (Oc(p, h.suspenseConfig), f = h.eagerReducer === a ? h.eagerState : a(f, h.action));
	        g = h;
	        h = h.next;
	      } while (null !== h && h !== d);
	      k || (l = g, e = f);
	      oc(f, b.memoizedState) || (Bc = !0);
	      b.memoizedState = f;
	      b.baseUpdate = l;
	      b.baseState = e;
	      c.lastRenderedState = f;
	    }
	    return [b.memoizedState, c.dispatch];
	  }
	  function Sd(a) {
	    var b = Od();
	    "function" === typeof a && (a = a());
	    b.memoizedState = b.baseState = a;
	    a = b.queue = {
	      last: null,
	      dispatch: null,
	      lastRenderedReducer: Qd,
	      lastRenderedState: a
	    };
	    a = a.dispatch = Td.bind(null, yd, a);
	    return [b.memoizedState, a];
	  }
	  function Ud(a) {
	    return Rd(Qd);
	  }
	  function Vd(a, b, c, d) {
	    a = {
	      tag: a,
	      create: b,
	      destroy: c,
	      deps: d,
	      next: null
	    };
	    null === Dd ? (Dd = {
	      lastEffect: null
	    }, Dd.lastEffect = a.next = a) : (b = Dd.lastEffect, null === b ? Dd.lastEffect = a.next = a : (c = b.next, b.next = a, a.next = c, Dd.lastEffect = a));
	    return a;
	  }
	  function Wd(a, b, c, d) {
	    var e = Od();
	    Ed |= a;
	    e.memoizedState = Vd(b, c, void 0, void 0 === d ? null : d);
	  }
	  function Xd(a, b, c, d) {
	    var e = Pd();
	    d = void 0 === d ? null : d;
	    var f = void 0;
	    if (null !== L) {
	      var g = L.memoizedState;
	      f = g.destroy;
	      if (null !== d && Id(d, g.deps)) {
	        Vd(0, c, f, d);
	        return;
	      }
	    }
	    Ed |= a;
	    e.memoizedState = Vd(b, c, f, d);
	  }
	  function Yd(a, b) {
	    return Wd(516, 192, a, b);
	  }
	  function Zd(a, b) {
	    return Xd(516, 192, a, b);
	  }
	  function $d(a, b) {
	    if ("function" === typeof b) return a = a(), b(a), function () {
	      b(null);
	    };
	    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
	      b.current = null;
	    };
	  }
	  function ae() {}
	  function be(a, b) {
	    Od().memoizedState = [a, void 0 === b ? null : b];
	    return a;
	  }
	  function ce(a, b) {
	    var c = Pd();
	    b = void 0 === b ? null : b;
	    var d = c.memoizedState;
	    if (null !== d && null !== b && Id(b, d[1])) return d[0];
	    c.memoizedState = [a, b];
	    return a;
	  }
	  function Td(a, b, c) {
	    if (!(25 > Hd)) throw Error(n(301));
	    var d = a.alternate;
	    if (a === yd || null !== d && d === yd) {
	      if (Fd = !0, a = {
	        expirationTime: xd,
	        suspenseConfig: null,
	        action: c,
	        eagerReducer: null,
	        eagerState: null,
	        next: null
	      }, null === Gd && (Gd = new Map()), c = Gd.get(b), void 0 === c) Gd.set(b, a);else {
	        for (b = c; null !== b.next;) b = b.next;
	        b.next = a;
	      }
	    } else {
	      var e = G(),
	        f = Sc.suspense;
	      e = Vc(e, a, f);
	      f = {
	        expirationTime: e,
	        suspenseConfig: f,
	        action: c,
	        eagerReducer: null,
	        eagerState: null,
	        next: null
	      };
	      var g = b.last;
	      if (null === g) f.next = f;else {
	        var l = g.next;
	        null !== l && (f.next = l);
	        g.next = f;
	      }
	      b.last = f;
	      if (0 === a.expirationTime && (null === d || 0 === d.expirationTime) && (d = b.lastRenderedReducer, null !== d)) try {
	        var h = b.lastRenderedState,
	          k = d(h, c);
	        f.eagerReducer = d;
	        f.eagerState = k;
	        if (oc(k, h)) return;
	      } catch (p) {} finally {}
	      Wc(a, e);
	    }
	  }
	  var Md = {
	      readContext: Cc,
	      useCallback: P,
	      useContext: P,
	      useEffect: P,
	      useImperativeHandle: P,
	      useLayoutEffect: P,
	      useMemo: P,
	      useReducer: P,
	      useRef: P,
	      useState: P,
	      useDebugValue: P,
	      useResponder: P,
	      useDeferredValue: P,
	      useTransition: P
	    },
	    Kd = {
	      readContext: Cc,
	      useCallback: be,
	      useContext: Cc,
	      useEffect: Yd,
	      useImperativeHandle: function useImperativeHandle(a, b, c) {
	        c = null !== c && void 0 !== c ? c.concat([a]) : null;
	        return Wd(4, 36, $d.bind(null, b, a), c);
	      },
	      useLayoutEffect: function useLayoutEffect(a, b) {
	        return Wd(4, 36, a, b);
	      },
	      useMemo: function useMemo(a, b) {
	        var c = Od();
	        b = void 0 === b ? null : b;
	        a = a();
	        c.memoizedState = [a, b];
	        return a;
	      },
	      useReducer: function useReducer(a, b, c) {
	        var d = Od();
	        b = void 0 !== c ? c(b) : b;
	        d.memoizedState = d.baseState = b;
	        a = d.queue = {
	          last: null,
	          dispatch: null,
	          lastRenderedReducer: a,
	          lastRenderedState: b
	        };
	        a = a.dispatch = Td.bind(null, yd, a);
	        return [d.memoizedState, a];
	      },
	      useRef: function useRef(a) {
	        var b = Od();
	        a = {
	          current: a
	        };
	        return b.memoizedState = a;
	      },
	      useState: Sd,
	      useDebugValue: ae,
	      useResponder: vd,
	      useDeferredValue: function useDeferredValue(a, b) {
	        var c = Sd(a),
	          d = c[0],
	          e = c[1];
	        Yd(function () {
	          m.unstable_next(function () {
	            var c = J.suspense;
	            J.suspense = void 0 === b ? null : b;
	            try {
	              e(a);
	            } finally {
	              J.suspense = c;
	            }
	          });
	        }, [a, b]);
	        return d;
	      },
	      useTransition: function useTransition(a) {
	        var b = Sd(!1),
	          c = b[0],
	          d = b[1];
	        return [be(function (b) {
	          d(!0);
	          m.unstable_next(function () {
	            var c = J.suspense;
	            J.suspense = void 0 === a ? null : a;
	            try {
	              d(!1), b();
	            } finally {
	              J.suspense = c;
	            }
	          });
	        }, [a, c]), c];
	      }
	    },
	    Ld = {
	      readContext: Cc,
	      useCallback: ce,
	      useContext: Cc,
	      useEffect: Zd,
	      useImperativeHandle: function useImperativeHandle(a, b, c) {
	        c = null !== c && void 0 !== c ? c.concat([a]) : null;
	        return Xd(4, 36, $d.bind(null, b, a), c);
	      },
	      useLayoutEffect: function useLayoutEffect(a, b) {
	        return Xd(4, 36, a, b);
	      },
	      useMemo: function useMemo(a, b) {
	        var c = Pd();
	        b = void 0 === b ? null : b;
	        var d = c.memoizedState;
	        if (null !== d && null !== b && Id(b, d[1])) return d[0];
	        a = a();
	        c.memoizedState = [a, b];
	        return a;
	      },
	      useReducer: Rd,
	      useRef: function useRef() {
	        return Pd().memoizedState;
	      },
	      useState: Ud,
	      useDebugValue: ae,
	      useResponder: vd,
	      useDeferredValue: function useDeferredValue(a, b) {
	        var c = Ud(),
	          d = c[0],
	          e = c[1];
	        Zd(function () {
	          m.unstable_next(function () {
	            var c = J.suspense;
	            J.suspense = void 0 === b ? null : b;
	            try {
	              e(a);
	            } finally {
	              J.suspense = c;
	            }
	          });
	        }, [a, b]);
	        return d;
	      },
	      useTransition: function useTransition(a) {
	        var b = Ud(),
	          c = b[0],
	          d = b[1];
	        return [ce(function (b) {
	          d(!0);
	          m.unstable_next(function () {
	            var c = J.suspense;
	            J.suspense = void 0 === a ? null : a;
	            try {
	              d(!1), b();
	            } finally {
	              J.suspense = c;
	            }
	          });
	        }, [a, c]), c];
	      }
	    },
	    de = null,
	    ee = null,
	    fe = !1;
	  function ge(a, b) {
	    var c = he(5, null, null, 0);
	    c.elementType = "DELETED";
	    c.type = "DELETED";
	    c.stateNode = b;
	    c.return = a;
	    c.effectTag = 8;
	    null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
	  }
	  function ie(a, b) {
	    switch (a.tag) {
	      case 5:
	        return b = ob(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;
	      case 6:
	        return b = pb(b, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;
	      case 13:
	        return !1;
	      default:
	        return !1;
	    }
	  }
	  function je(a) {
	    if (fe) {
	      var b = ee;
	      if (b) {
	        var c = b;
	        if (!ie(a, b)) {
	          b = sb(c);
	          if (!b || !ie(a, b)) {
	            a.effectTag = a.effectTag & -1025 | 2;
	            fe = !1;
	            de = a;
	            return;
	          }
	          ge(de, c);
	        }
	        de = a;
	        ee = tb(b);
	      } else a.effectTag = a.effectTag & -1025 | 2, fe = !1, de = a;
	    }
	  }
	  function ke(a) {
	    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
	    de = a;
	  }
	  function ne(a) {
	    if (!Sa || a !== de) return !1;
	    if (!fe) return ke(a), fe = !0, !1;
	    var b = a.type;
	    if (5 !== a.tag || "head" !== b && "body" !== b && !Ja(b, a.memoizedProps)) for (b = ee; b;) ge(a, b), b = sb(b);
	    ke(a);
	    if (13 === a.tag) {
	      if (!Sa) throw Error(n(316));
	      a = a.memoizedState;
	      a = null !== a ? a.dehydrated : null;
	      if (!a) throw Error(n(317));
	      ee = wb(a);
	    } else ee = de ? sb(a.stateNode) : null;
	    return !0;
	  }
	  function oe() {
	    Sa && (ee = de = null, fe = !1);
	  }
	  var pe = q.ReactCurrentOwner,
	    Bc = !1;
	  function Q(a, b, c, d) {
	    b.child = null === a ? ld(b, null, c, d) : kd(b, a.child, c, d);
	  }
	  function qe(a, b, c, d, e) {
	    c = c.render;
	    var f = b.ref;
	    Ac(b, e);
	    d = Jd(a, b, c, d, f, e);
	    if (null !== a && !Bc) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), re(a, b, e);
	    b.effectTag |= 1;
	    Q(a, b, d, e);
	    return b.child;
	  }
	  function se(a, b, c, d, e, f) {
	    if (null === a) {
	      var g = c.type;
	      if ("function" === typeof g && !te(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ue(a, b, g, d, e, f);
	      a = hd(c.type, null, d, null, b.mode, f);
	      a.ref = b.ref;
	      a.return = b;
	      return b.child = a;
	    }
	    g = a.child;
	    if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : qc, c(e, d) && a.ref === b.ref)) return re(a, b, f);
	    b.effectTag |= 1;
	    a = fd(g, d);
	    a.ref = b.ref;
	    a.return = b;
	    return b.child = a;
	  }
	  function ue(a, b, c, d, e, f) {
	    return null !== a && qc(a.memoizedProps, d) && a.ref === b.ref && (Bc = !1, e < f) ? re(a, b, f) : ve(a, b, c, d, f);
	  }
	  function we(a, b) {
	    var c = b.ref;
	    if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
	  }
	  function ve(a, b, c, d, e) {
	    var f = C(c) ? Eb : A.current;
	    f = Fb(b, f);
	    Ac(b, e);
	    c = Jd(a, b, c, d, f, e);
	    if (null !== a && !Bc) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), re(a, b, e);
	    b.effectTag |= 1;
	    Q(a, b, c, e);
	    return b.child;
	  }
	  function xe(a, b, c, d, e) {
	    if (C(c)) {
	      var f = !0;
	      Kb(b);
	    } else f = !1;
	    Ac(b, e);
	    if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Zc(b, c, d), ad(b, c, d, e), d = !0;else if (null === a) {
	      var g = b.stateNode,
	        l = b.memoizedProps;
	      g.props = l;
	      var h = g.context,
	        k = c.contextType;
	      "object" === typeof k && null !== k ? k = Cc(k) : (k = C(c) ? Eb : A.current, k = Fb(b, k));
	      var p = c.getDerivedStateFromProps,
	        D = "function" === typeof p || "function" === typeof g.getSnapshotBeforeUpdate;
	      D || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (l !== d || h !== k) && $c(b, g, d, k);
	      Dc = !1;
	      var x = b.memoizedState;
	      h = g.state = x;
	      var K = b.updateQueue;
	      null !== K && (Nc(b, K, d, g, e), h = b.memoizedState);
	      l !== d || x !== h || B.current || Dc ? ("function" === typeof p && (Uc(b, c, p, d), h = b.memoizedState), (l = Dc || Yc(b, c, l, d, x, h, k)) ? (D || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = h), g.props = d, g.state = h, g.context = k, d = l) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1);
	    } else g = b.stateNode, l = b.memoizedProps, g.props = b.type === b.elementType ? l : rc(b.type, l), h = g.context, k = c.contextType, "object" === typeof k && null !== k ? k = Cc(k) : (k = C(c) ? Eb : A.current, k = Fb(b, k)), p = c.getDerivedStateFromProps, (D = "function" === typeof p || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (l !== d || h !== k) && $c(b, g, d, k), Dc = !1, h = b.memoizedState, x = g.state = h, K = b.updateQueue, null !== K && (Nc(b, K, d, g, e), x = b.memoizedState), l !== d || h !== x || B.current || Dc ? ("function" === typeof p && (Uc(b, c, p, d), x = b.memoizedState), (p = Dc || Yc(b, c, l, d, h, x, k)) ? (D || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || l === a.memoizedProps && h === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || l === a.memoizedProps && h === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = p) : ("function" !== typeof g.componentDidUpdate || l === a.memoizedProps && h === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || l === a.memoizedProps && h === a.memoizedState || (b.effectTag |= 256), d = !1);
	    return ye(a, b, c, d, f, e);
	  }
	  function ye(a, b, c, d, e, f) {
	    we(a, b);
	    var g = 0 !== (b.effectTag & 64);
	    if (!d && !g) return e && Lb(b, c, !1), re(a, b, f);
	    d = b.stateNode;
	    pe.current = b;
	    var l = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
	    b.effectTag |= 1;
	    null !== a && g ? (b.child = kd(b, a.child, null, f), b.child = kd(b, null, l, f)) : Q(a, b, l, f);
	    b.memoizedState = d.state;
	    e && Lb(b, c, !0);
	    return b.child;
	  }
	  function ze(a) {
	    var b = a.stateNode;
	    b.pendingContext ? Ib(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Ib(a, b.context, !1);
	    qd(a, b.containerInfo);
	  }
	  var Ae = {
	    dehydrated: null,
	    retryTime: 0
	  };
	  function Be(a, b, c) {
	    var d = b.mode,
	      e = b.pendingProps,
	      f = I.current,
	      g = !1,
	      l;
	    (l = 0 !== (b.effectTag & 64)) || (l = 0 !== (f & 2) && (null === a || null !== a.memoizedState));
	    l ? (g = !0, b.effectTag &= -65) : null !== a && null === a.memoizedState || void 0 === e.fallback || !0 === e.unstable_avoidThisFallback || (f |= 1);
	    z(I, f & 1);
	    if (null === a) {
	      void 0 !== e.fallback && je(b);
	      if (g) {
	        g = e.fallback;
	        e = jd(null, d, 0, null);
	        e.return = b;
	        if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) a.return = e, a = a.sibling;
	        c = jd(g, d, c, null);
	        c.return = b;
	        e.sibling = c;
	        b.memoizedState = Ae;
	        b.child = e;
	        return c;
	      }
	      d = e.children;
	      b.memoizedState = null;
	      return b.child = ld(b, null, d, c);
	    }
	    if (null !== a.memoizedState) {
	      a = a.child;
	      d = a.sibling;
	      if (g) {
	        e = e.fallback;
	        c = fd(a, a.pendingProps);
	        c.return = b;
	        if (0 === (b.mode & 2) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== a.child)) for (c.child = g; null !== g;) g.return = c, g = g.sibling;
	        d = fd(d, e, d.expirationTime);
	        d.return = b;
	        c.sibling = d;
	        c.childExpirationTime = 0;
	        b.memoizedState = Ae;
	        b.child = c;
	        return d;
	      }
	      c = kd(b, a.child, e.children, c);
	      b.memoizedState = null;
	      return b.child = c;
	    }
	    a = a.child;
	    if (g) {
	      g = e.fallback;
	      e = jd(null, d, 0, null);
	      e.return = b;
	      e.child = a;
	      null !== a && (a.return = e);
	      if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) a.return = e, a = a.sibling;
	      c = jd(g, d, c, null);
	      c.return = b;
	      e.sibling = c;
	      c.effectTag |= 2;
	      e.childExpirationTime = 0;
	      b.memoizedState = Ae;
	      b.child = e;
	      return c;
	    }
	    b.memoizedState = null;
	    return b.child = kd(b, a, e.children, c);
	  }
	  function Ce(a, b) {
	    a.expirationTime < b && (a.expirationTime = b);
	    var c = a.alternate;
	    null !== c && c.expirationTime < b && (c.expirationTime = b);
	    zc(a.return, b);
	  }
	  function De(a, b, c, d, e, f) {
	    var g = a.memoizedState;
	    null === g ? a.memoizedState = {
	      isBackwards: b,
	      rendering: null,
	      last: d,
	      tail: c,
	      tailExpiration: 0,
	      tailMode: e,
	      lastEffect: f
	    } : (g.isBackwards = b, g.rendering = null, g.last = d, g.tail = c, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f);
	  }
	  function Ee(a, b, c) {
	    var d = b.pendingProps,
	      e = d.revealOrder,
	      f = d.tail;
	    Q(a, b, d.children, c);
	    d = I.current;
	    if (0 !== (d & 2)) d = d & 1 | 2, b.effectTag |= 64;else {
	      if (null !== a && 0 !== (a.effectTag & 64)) a: for (a = b.child; null !== a;) {
	        if (13 === a.tag) null !== a.memoizedState && Ce(a, c);else if (19 === a.tag) Ce(a, c);else if (null !== a.child) {
	          a.child.return = a;
	          a = a.child;
	          continue;
	        }
	        if (a === b) break a;
	        for (; null === a.sibling;) {
	          if (null === a.return || a.return === b) break a;
	          a = a.return;
	        }
	        a.sibling.return = a.return;
	        a = a.sibling;
	      }
	      d &= 1;
	    }
	    z(I, d);
	    if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
	      case "forwards":
	        c = b.child;
	        for (e = null; null !== c;) a = c.alternate, null !== a && null === ud(a) && (e = c), c = c.sibling;
	        c = e;
	        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
	        De(b, !1, e, c, f, b.lastEffect);
	        break;
	      case "backwards":
	        c = null;
	        e = b.child;
	        for (b.child = null; null !== e;) {
	          a = e.alternate;
	          if (null !== a && null === ud(a)) {
	            b.child = e;
	            break;
	          }
	          a = e.sibling;
	          e.sibling = c;
	          c = e;
	          e = a;
	        }
	        De(b, !0, c, null, f, b.lastEffect);
	        break;
	      case "together":
	        De(b, !1, null, null, void 0, b.lastEffect);
	        break;
	      default:
	        b.memoizedState = null;
	    }
	    return b.child;
	  }
	  function re(a, b, c) {
	    null !== a && (b.dependencies = a.dependencies);
	    var d = b.expirationTime;
	    0 !== d && Pc(d);
	    if (b.childExpirationTime < c) return null;
	    if (null !== a && b.child !== a.child) throw Error(n(153));
	    if (null !== b.child) {
	      a = b.child;
	      c = fd(a, a.pendingProps, a.expirationTime);
	      b.child = c;
	      for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = fd(a, a.pendingProps, a.expirationTime), c.return = b;
	      c.sibling = null;
	    }
	    return b.child;
	  }
	  function Fe(a) {
	    a.effectTag |= 4;
	  }
	  var _Ge, He, Ie, Je;
	  if (Qa) _Ge = function Ge(a, b) {
	    for (var c = b.child; null !== c;) {
	      if (5 === c.tag || 6 === c.tag) Fa(a, c.stateNode);else if (4 !== c.tag && null !== c.child) {
	        c.child.return = c;
	        c = c.child;
	        continue;
	      }
	      if (c === b) break;
	      for (; null === c.sibling;) {
	        if (null === c.return || c.return === b) return;
	        c = c.return;
	      }
	      c.sibling.return = c.return;
	      c = c.sibling;
	    }
	  }, He = function He() {}, Ie = function Ie(a, b, c, d, e) {
	    a = a.memoizedProps;
	    if (a !== d) {
	      var f = b.stateNode,
	        g = pd(H.current);
	      c = Ia(f, c, a, d, e, g);
	      (b.updateQueue = c) && Fe(b);
	    }
	  }, Je = function Je(a, b, c, d) {
	    c !== d && Fe(b);
	  };else if (Ra) {
	    _Ge = function Ge(a, b, c, d) {
	      for (var e = b.child; null !== e;) {
	        if (5 === e.tag) {
	          var f = e.stateNode;
	          c && d && (f = mb(f, e.type, e.memoizedProps, e));
	          Fa(a, f);
	        } else if (6 === e.tag) f = e.stateNode, c && d && (f = nb(f, e.memoizedProps, e)), Fa(a, f);else if (4 !== e.tag) {
	          if (13 === e.tag && 0 !== (e.effectTag & 4) && (f = null !== e.memoizedState)) {
	            var g = e.child;
	            if (null !== g && (null !== g.child && (g.child.return = g, _Ge(a, g, !0, f)), f = g.sibling, null !== f)) {
	              f.return = e;
	              e = f;
	              continue;
	            }
	          }
	          if (null !== e.child) {
	            e.child.return = e;
	            e = e.child;
	            continue;
	          }
	        }
	        if (e === b) break;
	        for (; null === e.sibling;) {
	          if (null === e.return || e.return === b) return;
	          e = e.return;
	        }
	        e.sibling.return = e.return;
	        e = e.sibling;
	      }
	    };
	    var Ke = function Ke(a, b, c, d) {
	      for (var e = b.child; null !== e;) {
	        if (5 === e.tag) {
	          var f = e.stateNode;
	          c && d && (f = mb(f, e.type, e.memoizedProps, e));
	          ib(a, f);
	        } else if (6 === e.tag) f = e.stateNode, c && d && (f = nb(f, e.memoizedProps, e)), ib(a, f);else if (4 !== e.tag) {
	          if (13 === e.tag && 0 !== (e.effectTag & 4) && (f = null !== e.memoizedState)) {
	            var g = e.child;
	            if (null !== g && (null !== g.child && (g.child.return = g, Ke(a, g, !0, f)), f = g.sibling, null !== f)) {
	              f.return = e;
	              e = f;
	              continue;
	            }
	          }
	          if (null !== e.child) {
	            e.child.return = e;
	            e = e.child;
	            continue;
	          }
	        }
	        if (e === b) break;
	        for (; null === e.sibling;) {
	          if (null === e.return || e.return === b) return;
	          e = e.return;
	        }
	        e.sibling.return = e.return;
	        e = e.sibling;
	      }
	    };
	    He = function He(a) {
	      var b = a.stateNode;
	      if (null !== a.firstEffect) {
	        var c = b.containerInfo,
	          d = hb(c);
	        Ke(d, a, !1, !1);
	        b.pendingChildren = d;
	        Fe(a);
	        kb(c, d);
	      }
	    };
	    Ie = function Ie(a, b, c, d, e) {
	      var f = a.stateNode,
	        g = a.memoizedProps;
	      if ((a = null === b.firstEffect) && g === d) b.stateNode = f;else {
	        var l = b.stateNode,
	          h = pd(H.current),
	          k = null;
	        g !== d && (k = Ia(l, c, g, d, e, h));
	        a && null === k ? b.stateNode = f : (f = gb(f, k, c, g, d, b, a, l), Ga(f, c, d, e, h) && Fe(b), b.stateNode = f, a ? Fe(b) : _Ge(f, b, !1, !1));
	      }
	    };
	    Je = function Je(a, b, c, d) {
	      c !== d && (a = pd(od.current), c = pd(H.current), b.stateNode = La(d, a, c, b), Fe(b));
	    };
	  } else He = function He() {}, Ie = function Ie() {}, Je = function Je() {};
	  function Le(a, b) {
	    switch (a.tailMode) {
	      case "hidden":
	        b = a.tail;
	        for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
	        null === c ? a.tail = null : c.sibling = null;
	        break;
	      case "collapsed":
	        c = a.tail;
	        for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
	        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
	    }
	  }
	  function Me(a) {
	    switch (a.tag) {
	      case 1:
	        C(a.type) && Gb();
	        var b = a.effectTag;
	        return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
	      case 3:
	        rd();
	        Hb();
	        b = a.effectTag;
	        if (0 !== (b & 64)) throw Error(n(285));
	        a.effectTag = b & -4097 | 64;
	        return a;
	      case 5:
	        return td(a), null;
	      case 13:
	        return y(I), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
	      case 19:
	        return y(I), null;
	      case 4:
	        return rd(), null;
	      case 10:
	        return yc(a), null;
	      default:
	        return null;
	    }
	  }
	  function Ne(a, b) {
	    return {
	      value: a,
	      source: b,
	      stack: Ab(b)
	    };
	  }
	  var Oe = "function" === typeof WeakSet ? WeakSet : Set;
	  function Pe(a, b) {
	    var c = b.source,
	      d = b.stack;
	    null === d && null !== c && (d = Ab(c));
	    null !== c && ta(c.type);
	    b = b.value;
	    null !== a && 1 === a.tag && ta(a.type);
	    try {
	      console.error(b);
	    } catch (e) {
	      setTimeout(function () {
	        throw e;
	      });
	    }
	  }
	  function Qe(a, b) {
	    try {
	      b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
	    } catch (c) {
	      Re(a, c);
	    }
	  }
	  function Se(a) {
	    var b = a.ref;
	    if (null !== b) if ("function" === typeof b) try {
	      b(null);
	    } catch (c) {
	      Re(a, c);
	    } else b.current = null;
	  }
	  function Te(a, b) {
	    switch (b.tag) {
	      case 0:
	      case 11:
	      case 15:
	        Ue(2, 0, b);
	        break;
	      case 1:
	        if (b.effectTag & 256 && null !== a) {
	          var c = a.memoizedProps,
	            d = a.memoizedState;
	          a = b.stateNode;
	          b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : rc(b.type, c), d);
	          a.__reactInternalSnapshotBeforeUpdate = b;
	        }
	        break;
	      case 3:
	      case 5:
	      case 6:
	      case 4:
	      case 17:
	        break;
	      default:
	        throw Error(n(163));
	    }
	  }
	  function Ue(a, b, c) {
	    c = c.updateQueue;
	    c = null !== c ? c.lastEffect : null;
	    if (null !== c) {
	      var d = c = c.next;
	      do {
	        if (0 !== (d.tag & a)) {
	          var e = d.destroy;
	          d.destroy = void 0;
	          void 0 !== e && e();
	        }
	        0 !== (d.tag & b) && (e = d.create, d.destroy = e());
	        d = d.next;
	      } while (d !== c);
	    }
	  }
	  function Ve(a, b, c) {
	    "function" === typeof We && We(b);
	    switch (b.tag) {
	      case 0:
	      case 11:
	      case 14:
	      case 15:
	        a = b.updateQueue;
	        if (null !== a && (a = a.lastEffect, null !== a)) {
	          var d = a.next;
	          hc(97 < c ? 97 : c, function () {
	            var a = d;
	            do {
	              var c = a.destroy;
	              if (void 0 !== c) {
	                var g = b;
	                try {
	                  c();
	                } catch (l) {
	                  Re(g, l);
	                }
	              }
	              a = a.next;
	            } while (a !== d);
	          });
	        }
	        break;
	      case 1:
	        Se(b);
	        c = b.stateNode;
	        "function" === typeof c.componentWillUnmount && Qe(b, c);
	        break;
	      case 5:
	        Se(b);
	        break;
	      case 4:
	        Qa ? Xe(a, b, c) : Ra && Ye(b);
	    }
	  }
	  function Ze(a, b, c) {
	    for (var d = b;;) if (Ve(a, d, c), null === d.child || Qa && 4 === d.tag) {
	      if (d === b) break;
	      for (; null === d.sibling;) {
	        if (null === d.return || d.return === b) return;
	        d = d.return;
	      }
	      d.sibling.return = d.return;
	      d = d.sibling;
	    } else d.child.return = d, d = d.child;
	  }
	  function $e(a) {
	    var b = a.alternate;
	    a.return = null;
	    a.child = null;
	    a.memoizedState = null;
	    a.updateQueue = null;
	    a.dependencies = null;
	    a.alternate = null;
	    a.firstEffect = null;
	    a.lastEffect = null;
	    a.pendingProps = null;
	    a.memoizedProps = null;
	    null !== b && $e(b);
	  }
	  function Ye(a) {
	    if (Ra) {
	      a = a.stateNode.containerInfo;
	      var b = hb(a);
	      lb(a, b);
	    }
	  }
	  function af(a) {
	    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	  }
	  function bf(a) {
	    if (Qa) {
	      a: {
	        for (var b = a.return; null !== b;) {
	          if (af(b)) {
	            var c = b;
	            break a;
	          }
	          b = b.return;
	        }
	        throw Error(n(160));
	      }
	      b = c.stateNode;
	      switch (c.tag) {
	        case 5:
	          var d = !1;
	          break;
	        case 3:
	          b = b.containerInfo;
	          d = !0;
	          break;
	        case 4:
	          b = b.containerInfo;
	          d = !0;
	          break;
	        default:
	          throw Error(n(161));
	      }
	      c.effectTag & 16 && (bb(b), c.effectTag &= -17);
	      a: b: for (c = a;;) {
	        for (; null === c.sibling;) {
	          if (null === c.return || af(c.return)) {
	            c = null;
	            break a;
	          }
	          c = c.return;
	        }
	        c.sibling.return = c.return;
	        for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
	          if (c.effectTag & 2) continue b;
	          if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
	        }
	        if (!(c.effectTag & 2)) {
	          c = c.stateNode;
	          break a;
	        }
	      }
	      for (var e = a;;) {
	        var f = 5 === e.tag || 6 === e.tag;
	        if (f) f = f ? e.stateNode : e.stateNode.instance, c ? d ? Za(b, f, c) : Ya(b, f, c) : d ? Ua(b, f) : Ta(b, f);else if (4 !== e.tag && null !== e.child) {
	          e.child.return = e;
	          e = e.child;
	          continue;
	        }
	        if (e === a) break;
	        for (; null === e.sibling;) {
	          if (null === e.return || e.return === a) return;
	          e = e.return;
	        }
	        e.sibling.return = e.return;
	        e = e.sibling;
	      }
	    }
	  }
	  function Xe(a, b, c) {
	    for (var d = b, e = !1, f, g;;) {
	      if (!e) {
	        e = d.return;
	        a: for (;;) {
	          if (null === e) throw Error(n(160));
	          f = e.stateNode;
	          switch (e.tag) {
	            case 5:
	              g = !1;
	              break a;
	            case 3:
	              f = f.containerInfo;
	              g = !0;
	              break a;
	            case 4:
	              f = f.containerInfo;
	              g = !0;
	              break a;
	          }
	          e = e.return;
	        }
	        e = !0;
	      }
	      if (5 === d.tag || 6 === d.tag) Ze(a, d, c), g ? ab(f, d.stateNode) : $a(f, d.stateNode);else if (4 === d.tag) {
	        if (null !== d.child) {
	          f = d.stateNode.containerInfo;
	          g = !0;
	          d.child.return = d;
	          d = d.child;
	          continue;
	        }
	      } else if (Ve(a, d, c), null !== d.child) {
	        d.child.return = d;
	        d = d.child;
	        continue;
	      }
	      if (d === b) break;
	      for (; null === d.sibling;) {
	        if (null === d.return || d.return === b) return;
	        d = d.return;
	        4 === d.tag && (e = !1);
	      }
	      d.sibling.return = d.return;
	      d = d.sibling;
	    }
	  }
	  function cf(a, b) {
	    if (Qa) switch (b.tag) {
	      case 0:
	      case 11:
	      case 14:
	      case 15:
	        Ue(4, 8, b);
	        break;
	      case 1:
	        break;
	      case 5:
	        var c = b.stateNode;
	        if (null != c) {
	          var d = b.memoizedProps;
	          a = null !== a ? a.memoizedProps : d;
	          var e = b.type,
	            f = b.updateQueue;
	          b.updateQueue = null;
	          null !== f && Xa(c, f, e, a, d, b);
	        }
	        break;
	      case 6:
	        if (null === b.stateNode) throw Error(n(162));
	        c = b.memoizedProps;
	        Va(b.stateNode, null !== a ? a.memoizedProps : c, c);
	        break;
	      case 3:
	        Sa && (b = b.stateNode, b.hydrate && (b.hydrate = !1, xb(b.containerInfo)));
	        break;
	      case 12:
	        break;
	      case 13:
	        df(b);
	        ef(b);
	        break;
	      case 19:
	        ef(b);
	        break;
	      case 17:
	        break;
	      case 20:
	        break;
	      case 21:
	        break;
	      default:
	        throw Error(n(163));
	    } else {
	      switch (b.tag) {
	        case 0:
	        case 11:
	        case 14:
	        case 15:
	          Ue(4, 8, b);
	          return;
	        case 12:
	          return;
	        case 13:
	          df(b);
	          ef(b);
	          return;
	        case 19:
	          ef(b);
	          return;
	        case 3:
	          Sa && (c = b.stateNode, c.hydrate && (c.hydrate = !1, xb(c.containerInfo)));
	      }
	      a: if (Ra) switch (b.tag) {
	        case 1:
	        case 5:
	        case 6:
	        case 20:
	          break a;
	        case 3:
	        case 4:
	          b = b.stateNode;
	          lb(b.containerInfo, b.pendingChildren);
	          break a;
	        default:
	          throw Error(n(163));
	      }
	    }
	  }
	  function df(a) {
	    var b = a;
	    if (null === a.memoizedState) var c = !1;else c = !0, b = a.child, ff = E();
	    if (Qa && null !== b) a: if (a = b, Qa) for (b = a;;) {
	      if (5 === b.tag) {
	        var d = b.stateNode;
	        c ? cb(d) : eb(b.stateNode, b.memoizedProps);
	      } else if (6 === b.tag) d = b.stateNode, c ? db(d) : fb(d, b.memoizedProps);else if (13 === b.tag && null !== b.memoizedState && null === b.memoizedState.dehydrated) {
	        d = b.child.sibling;
	        d.return = b;
	        b = d;
	        continue;
	      } else if (null !== b.child) {
	        b.child.return = b;
	        b = b.child;
	        continue;
	      }
	      if (b === a) break a;
	      for (; null === b.sibling;) {
	        if (null === b.return || b.return === a) break a;
	        b = b.return;
	      }
	      b.sibling.return = b.return;
	      b = b.sibling;
	    }
	  }
	  function ef(a) {
	    var b = a.updateQueue;
	    if (null !== b) {
	      a.updateQueue = null;
	      var c = a.stateNode;
	      null === c && (c = a.stateNode = new Oe());
	      b.forEach(function (b) {
	        var d = gf.bind(null, a, b);
	        c.has(b) || (c.add(b), b.then(d, d));
	      });
	    }
	  }
	  var hf = "function" === typeof WeakMap ? WeakMap : Map;
	  function jf(a, b, c) {
	    c = Gc(c, null);
	    c.tag = 3;
	    c.payload = {
	      element: null
	    };
	    var d = b.value;
	    c.callback = function () {
	      kf || (kf = !0, lf = d);
	      Pe(a, b);
	    };
	    return c;
	  }
	  function mf(a, b, c) {
	    c = Gc(c, null);
	    c.tag = 3;
	    var d = a.type.getDerivedStateFromError;
	    if ("function" === typeof d) {
	      var e = b.value;
	      c.payload = function () {
	        Pe(a, b);
	        return d(e);
	      };
	    }
	    var f = a.stateNode;
	    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
	      "function" !== typeof d && (null === nf ? nf = new Set([this]) : nf.add(this), Pe(a, b));
	      var c = b.stack;
	      this.componentDidCatch(b.value, {
	        componentStack: null !== c ? c : ""
	      });
	    });
	    return c;
	  }
	  var of = Math.ceil,
	    pf = q.ReactCurrentDispatcher,
	    qf = q.ReactCurrentOwner,
	    R = 0,
	    rf = 8,
	    S = 16,
	    sf = 32,
	    tf = 0,
	    uf = 1,
	    vf = 2,
	    wf = 3,
	    xf = 4,
	    yf = 5,
	    T = R,
	    U = null,
	    V = null,
	    W = 0,
	    X = tf,
	    zf = null,
	    Af = 1073741823,
	    Bf = 1073741823,
	    Cf = null,
	    Df = 0,
	    Ef = !1,
	    ff = 0,
	    Ff = 500,
	    Y = null,
	    kf = !1,
	    lf = null,
	    nf = null,
	    Gf = !1,
	    Hf = null,
	    If = 90,
	    Jf = null,
	    Kf = 0,
	    Lf = null,
	    Mf = 0;
	  function G() {
	    return (T & (S | sf)) !== R ? 1073741821 - (E() / 10 | 0) : 0 !== Mf ? Mf : Mf = 1073741821 - (E() / 10 | 0);
	  }
	  function Vc(a, b, c) {
	    b = b.mode;
	    if (0 === (b & 2)) return 1073741823;
	    var d = fc();
	    if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822;
	    if ((T & S) !== R) return W;
	    if (null !== c) a = mc(a, c.timeoutMs | 0 || 5E3, 250);else switch (d) {
	      case 99:
	        a = 1073741823;
	        break;
	      case 98:
	        a = mc(a, 150, 100);
	        break;
	      case 97:
	      case 96:
	        a = mc(a, 5E3, 250);
	        break;
	      case 95:
	        a = 2;
	        break;
	      default:
	        throw Error(n(326));
	    }
	    null !== U && a === W && --a;
	    return a;
	  }
	  function Wc(a, b) {
	    if (50 < Kf) throw Kf = 0, Lf = null, Error(n(185));
	    a = Nf(a, b);
	    if (null !== a) {
	      var c = fc();
	      1073741823 === b ? (T & rf) !== R && (T & (S | sf)) === R ? Of(a) : (Z(a), T === R && F()) : Z(a);
	      (T & 4) === R || 98 !== c && 99 !== c || (null === Jf ? Jf = new Map([[a, b]]) : (c = Jf.get(a), (void 0 === c || c > b) && Jf.set(a, b)));
	    }
	  }
	  function Nf(a, b) {
	    a.expirationTime < b && (a.expirationTime = b);
	    var c = a.alternate;
	    null !== c && c.expirationTime < b && (c.expirationTime = b);
	    var d = a.return,
	      e = null;
	    if (null === d && 3 === a.tag) e = a.stateNode;else for (; null !== d;) {
	      c = d.alternate;
	      d.childExpirationTime < b && (d.childExpirationTime = b);
	      null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
	      if (null === d.return && 3 === d.tag) {
	        e = d.stateNode;
	        break;
	      }
	      d = d.return;
	    }
	    null !== e && (U === e && (Pc(b), X === xf && Pf(e, W)), Qf(e, b));
	    return e;
	  }
	  function Rf(a) {
	    var b = a.lastExpiredTime;
	    if (0 !== b) return b;
	    b = a.firstPendingTime;
	    if (!Sf(a, b)) return b;
	    b = a.lastPingedTime;
	    a = a.nextKnownPendingLevel;
	    return b > a ? b : a;
	  }
	  function Z(a) {
	    if (0 !== a.lastExpiredTime) a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = jc(Of.bind(null, a));else {
	      var b = Rf(a),
	        c = a.callbackNode;
	      if (0 === b) null !== c && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);else {
	        var d = G();
	        1073741823 === b ? d = 99 : 1 === b || 2 === b ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);
	        if (null !== c) {
	          var e = a.callbackPriority;
	          if (a.callbackExpirationTime === b && e >= d) return;
	          c !== $b && Ob(c);
	        }
	        a.callbackExpirationTime = b;
	        a.callbackPriority = d;
	        b = 1073741823 === b ? jc(Of.bind(null, a)) : ic(d, Tf.bind(null, a), {
	          timeout: 10 * (1073741821 - b) - E()
	        });
	        a.callbackNode = b;
	      }
	    }
	  }
	  function Tf(a, b) {
	    Mf = 0;
	    if (b) return b = G(), Uf(a, b), Z(a), null;
	    var c = Rf(a);
	    if (0 !== c) {
	      b = a.callbackNode;
	      if ((T & (S | sf)) !== R) throw Error(n(327));
	      Vf();
	      a === U && c === W || Wf(a, c);
	      if (null !== V) {
	        var d = T;
	        T |= S;
	        var e = Xf();
	        do try {
	          Yf();
	          break;
	        } catch (l) {
	          Zf(a, l);
	        } while (1);
	        wc();
	        T = d;
	        pf.current = e;
	        if (X === uf) throw b = zf, Wf(a, c), Pf(a, c), Z(a), b;
	        if (null === V) switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, d = X, U = null, d) {
	          case tf:
	          case uf:
	            throw Error(n(345));
	          case vf:
	            Uf(a, 2 < c ? 2 : c);
	            break;
	          case wf:
	            Pf(a, c);
	            d = a.lastSuspendedTime;
	            c === d && (a.nextKnownPendingLevel = $f(e));
	            if (1073741823 === Af && (e = ff + Ff - E(), 10 < e)) {
	              if (Ef) {
	                var f = a.lastPingedTime;
	                if (0 === f || f >= c) {
	                  a.lastPingedTime = c;
	                  Wf(a, c);
	                  break;
	                }
	              }
	              f = Rf(a);
	              if (0 !== f && f !== c) break;
	              if (0 !== d && d !== c) {
	                a.lastPingedTime = d;
	                break;
	              }
	              a.timeoutHandle = Ma(ag.bind(null, a), e);
	              break;
	            }
	            ag(a);
	            break;
	          case xf:
	            Pf(a, c);
	            d = a.lastSuspendedTime;
	            c === d && (a.nextKnownPendingLevel = $f(e));
	            if (Ef && (e = a.lastPingedTime, 0 === e || e >= c)) {
	              a.lastPingedTime = c;
	              Wf(a, c);
	              break;
	            }
	            e = Rf(a);
	            if (0 !== e && e !== c) break;
	            if (0 !== d && d !== c) {
	              a.lastPingedTime = d;
	              break;
	            }
	            1073741823 !== Bf ? d = 10 * (1073741821 - Bf) - E() : 1073741823 === Af ? d = 0 : (d = 10 * (1073741821 - Af) - 5E3, e = E(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * of(d / 1960)) - d, c < d && (d = c));
	            if (10 < d) {
	              a.timeoutHandle = Ma(ag.bind(null, a), d);
	              break;
	            }
	            ag(a);
	            break;
	          case yf:
	            if (1073741823 !== Af && null !== Cf) {
	              f = Af;
	              var g = Cf;
	              d = g.busyMinDurationMs | 0;
	              0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = E() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5E3)), d = f <= e ? 0 : e + d - f);
	              if (10 < d) {
	                Pf(a, c);
	                a.timeoutHandle = Ma(ag.bind(null, a), d);
	                break;
	              }
	            }
	            ag(a);
	            break;
	          default:
	            throw Error(n(329));
	        }
	        Z(a);
	        if (a.callbackNode === b) return Tf.bind(null, a);
	      }
	    }
	    return null;
	  }
	  function Of(a) {
	    var b = a.lastExpiredTime;
	    b = 0 !== b ? b : 1073741823;
	    if (a.finishedExpirationTime === b) ag(a);else {
	      if ((T & (S | sf)) !== R) throw Error(n(327));
	      Vf();
	      a === U && b === W || Wf(a, b);
	      if (null !== V) {
	        var c = T;
	        T |= S;
	        var d = Xf();
	        do try {
	          bg();
	          break;
	        } catch (e) {
	          Zf(a, e);
	        } while (1);
	        wc();
	        T = c;
	        pf.current = d;
	        if (X === uf) throw c = zf, Wf(a, b), Pf(a, b), Z(a), c;
	        if (null !== V) throw Error(n(261));
	        a.finishedWork = a.current.alternate;
	        a.finishedExpirationTime = b;
	        U = null;
	        ag(a);
	        Z(a);
	      }
	    }
	    return null;
	  }
	  function cg(a, b) {
	    Uf(a, b);
	    Z(a);
	    (T & (S | sf)) === R && F();
	  }
	  function dg() {
	    if (null !== Jf) {
	      var a = Jf;
	      Jf = null;
	      a.forEach(function (a, c) {
	        Uf(c, a);
	        Z(c);
	      });
	      F();
	    }
	  }
	  function eg(a, b) {
	    if ((T & (S | sf)) !== R) throw Error(n(187));
	    var c = T;
	    T |= 1;
	    try {
	      return hc(99, a.bind(null, b));
	    } finally {
	      T = c, F();
	    }
	  }
	  function Wf(a, b) {
	    a.finishedWork = null;
	    a.finishedExpirationTime = 0;
	    var c = a.timeoutHandle;
	    c !== Oa && (a.timeoutHandle = Oa, Na(c));
	    if (null !== V) for (c = V.return; null !== c;) {
	      var d = c;
	      switch (d.tag) {
	        case 1:
	          var e = d.type.childContextTypes;
	          null !== e && void 0 !== e && Gb();
	          break;
	        case 3:
	          rd();
	          Hb();
	          break;
	        case 5:
	          td(d);
	          break;
	        case 4:
	          rd();
	          break;
	        case 13:
	          y(I);
	          break;
	        case 19:
	          y(I);
	          break;
	        case 10:
	          yc(d);
	      }
	      c = c.return;
	    }
	    U = a;
	    V = fd(a.current, null);
	    W = b;
	    X = tf;
	    zf = null;
	    Bf = Af = 1073741823;
	    Cf = null;
	    Df = 0;
	    Ef = !1;
	  }
	  function Zf(a, b) {
	    do {
	      try {
	        wc();
	        Nd();
	        if (null === V || null === V.return) return X = uf, zf = b, null;
	        a: {
	          var c = a,
	            d = V.return,
	            e = V,
	            f = b;
	          b = W;
	          e.effectTag |= 2048;
	          e.firstEffect = e.lastEffect = null;
	          if (null !== f && "object" === typeof f && "function" === typeof f.then) {
	            var g = f,
	              l = 0 !== (I.current & 1),
	              h = d;
	            do {
	              var k;
	              if (k = 13 === h.tag) {
	                var p = h.memoizedState;
	                if (null !== p) k = null !== p.dehydrated ? !0 : !1;else {
	                  var D = h.memoizedProps;
	                  k = void 0 === D.fallback ? !1 : !0 !== D.unstable_avoidThisFallback ? !0 : l ? !1 : !0;
	                }
	              }
	              if (k) {
	                var x = h.updateQueue;
	                if (null === x) {
	                  var K = new Set();
	                  K.add(g);
	                  h.updateQueue = K;
	                } else x.add(g);
	                if (0 === (h.mode & 2)) {
	                  h.effectTag |= 64;
	                  e.effectTag &= -2981;
	                  if (1 === e.tag) if (null === e.alternate) e.tag = 17;else {
	                    var Ha = Gc(1073741823, null);
	                    Ha.tag = 2;
	                    Ic(e, Ha);
	                  }
	                  e.expirationTime = 1073741823;
	                  break a;
	                }
	                f = void 0;
	                e = b;
	                var O = c.pingCache;
	                null === O ? (O = c.pingCache = new hf(), f = new Set(), O.set(g, f)) : (f = O.get(g), void 0 === f && (f = new Set(), O.set(g, f)));
	                if (!f.has(e)) {
	                  f.add(e);
	                  var w = fg.bind(null, c, g, e);
	                  g.then(w, w);
	                }
	                h.effectTag |= 4096;
	                h.expirationTime = b;
	                break a;
	              }
	              h = h.return;
	            } while (null !== h);
	            f = Error((ta(e.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + Ab(e));
	          }
	          X !== yf && (X = vf);
	          f = Ne(f, e);
	          h = d;
	          do {
	            switch (h.tag) {
	              case 3:
	                g = f;
	                h.effectTag |= 4096;
	                h.expirationTime = b;
	                var r = jf(h, g, b);
	                Jc(h, r);
	                break a;
	              case 1:
	                g = f;
	                var t = h.type,
	                  N = h.stateNode;
	                if (0 === (h.effectTag & 64) && ("function" === typeof t.getDerivedStateFromError || null !== N && "function" === typeof N.componentDidCatch && (null === nf || !nf.has(N)))) {
	                  h.effectTag |= 4096;
	                  h.expirationTime = b;
	                  var Mc = mf(h, g, b);
	                  Jc(h, Mc);
	                  break a;
	                }
	            }
	            h = h.return;
	          } while (null !== h);
	        }
	        V = gg(V);
	      } catch (Rb) {
	        b = Rb;
	        continue;
	      }
	      break;
	    } while (1);
	  }
	  function Xf() {
	    var a = pf.current;
	    pf.current = Md;
	    return null === a ? Md : a;
	  }
	  function Oc(a, b) {
	    a < Af && 2 < a && (Af = a);
	    null !== b && a < Bf && 2 < a && (Bf = a, Cf = b);
	  }
	  function Pc(a) {
	    a > Df && (Df = a);
	  }
	  function bg() {
	    for (; null !== V;) V = hg(V);
	  }
	  function Yf() {
	    for (; null !== V && !Pb();) V = hg(V);
	  }
	  function hg(a) {
	    var b = ig(a.alternate, a, W);
	    a.memoizedProps = a.pendingProps;
	    null === b && (b = gg(a));
	    qf.current = null;
	    return b;
	  }
	  function gg(a) {
	    V = a;
	    do {
	      var b = V.alternate;
	      a = V.return;
	      if (0 === (V.effectTag & 2048)) {
	        a: {
	          var c = b;
	          b = V;
	          var d = W,
	            e = b.pendingProps;
	          switch (b.tag) {
	            case 2:
	              break;
	            case 16:
	              break;
	            case 15:
	            case 0:
	              break;
	            case 1:
	              C(b.type) && Gb();
	              break;
	            case 3:
	              rd();
	              Hb();
	              e = b.stateNode;
	              e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null);
	              (null === c || null === c.child) && ne(b) && Fe(b);
	              He(b);
	              break;
	            case 5:
	              td(b);
	              var f = pd(od.current);
	              d = b.type;
	              if (null !== c && null != b.stateNode) Ie(c, b, d, e, f), c.ref !== b.ref && (b.effectTag |= 128);else if (e) {
	                c = pd(H.current);
	                if (ne(b)) {
	                  e = b;
	                  if (!Sa) throw Error(n(175));
	                  c = ub(e.stateNode, e.type, e.memoizedProps, f, c, e);
	                  e.updateQueue = c;
	                  c = null !== c ? !0 : !1;
	                  c && Fe(b);
	                } else {
	                  var g = Ea(d, e, f, c, b);
	                  _Ge(g, b, !1, !1);
	                  b.stateNode = g;
	                  Ga(g, d, e, f, c) && Fe(b);
	                }
	                null !== b.ref && (b.effectTag |= 128);
	              } else if (null === b.stateNode) throw Error(n(166));
	              break;
	            case 6:
	              if (c && null != b.stateNode) Je(c, b, c.memoizedProps, e);else {
	                if ("string" !== typeof e && null === b.stateNode) throw Error(n(166));
	                c = pd(od.current);
	                f = pd(H.current);
	                if (ne(b)) {
	                  c = b;
	                  if (!Sa) throw Error(n(176));
	                  (c = vb(c.stateNode, c.memoizedProps, c)) && Fe(b);
	                } else b.stateNode = La(e, c, f, b);
	              }
	              break;
	            case 11:
	              break;
	            case 13:
	              y(I);
	              e = b.memoizedState;
	              if (0 !== (b.effectTag & 64)) {
	                b.expirationTime = d;
	                break a;
	              }
	              e = null !== e;
	              f = !1;
	              null === c ? void 0 !== b.memoizedProps.fallback && ne(b) : (d = c.memoizedState, f = null !== d, e || null === d || (d = c.child.sibling, null !== d && (g = b.firstEffect, null !== g ? (b.firstEffect = d, d.nextEffect = g) : (b.firstEffect = b.lastEffect = d, d.nextEffect = null), d.effectTag = 8)));
	              if (e && !f && 0 !== (b.mode & 2)) if (null === c && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (I.current & 1)) X === tf && (X = wf);else {
	                if (X === tf || X === wf) X = xf;
	                0 !== Df && null !== U && (Pf(U, W), Qf(U, Df));
	              }
	              Ra && e && (b.effectTag |= 4);
	              Qa && (e || f) && (b.effectTag |= 4);
	              break;
	            case 7:
	              break;
	            case 8:
	              break;
	            case 12:
	              break;
	            case 4:
	              rd();
	              He(b);
	              break;
	            case 10:
	              yc(b);
	              break;
	            case 9:
	              break;
	            case 14:
	              break;
	            case 17:
	              C(b.type) && Gb();
	              break;
	            case 19:
	              y(I);
	              e = b.memoizedState;
	              if (null === e) break;
	              f = 0 !== (b.effectTag & 64);
	              g = e.rendering;
	              if (null === g) {
	                if (f) Le(e, !1);else {
	                  if (X !== tf || null !== c && 0 !== (c.effectTag & 64)) for (c = b.child; null !== c;) {
	                    g = ud(c);
	                    if (null !== g) {
	                      b.effectTag |= 64;
	                      Le(e, !1);
	                      c = g.updateQueue;
	                      null !== c && (b.updateQueue = c, b.effectTag |= 4);
	                      null === e.lastEffect && (b.firstEffect = null);
	                      b.lastEffect = e.lastEffect;
	                      c = d;
	                      for (e = b.child; null !== e;) f = e, d = c, f.effectTag &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, null === g ? (f.childExpirationTime = 0, f.expirationTime = d, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null) : (f.childExpirationTime = g.childExpirationTime, f.expirationTime = g.expirationTime, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, d = g.dependencies, f.dependencies = null === d ? null : {
	                        expirationTime: d.expirationTime,
	                        firstContext: d.firstContext,
	                        responders: d.responders
	                      }), e = e.sibling;
	                      z(I, I.current & 1 | 2);
	                      b = b.child;
	                      break a;
	                    }
	                    c = c.sibling;
	                  }
	                }
	              } else {
	                if (!f) if (c = ud(g), null !== c) {
	                  if (b.effectTag |= 64, f = !0, c = c.updateQueue, null !== c && (b.updateQueue = c, b.effectTag |= 4), Le(e, !0), null === e.tail && "hidden" === e.tailMode) {
	                    b = b.lastEffect = e.lastEffect;
	                    null !== b && (b.nextEffect = null);
	                    break;
	                  }
	                } else E() > e.tailExpiration && 1 < d && (b.effectTag |= 64, f = !0, Le(e, !1), b.expirationTime = b.childExpirationTime = d - 1);
	                e.isBackwards ? (g.sibling = b.child, b.child = g) : (c = e.last, null !== c ? c.sibling = g : b.child = g, e.last = g);
	              }
	              if (null !== e.tail) {
	                0 === e.tailExpiration && (e.tailExpiration = E() + 500);
	                c = e.tail;
	                e.rendering = c;
	                e.tail = c.sibling;
	                e.lastEffect = b.lastEffect;
	                c.sibling = null;
	                e = I.current;
	                e = f ? e & 1 | 2 : e & 1;
	                z(I, e);
	                b = c;
	                break a;
	              }
	              break;
	            case 20:
	              break;
	            case 21:
	              break;
	            default:
	              throw Error(n(156, b.tag));
	          }
	          b = null;
	        }
	        c = V;
	        if (1 === W || 1 !== c.childExpirationTime) {
	          e = 0;
	          for (f = c.child; null !== f;) d = f.expirationTime, g = f.childExpirationTime, d > e && (e = d), g > e && (e = g), f = f.sibling;
	          c.childExpirationTime = e;
	        }
	        if (null !== b) return b;
	        null !== a && 0 === (a.effectTag & 2048) && (null === a.firstEffect && (a.firstEffect = V.firstEffect), null !== V.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = V.firstEffect), a.lastEffect = V.lastEffect), 1 < V.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = V : a.firstEffect = V, a.lastEffect = V));
	      } else {
	        b = Me(V);
	        if (null !== b) return b.effectTag &= 2047, b;
	        null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
	      }
	      b = V.sibling;
	      if (null !== b) return b;
	      V = a;
	    } while (null !== V);
	    X === tf && (X = yf);
	    return null;
	  }
	  function $f(a) {
	    var b = a.expirationTime;
	    a = a.childExpirationTime;
	    return b > a ? b : a;
	  }
	  function ag(a) {
	    var b = fc();
	    hc(99, jg.bind(null, a, b));
	    return null;
	  }
	  function jg(a, b) {
	    Vf();
	    if ((T & (S | sf)) !== R) throw Error(n(327));
	    var c = a.finishedWork,
	      d = a.finishedExpirationTime;
	    if (null === c) return null;
	    a.finishedWork = null;
	    a.finishedExpirationTime = 0;
	    if (c === a.current) throw Error(n(177));
	    a.callbackNode = null;
	    a.callbackExpirationTime = 0;
	    a.callbackPriority = 90;
	    a.nextKnownPendingLevel = 0;
	    var e = $f(c);
	    a.firstPendingTime = e;
	    d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
	    d <= a.lastPingedTime && (a.lastPingedTime = 0);
	    d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
	    a === U && (V = U = null, W = 0);
	    1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;
	    if (null !== e) {
	      var f = T;
	      T |= sf;
	      qf.current = null;
	      Ca(a.containerInfo);
	      Y = e;
	      do try {
	        kg();
	      } catch (jb) {
	        if (null === Y) throw Error(n(330));
	        Re(Y, jb);
	        Y = Y.nextEffect;
	      } while (null !== Y);
	      Y = e;
	      do try {
	        for (var g = a, l = b; null !== Y;) {
	          var h = Y.effectTag;
	          h & 16 && Qa && bb(Y.stateNode);
	          if (h & 128) {
	            var k = Y.alternate;
	            if (null !== k) {
	              var p = k.ref;
	              null !== p && ("function" === typeof p ? p(null) : p.current = null);
	            }
	          }
	          switch (h & 1038) {
	            case 2:
	              bf(Y);
	              Y.effectTag &= -3;
	              break;
	            case 6:
	              bf(Y);
	              Y.effectTag &= -3;
	              cf(Y.alternate, Y);
	              break;
	            case 1024:
	              Y.effectTag &= -1025;
	              break;
	            case 1028:
	              Y.effectTag &= -1025;
	              cf(Y.alternate, Y);
	              break;
	            case 4:
	              cf(Y.alternate, Y);
	              break;
	            case 8:
	              var D = g,
	                x = Y,
	                K = l;
	              Qa ? Xe(D, x, K) : Ze(D, x, K);
	              $e(x);
	          }
	          Y = Y.nextEffect;
	        }
	      } catch (jb) {
	        if (null === Y) throw Error(n(330));
	        Re(Y, jb);
	        Y = Y.nextEffect;
	      } while (null !== Y);
	      Da(a.containerInfo);
	      a.current = c;
	      Y = e;
	      do try {
	        for (h = d; null !== Y;) {
	          var Ha = Y.effectTag;
	          if (Ha & 36) {
	            var O = Y.alternate;
	            k = Y;
	            p = h;
	            switch (k.tag) {
	              case 0:
	              case 11:
	              case 15:
	                Ue(16, 32, k);
	                break;
	              case 1:
	                var w = k.stateNode;
	                if (k.effectTag & 4) if (null === O) w.componentDidMount();else {
	                  var r = k.elementType === k.type ? O.memoizedProps : rc(k.type, O.memoizedProps);
	                  w.componentDidUpdate(r, O.memoizedState, w.__reactInternalSnapshotBeforeUpdate);
	                }
	                var t = k.updateQueue;
	                null !== t && Qc(k, t, w, p);
	                break;
	              case 3:
	                var N = k.updateQueue;
	                if (null !== N) {
	                  g = null;
	                  if (null !== k.child) switch (k.child.tag) {
	                    case 5:
	                      g = za(k.child.stateNode);
	                      break;
	                    case 1:
	                      g = k.child.stateNode;
	                  }
	                  Qc(k, N, g, p);
	                }
	                break;
	              case 5:
	                var Mc = k.stateNode;
	                null === O && k.effectTag & 4 && Wa(Mc, k.type, k.memoizedProps, k);
	                break;
	              case 6:
	                break;
	              case 4:
	                break;
	              case 12:
	                break;
	              case 13:
	                if (Sa && null === k.memoizedState) {
	                  var Rb = k.alternate;
	                  if (null !== Rb) {
	                    var le = Rb.memoizedState;
	                    if (null !== le) {
	                      var me = le.dehydrated;
	                      null !== me && yb(me);
	                    }
	                  }
	                }
	                break;
	              case 19:
	              case 17:
	              case 20:
	              case 21:
	                break;
	              default:
	                throw Error(n(163));
	            }
	          }
	          if (Ha & 128) {
	            k = void 0;
	            var Sb = Y.ref;
	            if (null !== Sb) {
	              var v = Y.stateNode;
	              switch (Y.tag) {
	                case 5:
	                  k = za(v);
	                  break;
	                default:
	                  k = v;
	              }
	              "function" === typeof Sb ? Sb(k) : Sb.current = k;
	            }
	          }
	          Y = Y.nextEffect;
	        }
	      } catch (jb) {
	        if (null === Y) throw Error(n(330));
	        Re(Y, jb);
	        Y = Y.nextEffect;
	      } while (null !== Y);
	      Y = null;
	      ac();
	      T = f;
	    } else a.current = c;
	    if (Gf) Gf = !1, Hf = a, If = b;else for (Y = e; null !== Y;) b = Y.nextEffect, Y.nextEffect = null, Y = b;
	    b = a.firstPendingTime;
	    0 === b && (nf = null);
	    1073741823 === b ? a === Lf ? Kf++ : (Kf = 0, Lf = a) : Kf = 0;
	    "function" === typeof lg && lg(c.stateNode, d);
	    Z(a);
	    if (kf) throw kf = !1, a = lf, lf = null, a;
	    if ((T & rf) !== R) return null;
	    F();
	    return null;
	  }
	  function kg() {
	    for (; null !== Y;) {
	      var a = Y.effectTag;
	      0 !== (a & 256) && Te(Y.alternate, Y);
	      0 === (a & 512) || Gf || (Gf = !0, ic(97, function () {
	        Vf();
	        return null;
	      }));
	      Y = Y.nextEffect;
	    }
	  }
	  function Vf() {
	    if (90 !== If) {
	      var a = 97 < If ? 97 : If;
	      If = 90;
	      return hc(a, mg);
	    }
	  }
	  function mg() {
	    if (null === Hf) return !1;
	    var a = Hf;
	    Hf = null;
	    if ((T & (S | sf)) !== R) throw Error(n(331));
	    var b = T;
	    T |= sf;
	    for (a = a.current.firstEffect; null !== a;) {
	      try {
	        var c = a;
	        if (0 !== (c.effectTag & 512)) switch (c.tag) {
	          case 0:
	          case 11:
	          case 15:
	            Ue(128, 0, c), Ue(0, 64, c);
	        }
	      } catch (d) {
	        if (null === a) throw Error(n(330));
	        Re(a, d);
	      }
	      c = a.nextEffect;
	      a.nextEffect = null;
	      a = c;
	    }
	    T = b;
	    F();
	    return !0;
	  }
	  function ng(a, b, c) {
	    b = Ne(c, b);
	    b = jf(a, b, 1073741823);
	    Ic(a, b);
	    a = Nf(a, 1073741823);
	    null !== a && Z(a);
	  }
	  function Re(a, b) {
	    if (3 === a.tag) ng(a, a, b);else for (var c = a.return; null !== c;) {
	      if (3 === c.tag) {
	        ng(c, a, b);
	        break;
	      } else if (1 === c.tag) {
	        var d = c.stateNode;
	        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === nf || !nf.has(d))) {
	          a = Ne(b, a);
	          a = mf(c, a, 1073741823);
	          Ic(c, a);
	          c = Nf(c, 1073741823);
	          null !== c && Z(c);
	          break;
	        }
	      }
	      c = c.return;
	    }
	  }
	  function fg(a, b, c) {
	    var d = a.pingCache;
	    null !== d && d.delete(b);
	    U === a && W === c ? X === xf || X === wf && 1073741823 === Af && E() - ff < Ff ? Wf(a, W) : Ef = !0 : Sf(a, c) && (b = a.lastPingedTime, 0 !== b && b < c || (a.lastPingedTime = c, a.finishedExpirationTime === c && (a.finishedExpirationTime = 0, a.finishedWork = null), Z(a)));
	  }
	  function gf(a, b) {
	    var c = a.stateNode;
	    null !== c && c.delete(b);
	    b = 0;
	    0 === b && (b = G(), b = Vc(b, a, null));
	    a = Nf(a, b);
	    null !== a && Z(a);
	  }
	  var ig;
	  ig = function ig(a, b, c) {
	    var d = b.expirationTime;
	    if (null !== a) {
	      var e = b.pendingProps;
	      if (a.memoizedProps !== e || B.current) Bc = !0;else {
	        if (d < c) {
	          Bc = !1;
	          switch (b.tag) {
	            case 3:
	              ze(b);
	              oe();
	              break;
	            case 5:
	              sd(b);
	              if (b.mode & 4 && 1 !== c && Ka(b.type, e)) return b.expirationTime = b.childExpirationTime = 1, null;
	              break;
	            case 1:
	              C(b.type) && Kb(b);
	              break;
	            case 4:
	              qd(b, b.stateNode.containerInfo);
	              break;
	            case 10:
	              xc(b, b.memoizedProps.value);
	              break;
	            case 13:
	              if (null !== b.memoizedState) {
	                d = b.child.childExpirationTime;
	                if (0 !== d && d >= c) return Be(a, b, c);
	                z(I, I.current & 1);
	                b = re(a, b, c);
	                return null !== b ? b.sibling : null;
	              }
	              z(I, I.current & 1);
	              break;
	            case 19:
	              d = b.childExpirationTime >= c;
	              if (0 !== (a.effectTag & 64)) {
	                if (d) return Ee(a, b, c);
	                b.effectTag |= 64;
	              }
	              e = b.memoizedState;
	              null !== e && (e.rendering = null, e.tail = null);
	              z(I, I.current);
	              if (!d) return null;
	          }
	          return re(a, b, c);
	        }
	        Bc = !1;
	      }
	    } else Bc = !1;
	    b.expirationTime = 0;
	    switch (b.tag) {
	      case 2:
	        d = b.type;
	        null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
	        a = b.pendingProps;
	        e = Fb(b, A.current);
	        Ac(b, c);
	        e = Jd(null, b, d, a, e, c);
	        b.effectTag |= 1;
	        if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
	          b.tag = 1;
	          Nd();
	          if (C(d)) {
	            var f = !0;
	            Kb(b);
	          } else f = !1;
	          b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
	          var g = d.getDerivedStateFromProps;
	          "function" === typeof g && Uc(b, d, g, a);
	          e.updater = Xc;
	          b.stateNode = e;
	          e._reactInternalFiber = b;
	          ad(b, d, a, c);
	          b = ye(null, b, d, !0, f, c);
	        } else b.tag = 0, Q(null, b, e, c), b = b.child;
	        return b;
	      case 16:
	        e = b.elementType;
	        null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
	        a = b.pendingProps;
	        sa(e);
	        if (1 !== e._status) throw e._result;
	        e = e._result;
	        b.type = e;
	        f = b.tag = og(e);
	        a = rc(e, a);
	        switch (f) {
	          case 0:
	            b = ve(null, b, e, a, c);
	            break;
	          case 1:
	            b = xe(null, b, e, a, c);
	            break;
	          case 11:
	            b = qe(null, b, e, a, c);
	            break;
	          case 14:
	            b = se(null, b, e, rc(e.type, a), d, c);
	            break;
	          default:
	            throw Error(n(306, e, ""));
	        }
	        return b;
	      case 0:
	        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : rc(d, e), ve(a, b, d, e, c);
	      case 1:
	        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : rc(d, e), xe(a, b, d, e, c);
	      case 3:
	        ze(b);
	        d = b.updateQueue;
	        if (null === d) throw Error(n(282));
	        e = b.memoizedState;
	        e = null !== e ? e.element : null;
	        Nc(b, d, b.pendingProps, null, c);
	        d = b.memoizedState.element;
	        if (d === e) oe(), b = re(a, b, c);else {
	          if (e = b.stateNode.hydrate) Sa ? (ee = tb(b.stateNode.containerInfo), de = b, e = fe = !0) : e = !1;
	          if (e) for (c = ld(b, null, d, c), b.child = c; c;) c.effectTag = c.effectTag & -3 | 1024, c = c.sibling;else Q(a, b, d, c), oe();
	          b = b.child;
	        }
	        return b;
	      case 5:
	        return sd(b), null === a && je(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ja(d, e) ? g = null : null !== f && Ja(d, f) && (b.effectTag |= 16), we(a, b), b.mode & 4 && 1 !== c && Ka(d, e) ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (Q(a, b, g, c), b = b.child), b;
	      case 6:
	        return null === a && je(b), null;
	      case 13:
	        return Be(a, b, c);
	      case 4:
	        return qd(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = kd(b, null, d, c) : Q(a, b, d, c), b.child;
	      case 11:
	        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : rc(d, e), qe(a, b, d, e, c);
	      case 7:
	        return Q(a, b, b.pendingProps, c), b.child;
	      case 8:
	        return Q(a, b, b.pendingProps.children, c), b.child;
	      case 12:
	        return Q(a, b, b.pendingProps.children, c), b.child;
	      case 10:
	        a: {
	          d = b.type._context;
	          e = b.pendingProps;
	          g = b.memoizedProps;
	          f = e.value;
	          xc(b, f);
	          if (null !== g) {
	            var l = g.value;
	            f = oc(l, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(l, f) : 1073741823) | 0;
	            if (0 === f) {
	              if (g.children === e.children && !B.current) {
	                b = re(a, b, c);
	                break a;
	              }
	            } else for (l = b.child, null !== l && (l.return = b); null !== l;) {
	              var h = l.dependencies;
	              if (null !== h) {
	                g = l.child;
	                for (var k = h.firstContext; null !== k;) {
	                  if (k.context === d && 0 !== (k.observedBits & f)) {
	                    1 === l.tag && (k = Gc(c, null), k.tag = 2, Ic(l, k));
	                    l.expirationTime < c && (l.expirationTime = c);
	                    k = l.alternate;
	                    null !== k && k.expirationTime < c && (k.expirationTime = c);
	                    zc(l.return, c);
	                    h.expirationTime < c && (h.expirationTime = c);
	                    break;
	                  }
	                  k = k.next;
	                }
	              } else g = 10 === l.tag ? l.type === b.type ? null : l.child : l.child;
	              if (null !== g) g.return = l;else for (g = l; null !== g;) {
	                if (g === b) {
	                  g = null;
	                  break;
	                }
	                l = g.sibling;
	                if (null !== l) {
	                  l.return = g.return;
	                  g = l;
	                  break;
	                }
	                g = g.return;
	              }
	              l = g;
	            }
	          }
	          Q(a, b, e.children, c);
	          b = b.child;
	        }
	        return b;
	      case 9:
	        return e = b.type, f = b.pendingProps, d = f.children, Ac(b, c), e = Cc(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, Q(a, b, d, c), b.child;
	      case 14:
	        return e = b.type, f = rc(e, b.pendingProps), f = rc(e.type, f), se(a, b, e, f, d, c);
	      case 15:
	        return ue(a, b, b.type, b.pendingProps, d, c);
	      case 17:
	        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : rc(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, C(d) ? (a = !0, Kb(b)) : a = !1, Ac(b, c), Zc(b, d, e), ad(b, d, e, c), ye(null, b, d, !0, a, c);
	      case 19:
	        return Ee(a, b, c);
	    }
	    throw Error(n(156, b.tag));
	  };
	  var lg = null,
	    We = null;
	  function pg(a) {
	    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
	    var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	    if (b.isDisabled || !b.supportsFiber) return !0;
	    try {
	      var c = b.inject(a);
	      lg = function lg(a) {
	        try {
	          b.onCommitFiberRoot(c, a, void 0, 64 === (a.current.effectTag & 64));
	        } catch (e) {}
	      };
	      We = function We(a) {
	        try {
	          b.onCommitFiberUnmount(c, a);
	        } catch (e) {}
	      };
	    } catch (d) {}
	    return !0;
	  }
	  function qg(a, b, c, d) {
	    this.tag = a;
	    this.key = c;
	    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
	    this.index = 0;
	    this.ref = null;
	    this.pendingProps = b;
	    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
	    this.mode = d;
	    this.effectTag = 0;
	    this.lastEffect = this.firstEffect = this.nextEffect = null;
	    this.childExpirationTime = this.expirationTime = 0;
	    this.alternate = null;
	  }
	  function he(a, b, c, d) {
	    return new qg(a, b, c, d);
	  }
	  function te(a) {
	    a = a.prototype;
	    return !(!a || !a.isReactComponent);
	  }
	  function og(a) {
	    if ("function" === typeof a) return te(a) ? 1 : 0;
	    if (void 0 !== a && null !== a) {
	      a = a.$$typeof;
	      if (a === la) return 11;
	      if (a === oa) return 14;
	    }
	    return 2;
	  }
	  function fd(a, b) {
	    var c = a.alternate;
	    null === c ? (c = he(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
	    c.childExpirationTime = a.childExpirationTime;
	    c.expirationTime = a.expirationTime;
	    c.child = a.child;
	    c.memoizedProps = a.memoizedProps;
	    c.memoizedState = a.memoizedState;
	    c.updateQueue = a.updateQueue;
	    b = a.dependencies;
	    c.dependencies = null === b ? null : {
	      expirationTime: b.expirationTime,
	      firstContext: b.firstContext,
	      responders: b.responders
	    };
	    c.sibling = a.sibling;
	    c.index = a.index;
	    c.ref = a.ref;
	    return c;
	  }
	  function hd(a, b, c, d, e, f) {
	    var g = 2;
	    d = a;
	    if ("function" === typeof a) te(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
	      case ea:
	        return jd(c.children, e, f, b);
	      case ka:
	        g = 8;
	        e |= 7;
	        break;
	      case fa:
	        g = 8;
	        e |= 1;
	        break;
	      case ha:
	        return a = he(12, c, b, e | 8), a.elementType = ha, a.type = ha, a.expirationTime = f, a;
	      case ma:
	        return a = he(13, c, b, e), a.type = ma, a.elementType = ma, a.expirationTime = f, a;
	      case na:
	        return a = he(19, c, b, e), a.elementType = na, a.expirationTime = f, a;
	      default:
	        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
	          case ia:
	            g = 10;
	            break a;
	          case ja:
	            g = 9;
	            break a;
	          case la:
	            g = 11;
	            break a;
	          case oa:
	            g = 14;
	            break a;
	          case pa:
	            g = 16;
	            d = null;
	            break a;
	        }
	        throw Error(n(130, null == a ? a : typeof a, ""));
	    }
	    b = he(g, c, b, e);
	    b.elementType = a;
	    b.type = d;
	    b.expirationTime = f;
	    return b;
	  }
	  function jd(a, b, c, d) {
	    a = he(7, a, d, b);
	    a.expirationTime = c;
	    return a;
	  }
	  function gd(a, b, c) {
	    a = he(6, a, null, b);
	    a.expirationTime = c;
	    return a;
	  }
	  function id(a, b, c) {
	    b = he(4, null !== a.children ? a.children : [], a.key, b);
	    b.expirationTime = c;
	    b.stateNode = {
	      containerInfo: a.containerInfo,
	      pendingChildren: null,
	      implementation: a.implementation
	    };
	    return b;
	  }
	  function rg(a, b, c) {
	    this.tag = b;
	    this.current = null;
	    this.containerInfo = a;
	    this.pingCache = this.pendingChildren = null;
	    this.finishedExpirationTime = 0;
	    this.finishedWork = null;
	    this.timeoutHandle = Oa;
	    this.pendingContext = this.context = null;
	    this.hydrate = c;
	    this.callbackNode = null;
	    this.callbackPriority = 90;
	    this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
	  }
	  function Sf(a, b) {
	    var c = a.firstSuspendedTime;
	    a = a.lastSuspendedTime;
	    return 0 !== c && c >= b && a <= b;
	  }
	  function Pf(a, b) {
	    var c = a.firstSuspendedTime,
	      d = a.lastSuspendedTime;
	    c < b && (a.firstSuspendedTime = b);
	    if (d > b || 0 === c) a.lastSuspendedTime = b;
	    b <= a.lastPingedTime && (a.lastPingedTime = 0);
	    b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
	  }
	  function Qf(a, b) {
	    b > a.firstPendingTime && (a.firstPendingTime = b);
	    var c = a.firstSuspendedTime;
	    0 !== c && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
	  }
	  function Uf(a, b) {
	    var c = a.lastExpiredTime;
	    if (0 === c || c > b) a.lastExpiredTime = b;
	  }
	  function sg(a) {
	    var b = a._reactInternalFiber;
	    if (void 0 === b) {
	      if ("function" === typeof a.render) throw Error(n(188));
	      throw Error(n(268, Object.keys(a)));
	    }
	    a = xa(b);
	    return null === a ? null : a.stateNode;
	  }
	  function tg(a, b) {
	    a = a.memoizedState;
	    null !== a && null !== a.dehydrated && a.retryTime < b && (a.retryTime = b);
	  }
	  function ug(a, b) {
	    tg(a, b);
	    (a = a.alternate) && tg(a, b);
	  }
	  var vg = {
	    createContainer: function createContainer(a, b, c) {
	      a = new rg(a, b, c);
	      b = he(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
	      a.current = b;
	      return b.stateNode = a;
	    },
	    updateContainer: function updateContainer(a, b, c, d) {
	      var e = b.current,
	        f = G(),
	        g = Sc.suspense;
	      f = Vc(f, e, g);
	      a: if (c) {
	        c = c._reactInternalFiber;
	        b: {
	          if (ua(c) !== c || 1 !== c.tag) throw Error(n(170));
	          var l = c;
	          do {
	            switch (l.tag) {
	              case 3:
	                l = l.stateNode.context;
	                break b;
	              case 1:
	                if (C(l.type)) {
	                  l = l.stateNode.__reactInternalMemoizedMergedChildContext;
	                  break b;
	                }
	            }
	            l = l.return;
	          } while (null !== l);
	          throw Error(n(171));
	        }
	        if (1 === c.tag) {
	          var h = c.type;
	          if (C(h)) {
	            c = Jb(c, h, l);
	            break a;
	          }
	        }
	        c = l;
	      } else c = Db;
	      null === b.context ? b.context = c : b.pendingContext = c;
	      b = Gc(f, g);
	      b.payload = {
	        element: a
	      };
	      d = void 0 === d ? null : d;
	      null !== d && (b.callback = d);
	      Ic(e, b);
	      Wc(e, f);
	      return f;
	    },
	    batchedEventUpdates: function batchedEventUpdates(a, b) {
	      var c = T;
	      T |= 2;
	      try {
	        return a(b);
	      } finally {
	        T = c, T === R && F();
	      }
	    },
	    batchedUpdates: function batchedUpdates(a, b) {
	      var c = T;
	      T |= 1;
	      try {
	        return a(b);
	      } finally {
	        T = c, T === R && F();
	      }
	    },
	    unbatchedUpdates: function unbatchedUpdates(a, b) {
	      var c = T;
	      T &= -2;
	      T |= rf;
	      try {
	        return a(b);
	      } finally {
	        T = c, T === R && F();
	      }
	    },
	    deferredUpdates: function deferredUpdates(a) {
	      return hc(97, a);
	    },
	    syncUpdates: function syncUpdates(a, b, c, d) {
	      return hc(99, a.bind(null, b, c, d));
	    },
	    discreteUpdates: function discreteUpdates(a, b, c, d) {
	      var e = T;
	      T |= 4;
	      try {
	        return hc(98, a.bind(null, b, c, d));
	      } finally {
	        T = e, T === R && F();
	      }
	    },
	    flushDiscreteUpdates: function flushDiscreteUpdates() {
	      (T & (1 | S | sf)) === R && (dg(), Vf());
	    },
	    flushControlled: function flushControlled(a) {
	      var b = T;
	      T |= 1;
	      try {
	        hc(99, a);
	      } finally {
	        T = b, T === R && F();
	      }
	    },
	    flushSync: eg,
	    flushPassiveEffects: Vf,
	    IsThisRendererActing: {
	      current: !1
	    },
	    getPublicRootInstance: function getPublicRootInstance(a) {
	      a = a.current;
	      if (!a.child) return null;
	      switch (a.child.tag) {
	        case 5:
	          return za(a.child.stateNode);
	        default:
	          return a.child.stateNode;
	      }
	    },
	    attemptSynchronousHydration: function attemptSynchronousHydration(a) {
	      switch (a.tag) {
	        case 3:
	          var b = a.stateNode;
	          b.hydrate && cg(b, b.firstPendingTime);
	          break;
	        case 13:
	          eg(function () {
	            return Wc(a, 1073741823);
	          }), b = mc(G(), 150, 100), ug(a, b);
	      }
	    },
	    attemptUserBlockingHydration: function attemptUserBlockingHydration(a) {
	      if (13 === a.tag) {
	        var b = mc(G(), 150, 100);
	        Wc(a, b);
	        ug(a, b);
	      }
	    },
	    attemptContinuousHydration: function attemptContinuousHydration(a) {
	      if (13 === a.tag) {
	        G();
	        var b = lc++;
	        Wc(a, b);
	        ug(a, b);
	      }
	    },
	    attemptHydrationAtCurrentPriority: function attemptHydrationAtCurrentPriority(a) {
	      if (13 === a.tag) {
	        var b = G();
	        b = Vc(b, a, null);
	        Wc(a, b);
	        ug(a, b);
	      }
	    },
	    findHostInstance: sg,
	    findHostInstanceWithWarning: function findHostInstanceWithWarning(a) {
	      return sg(a);
	    },
	    findHostInstanceWithNoPortals: function findHostInstanceWithNoPortals(a) {
	      a = ya(a);
	      return null === a ? null : 20 === a.tag ? a.stateNode.instance : a.stateNode;
	    },
	    shouldSuspend: function shouldSuspend() {
	      return !1;
	    },
	    injectIntoDevTools: function injectIntoDevTools(a) {
	      var b = a.findFiberByHostInstance;
	      return pg(aa({}, a, {
	        overrideHookState: null,
	        overrideProps: null,
	        setSuspenseHandler: null,
	        scheduleUpdate: null,
	        currentDispatcherRef: q.ReactCurrentDispatcher,
	        findHostInstanceByFiber: function findHostInstanceByFiber(a) {
	          a = xa(a);
	          return null === a ? null : a.stateNode;
	        },
	        findFiberByHostInstance: function findFiberByHostInstance(a) {
	          return b ? b(a) : null;
	        },
	        findHostInstancesForRefresh: null,
	        scheduleRefresh: null,
	        scheduleRoot: null,
	        setRefreshHandler: null,
	        getCurrentFiber: null
	      }));
	    }
	  };
	  module.exports = vg.default || vg;
	  var $$$renderer = module.exports;
	  module.exports = $$$reconciler;
	  return $$$renderer;
	}; 
} (reactReconciler_production_min));

var reactReconciler_production_minExports = reactReconciler_production_min.exports;
var ReactFiberReconciler = /*@__PURE__*/getDefaultExportFromCjs(reactReconciler_production_minExports);

/* eslint-disable no-continue */

/**
 * Checks if two sets of props are equal (recursively)
 *
 * @param {Object} a props A
 * @param {Object} b props B
 * @returns {boolean} props equals?
 *
 */
var propsEqual = function propsEqual(a, b) {
  var oldPropsKeys = Object.keys(a);
  var newPropsKeys = Object.keys(b);
  if (oldPropsKeys.length !== newPropsKeys.length) {
    return false;
  }
  for (var i = 0; i < oldPropsKeys.length; i += 1) {
    var propName = oldPropsKeys[i];
    if (propName === 'render' && !a[propName] !== !b[propName]) {
      return false;
    }
    if (propName !== 'children' && a[propName] !== b[propName]) {
      if (typeof a[propName] === 'object' && typeof b[propName] === 'object' && propsEqual(a[propName], b[propName])) {
        continue;
      }
      return false;
    }
    if (propName === 'children' && (typeof a[propName] === 'string' || typeof b[propName] === 'string')) {
      return a[propName] === b[propName];
    }
  }
  return true;
};

var _excluded = ["style", "children"],
  _excluded2 = ["style"];
var emptyObject = {};
var appendChild = function appendChild(parentInstance, child) {
  var isParentText = parentInstance.type === 'TEXT' || parentInstance.type === 'LINK' || parentInstance.type === 'TSPAN';
  var isChildTextInstance = child.type === 'TEXT_INSTANCE';
  var isOrphanTextInstance = isChildTextInstance && !isParentText;

  // Ignore orphan text instances.
  // Caused by cases such as <>{name && <Text>{name}</Text>}</>
  if (isOrphanTextInstance) {
    console.warn("Invalid '" + child.value + "' string child outside <Text> component");
    return;
  }
  parentInstance.children.push(child);
};
var createRenderer = function createRenderer(_ref) {
  var _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;
  return ReactFiberReconciler({
    schedulePassiveEffects: scheduler.unstable_scheduleCallback,
    cancelPassiveEffects: scheduler.unstable_cancelCallback,
    supportsMutation: true,
    isPrimaryRenderer: false,
    warnsIfNotActing: false,
    appendInitialChild: appendChild,
    createInstance: function createInstance(type, _ref2) {
      var style = _ref2.style;
        _ref2.children;
        var props = _objectWithoutPropertiesLoose(_ref2, _excluded);
      return {
        type: type,
        box: {},
        style: style || {},
        props: props || {},
        children: []
      };
    },
    createTextInstance: function createTextInstance(text, rootContainerInstance) {
      return {
        type: 'TEXT_INSTANCE',
        value: text
      };
    },
    finalizeInitialChildren: function finalizeInitialChildren(element, type, props) {
      return false;
    },
    getPublicInstance: function getPublicInstance(instance) {
      return instance;
    },
    prepareForCommit: function prepareForCommit() {
      // Noop
    },
    clearContainer: function clearContainer() {
      // Noop
    },
    prepareUpdate: function prepareUpdate(element, type, oldProps, newProps) {
      return !propsEqual(oldProps, newProps);
    },
    resetAfterCommit: onChange,
    resetTextContent: function resetTextContent(element) {
      // Noop
    },
    getRootHostContext: function getRootHostContext() {
      return emptyObject;
    },
    getChildHostContext: function getChildHostContext() {
      return emptyObject;
    },
    shouldSetTextContent: function shouldSetTextContent(type, props) {
      return false;
    },
    now: Date.now,
    useSyncScheduling: true,
    appendChild: appendChild,
    appendChildToContainer: function appendChildToContainer(parentInstance, child) {
      if (parentInstance.type === 'ROOT') {
        parentInstance.document = child;
      } else {
        appendChild(parentInstance, child);
      }
    },
    insertBefore: function insertBefore(parentInstance, child, beforeChild) {
      var _parentInstance$child;
      var index = (_parentInstance$child = parentInstance.children) === null || _parentInstance$child === void 0 ? void 0 : _parentInstance$child.indexOf(beforeChild);
      if (index === undefined) return;
      if (index !== -1 && child) parentInstance.children.splice(index, 0, child);
    },
    removeChild: function removeChild(parentInstance, child) {
      var _parentInstance$child2;
      var index = (_parentInstance$child2 = parentInstance.children) === null || _parentInstance$child2 === void 0 ? void 0 : _parentInstance$child2.indexOf(child);
      if (index === undefined) return;
      if (index !== -1) parentInstance.children.splice(index, 1);
    },
    removeChildFromContainer: function removeChildFromContainer(parentInstance, child) {
      var _parentInstance$child3;
      var index = (_parentInstance$child3 = parentInstance.children) === null || _parentInstance$child3 === void 0 ? void 0 : _parentInstance$child3.indexOf(child);
      if (index === undefined) return;
      if (index !== -1) parentInstance.children.splice(index, 1);
    },
    commitTextUpdate: function commitTextUpdate(textInstance, oldText, newText) {
      textInstance.value = newText;
    },
    commitUpdate: function commitUpdate(instance, updatePayload, type, oldProps, newProps) {
      var style = newProps.style,
        props = _objectWithoutPropertiesLoose(newProps, _excluded2);
      instance.props = props;
      instance.style = style;
    }
  });
};

var name = "@react-pdf/renderer";
var version$1 = "3.4.2";
var license = "MIT";
var description = "Create PDF files on the browser and server";
var author = "Diego Muracciole <diegomuracciole@gmail.com>";
var homepage = "https://github.com/diegomura/react-pdf#readme";
var type = "module";
var main = "./lib/react-pdf.cjs";
var module = "./lib/react-pdf.js";
var browser = {
	"./lib/react-pdf.js": "./lib/react-pdf.browser.js",
	"./lib/react-pdf.cjs": "./lib/react-pdf.browser.cjs"
};
var exports = {
	".": {
		"import": "./lib/react-pdf.js",
		require: "./lib/react-pdf.cjs",
		"default": "./lib/react-pdf.js"
	}
};
var repository = {
	type: "git",
	url: "https://github.com/diegomura/react-pdf.git",
	directory: "packages/renderer"
};
var scripts = {
	build: "rimraf ./lib && rollup -c",
	watch: "rimraf ./lib && rollup -c -w",
	size: "size-limit",
	lint: "eslint src",
	test: "vitest && vitest --config vitest.browser.config.js"
};
var dependencies = {
	"@babel/runtime": "^7.20.13",
	"@react-pdf/font": "^2.4.4",
	"@react-pdf/layout": "^3.11.5",
	"@react-pdf/pdfkit": "^3.1.9",
	"@react-pdf/primitives": "^3.1.1",
	"@react-pdf/render": "^3.4.3",
	"@react-pdf/types": "^2.4.1",
	events: "^3.3.0",
	"object-assign": "^4.1.1",
	"prop-types": "^15.6.2",
	queue: "^6.0.1",
	scheduler: "^0.17.0"
};
var peerDependencies = {
	react: "^16.8.0 || ^17.0.0 || ^18.0.0"
};
var files = [
	"lib",
	"index.d.ts"
];
var collective = {
	type: "opencollective",
	url: "https://opencollective.com/react-pdf",
	logo: "https://opencollective.com/opencollective/logo.txt"
};
var devDependencies = {
	"@size-limit/preset-big-lib": "^11.0.1",
	assert: "^2.0.0",
	"browserify-zlib": "^0.2.0",
	buffer: "^6.0.3",
	process: "^0.11.10",
	"react-reconciler": "0.23.0",
	"size-limit": "^11.0.1",
	util: "^0.12.4"
};
var packageJson = {
	name: name,
	version: version$1,
	license: license,
	description: description,
	author: author,
	homepage: homepage,
	type: type,
	main: main,
	module: module,
	browser: browser,
	exports: exports,
	repository: repository,
	scripts: scripts,
	dependencies: dependencies,
	peerDependencies: peerDependencies,
	"lint-staged": {
	"*.js": [
		"yarn lint",
		"prettier --write"
	]
},
	files: files,
	collective: collective,
	devDependencies: devDependencies
};

var version = packageJson.version;
var fontStore = new FontStore();

// We must keep a single renderer instance, otherwise React will complain
var renderer;

// The pdf instance acts as an event emitter for DOM usage.
// We only want to trigger an update when PDF content changes
var events = {};
var pdf = function pdf(initialValue) {
  var onChange = function onChange() {
    var _events$change;
    var listeners = ((_events$change = events.change) === null || _events$change === void 0 ? void 0 : _events$change.slice()) || [];
    for (var i = 0; i < listeners.length; i += 1) listeners[i]();
  };
  var container = {
    type: 'ROOT',
    document: null
  };
  renderer = renderer || createRenderer({
    onChange: onChange
  });
  var mountNode = renderer.createContainer(container);
  var updateContainer = function updateContainer(doc, callback) {
    renderer.updateContainer(doc, mountNode, null, callback);
  };
  if (initialValue) updateContainer(initialValue);
  var render = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(compress) {
      var props, pdfVersion, language, pageLayout, pageMode, ctx, layout, fileStream;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (compress === void 0) {
              compress = true;
            }
            props = container.document.props || {};
            pdfVersion = props.pdfVersion, language = props.language, pageLayout = props.pageLayout, pageMode = props.pageMode;
            ctx = new PDFDocument({
              compress: compress,
              pdfVersion: pdfVersion,
              lang: language,
              displayTitle: true,
              autoFirstPage: false,
              pageLayout: pageLayout,
              pageMode: pageMode
            });
            _context.next = 6;
            return layoutDocument(container.document, fontStore);
          case 6:
            layout = _context.sent;
            fileStream = renderPDF(ctx, layout);
            return _context.abrupt("return", {
              layout: layout,
              fileStream: fileStream
            });
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function render(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var callOnRender = function callOnRender(params) {
    if (params === void 0) {
      params = {};
    }
    if (container.document.props.onRender) {
      container.document.props.onRender(params);
    }
  };
  var toBlob = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var chunks, _yield$render, _INTERNAL__LAYOUT__DATA_, instance;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            chunks = [];
            _context2.next = 3;
            return render();
          case 3:
            _yield$render = _context2.sent;
            _INTERNAL__LAYOUT__DATA_ = _yield$render.layout;
            instance = _yield$render.fileStream;
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              instance.on('data', function (chunk) {
                chunks.push(chunk instanceof Uint8Array ? chunk : new Uint8Array(chunk));
              });
              instance.on('end', function () {
                try {
                  var blob = new Blob(chunks, {
                    type: 'application/pdf'
                  });
                  callOnRender({
                    blob: blob,
                    _INTERNAL__LAYOUT__DATA_: _INTERNAL__LAYOUT__DATA_
                  });
                  resolve(blob);
                } catch (error) {
                  reject(error);
                }
              });
            }));
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function toBlob() {
      return _ref2.apply(this, arguments);
    };
  }();

  // TODO: rename this method to `toStream` in next major release, because it return stream not a buffer
  var toBuffer = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _yield$render2, _INTERNAL__LAYOUT__DATA_, fileStream;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return render();
          case 2:
            _yield$render2 = _context3.sent;
            _INTERNAL__LAYOUT__DATA_ = _yield$render2.layout;
            fileStream = _yield$render2.fileStream;
            callOnRender({
              _INTERNAL__LAYOUT__DATA_: _INTERNAL__LAYOUT__DATA_
            });
            return _context3.abrupt("return", fileStream);
          case 7:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function toBuffer() {
      return _ref3.apply(this, arguments);
    };
  }();

  /*
   * TODO: remove this method in next major release. it is buggy
   * see
   * - https://github.com/diegomura/react-pdf/issues/2112
   * - https://github.com/diegomura/react-pdf/issues/2095
   */
  var toString = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var result, _yield$render3, instance;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (process.env.NODE_ENV === 'development') {
              console.warn('`toString` is deprecated and will be removed in next major release');
            }
            result = '';
            _context4.next = 4;
            return render(false);
          case 4:
            _yield$render3 = _context4.sent;
            instance = _yield$render3.fileStream;
            return _context4.abrupt("return", new Promise(function (resolve, reject) {
              try {
                instance.on('data', function (buffer) {
                  result += buffer;
                });
                instance.on('end', function () {
                  callOnRender();
                  resolve(result);
                });
              } catch (error) {
                reject(error);
              }
            }));
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function toString() {
      return _ref4.apply(this, arguments);
    };
  }();
  var on = function on(event, listener) {
    if (!events[event]) events[event] = [];
    events[event].push(listener);
  };
  var removeListener = function removeListener(event, listener) {
    if (!events[event]) return;
    var idx = events[event].indexOf(listener);
    if (idx > -1) events[event].splice(idx, 1);
  };
  return {
    on: on,
    container: container,
    toBlob: toBlob,
    toBuffer: toBuffer,
    toString: toString,
    removeListener: removeListener,
    updateContainer: updateContainer
  };
};
var Font = fontStore;
var StyleSheet = {
  create: function create(s) {
    return s;
  }
};

/**
 * @param {React.ReactElement} element
 * @returns {Promise<NodeJS.ReadableStream>}
 */
var renderToStream = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(element) {
    var instance, stream;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          instance = pdf(element);
          _context.next = 3;
          return instance.toBuffer();
        case 3:
          stream = _context.sent;
          return _context.abrupt("return", stream);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderToStream(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @param {React.ReactElement} element
 * @param {string} filePath
 * @param {Function} [callback]
 */
var renderToFile = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(element, filePath, callback) {
    var output, stream;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return renderToStream(element);
        case 2:
          output = _context2.sent;
          stream = fs.createWriteStream(filePath);
          output.pipe(stream);
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            stream.on('finish', function () {
              if (callback) callback(output, filePath);
              resolve(output);
            });
            stream.on('error', reject);
          }));
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function renderToFile(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @param {React.ReactElement} element
 * @returns {Promise<Buffer>}
 */
var renderToBuffer = function renderToBuffer(element) {
  return renderToStream(element).then(function (stream) {
    return new Promise(function (resolve, reject) {
      var chunks = [];
      stream.on('data', function (chunk) {
        return chunks.push(chunk);
      });
      stream.on('end', function () {
        return resolve(Buffer.concat(chunks));
      });
      stream.on('error', function (error) {
        return reject(error);
      });
    });
  });
};
var renderToString = function renderToString(element) {
  if (process.env.NODE_ENV === 'development') {
    console.warn('`renderToString` is deprecated and will be removed in next major release, use `renderToBuffer` instead');
  }
  return renderToBuffer(element).then(function (buffer) {
    return buffer.toString();
  });
};

var throwEnvironmentError = function throwEnvironmentError(name) {
  throw new Error(name + " is a web specific API. You're either using this component on Node, or your bundler is not loading react-pdf from the appropriate web build.");
};
var usePDF = function usePDF() {
  throwEnvironmentError('usePDF');
};
var PDFViewer = function PDFViewer() {
  throwEnvironmentError('PDFViewer');
};
var PDFDownloadLink = function PDFDownloadLink() {
  throwEnvironmentError('PDFDownloadLink');
};
var BlobProvider = function BlobProvider() {
  throwEnvironmentError('BlobProvider');
};
var render = renderToFile;

// TODO: remove this default export in next major release because it breaks tree-shacking
var index = _extends({
  pdf: pdf,
  Font: Font,
  version: version,
  StyleSheet: StyleSheet,
  usePDF: usePDF,
  PDFViewer: PDFViewer,
  BlobProvider: BlobProvider,
  PDFDownloadLink: PDFDownloadLink,
  renderToStream: renderToStream,
  renderToString: renderToString,
  renderToFile: renderToFile,
  render: render
}, primitives);

export { BlobProvider, Font, PDFDownloadLink, PDFViewer, StyleSheet, createRenderer, index as default, pdf, render, renderToBuffer, renderToFile, renderToStream, renderToString, usePDF, version };
//# sourceMappingURL=react-pdf.js.map
