import { r as reactExports, j as jsxRuntimeExports, u as useNavigate, a as useSearch, S as Skeleton, L as Link, C as Car } from "./index-BgsP59Y_.js";
import { M as MotionConfigContext, i as isHTMLElement, u as useConstant, P as PresenceContext, a as usePresence, b as useIsomorphicLayoutEffect, L as LayoutGroupContext, c as useAllCars, d as useCarImages, C as COUNTRY_META, m as motion, g as getCountryMeta } from "./proxy-DwoXl9S2.js";
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}
class PopChildMeasure extends reactExports.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (isHTMLElement(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
      const parent = element.offsetParent;
      const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
      const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
      const computedStyle = getComputedStyle(element);
      const size = this.props.sizeRef.current;
      size.height = parseFloat(computedStyle.height);
      size.width = parseFloat(computedStyle.width);
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
      size.right = parentWidth - size.width - size.left;
      size.bottom = parentHeight - size.height - size.top;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
  var _a;
  const id = reactExports.useId();
  const ref = reactExports.useRef(null);
  const size = reactExports.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  });
  const { nonce } = reactExports.useContext(MotionConfigContext);
  const childRef = ((_a = children.props) == null ? void 0 : _a.ref) ?? (children == null ? void 0 : children.ref);
  const composedRef = useComposedRefs(ref, childRef);
  reactExports.useInsertionEffect(() => {
    const { width, height, top, left, right, bottom } = size.current;
    if (isPresent || pop === false || !ref.current || !width || !height)
      return;
    const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
    const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
    ref.current.dataset.motionPopId = id;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    const parent = root ?? document.head;
    parent.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
    }
    return () => {
      var _a2;
      (_a2 = ref.current) == null ? void 0 : _a2.removeAttribute("data-motion-pop-id");
      if (parent.contains(style)) {
        parent.removeChild(style);
      }
    };
  }, [isPresent]);
  return jsxRuntimeExports.jsx(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, pop, children: pop === false ? children : reactExports.cloneElement(children, { ref: composedRef }) });
}
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id = reactExports.useId();
  let isReusedContext = true;
  let context = reactExports.useMemo(() => {
    isReusedContext = false;
    return {
      id,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    };
  }, [isPresent, presenceChildren, onExitComplete]);
  if (presenceAffectsLayout && isReusedContext) {
    context = { ...context };
  }
  reactExports.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  reactExports.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  children = jsxRuntimeExports.jsx(PopChild, { pop: mode === "popLayout", isPresent, anchorX, anchorY, root, children });
  return jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
const getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  reactExports.Children.forEach(children, (child) => {
    if (reactExports.isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = reactExports.useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = reactExports.useRef(true);
  const pendingPresentChildren = reactExports.useRef(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const exitingComponents = reactExports.useRef(/* @__PURE__ */ new Set());
  const [diffedChildren, setDiffedChildren] = reactExports.useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = reactExports.useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
        exitingComponents.current.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  const { forceRender } = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitingComponents.current.has(key)) {
        return;
      }
      if (exitComplete.has(key)) {
        exitingComponents.current.add(key);
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender == null ? void 0 : forceRender();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && (safeToRemove == null ? void 0 : safeToRemove());
        onExitComplete && onExitComplete();
      }
    };
    return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, anchorY, children: child }, key);
  }) });
};
function CountryPlaceholder({
  car,
  countryColor
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative h-36 flex flex-col items-center justify-center gap-2 overflow-hidden px-3",
      style: { background: `${countryColor}22` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-20",
            style: {
              background: `radial-gradient(ellipse at 60% 40%, ${countryColor} 0%, transparent 70%)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Car,
          {
            size: 32,
            className: "relative z-10 opacity-60",
            style: { color: countryColor }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative z-10 text-center text-[10px] font-body leading-snug px-1 line-clamp-3 opacity-75 text-foreground", children: car.imagePrompt.split(",").slice(0, 3).join(",") })
      ]
    }
  );
}
function CarCard({
  car,
  imageUrl,
  index
}) {
  const meta = getCountryMeta(car.country);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 28, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, scale: 0.92 },
      transition: {
        delay: Math.min(index * 0.045, 0.45),
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1]
      },
      "data-ocid": `cars.item.${index + 1}`,
      className: "group",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/$carId",
          params: { carId: car.id.toString() },
          "data-ocid": `cars.card.${index + 1}`,
          className: `block bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-2 hover:scale-[1.02] border-2 border-transparent ${meta.cardClass} cursor-pointer`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `${meta.badgeClass} px-3 py-2 flex items-center gap-1.5`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: meta.emoji }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-extrabold text-xs tracking-wider uppercase", children: [
                    meta.label,
                    " Машин"
                  ] })
                ]
              }
            ),
            imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-muted/20 h-36 flex items-center justify-center overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: imageUrl,
                  alt: car.name,
                  className: "w-full h-full object-contain p-2 group-hover:scale-105 transition-smooth"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-smooth" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CountryPlaceholder, { car, countryColor: meta.bgHex }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-extrabold text-[15px] leading-tight text-foreground line-clamp-2 mb-0.5", children: car.nickname }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-[11px] text-muted-foreground line-clamp-1 italic", children: [
                "“",
                car.name,
                "”"
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function HomePage() {
  const navigate = useNavigate({ from: "/" });
  const search = useSearch({ from: "/" });
  const activeFilter = search.country ?? "all";
  const { data: cars = [], isLoading } = useAllCars();
  const { getAllImages } = useCarImages();
  const images = getAllImages();
  const filtered = reactExports.useMemo(() => {
    if (activeFilter === "all") return cars;
    return cars.filter((c) => c.country === activeFilter);
  }, [cars, activeFilter]);
  function setFilter(f) {
    if (f === "all") {
      navigate({ search: { country: void 0 } });
    } else {
      navigate({ search: { country: f } });
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-2 mb-8",
        role: "tablist",
        "aria-label": "Улс орноор шүүх",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": activeFilter === "all",
              onClick: () => setFilter("all"),
              "data-ocid": "filter.all_tab",
              className: `px-5 py-2.5 rounded-full font-display font-extrabold text-sm transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2 ${activeFilter === "all" ? "bg-primary text-primary-foreground shadow-elevated scale-105" : "bg-muted text-muted-foreground hover:bg-primary/20 hover:scale-105"}`,
              children: "🏎️ Бүгд"
            }
          ),
          COUNTRY_META.map((cm) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": activeFilter === cm.key,
              onClick: () => setFilter(cm.key),
              "data-ocid": `filter.${cm.key.toLowerCase()}_tab`,
              className: `px-5 py-2.5 rounded-full font-display font-extrabold text-sm transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2 ${activeFilter === cm.key ? `${cm.badgeClass} shadow-elevated scale-105` : "bg-muted text-muted-foreground hover:scale-105 hover:bg-muted/80"}`,
              children: [
                cm.emoji,
                " ",
                cm.label
              ]
            },
            cm.key
          ))
        ]
      }
    ),
    !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground mb-4", children: filtered.length === 0 ? "Машин олдсонгүй" : `${filtered.length} машин олдсон` }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
        "data-ocid": "cars.loading_state",
        children: Array.from({ length: 8 }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: skeleton
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-56 rounded-3xl" }, i)
        ))
      }
    ) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "flex flex-col items-center justify-center py-24 gap-4",
        "data-ocid": "cars.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-7xl", children: "🚗" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-extrabold text-xl text-foreground", children: "Машин олдсонгүй" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: "Өөр улс сонгоно уу" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setFilter("all"),
              className: "mt-2 px-6 py-2.5 rounded-full font-display font-bold text-sm bg-primary text-primary-foreground shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-0.5",
              "data-ocid": "cars.show_all_button",
              children: "Бүгд харах"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
        children: filtered.map((car, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          CarCard,
          {
            car,
            imageUrl: images[car.id.toString()],
            index: idx
          },
          car.id.toString()
        ))
      },
      activeFilter
    ) })
  ] });
}
export {
  HomePage as default
};
