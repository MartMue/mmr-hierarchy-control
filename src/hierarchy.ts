const relations = [
  {
    key: "P2000",
    parent: null
  },
  {
    key: "1",
    parent: "P2000"
  },
  {
    key: "2",
    parent: "P2000"
  },
  {
    key: "3",
    parent: "P2000"
  },
  {
    key: "4",
    parent: "abc"
  },
  {
    key: "2.1",
    parent: "2"
  },
  {
    key: "1.1",
    parent: "1"
  },
  {
    key: "1.1.1",
    parent: "1.1"
  },
  {
    key: "1.1.2",
    parent: "1.1"
  }
];

export const getHierarchy = (key, result, indent) => {
  const children = relations.filter(i => i.parent === key);
  if (children.length === 0) return result;
  for (let index = 0; index < children.length; index++) {
    const newIndent = [...indent];
    const child = children[index];
    const childResult = {
      key: child.key,
      hierarchy: [...indent],
      text: child.key
    };
    if (index + 1 === children.length) {
      childResult.hierarchy.push("corner");
      newIndent.push("");
    } else {
      childResult.hierarchy.push("full");
      newIndent.push("next");
    }
    const childChildren = relations.filter(i => i.parent === child.key);
    if (childChildren.length === 0) {
      childResult.hierarchy.push("node-end");
    } else {
      childResult.hierarchy.push("node");
    }

    result.push(childResult);
    getHierarchy(child.key, result, newIndent);
  }
  return result;
};
