import { jsx as s } from "react/jsx-runtime";
const x = ({ children: t, className: a, level: e }) => (console.log(e === 1), e === 1 ? /* @__PURE__ */ s("h1", { className: "title spec one text-blue-600 text-2xl font-light title one", children: t }) : e === 2 ? /* @__PURE__ */ s("h2", { className: "text-slate-700 text-xl font-base", children: t }) : e === 3 ? /* @__PURE__ */ s("h3", { className: "text-slate-800 text-lg font-bold", children: t }) : e === 4 ? /* @__PURE__ */ s("h4", { className: "text-slate-900 text-md font-base", children: t }) : /* @__PURE__ */ s("h5", { className: "test-red-500 " + a, children: t }));
export {
  x as Title
};
