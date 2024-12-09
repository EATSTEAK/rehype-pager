import type { Plugin } from "unified";
import type { Element, Root } from "hast";

const createPagerSection = (children: Element[] = []): Element => {
  return {
    type: "element",
    tagName: "section",
    properties: {
      className: ["page"],
    },
    children,
  };
};

const pager: Plugin<[], Root> = () => {
  return (tree: Root) => {
    let pagedChildren = tree.children.reduce<Element[]>(
      (res, val) => {
        if (val.type === "element" && val.tagName === "hr")
          return [...res, createPagerSection()];
        if (val.type !== "doctype") res[res.length - 1].children.push(val);
        return res;
      },
      [createPagerSection()],
    );
  };
};

export default pager;
