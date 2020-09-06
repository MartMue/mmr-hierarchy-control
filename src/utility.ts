import faker from "faker";

export const getProfiles = (length: number) => {
  const result = [];
  for (let index = 0; index < length; index++) {
    const fullname = faker.fake("{{name.firstName}} {{name.lastName}}");
    const image = faker.image.avatar();
    const id = faker.random.uuid();
    result.push({ label: fullname, url: image, key: id });
  }
  return result;
};

export const getSelectedIds = array => {
  return array.filter(item => faker.random.boolean()).map(item => item.key);
};

export const createWBS = () => {
  return [
    {
      id: 0,
      parentId: null,
      label: "Neubau"
    },
    {
      id: 1,
      parentId: 0,
      label: "LP 1"
    },
    {
      id: 2,
      parentId: 0,
      label: "LP 2"
    },
    {
      id: 3,
      parentId: 0,
      label: "LP 3"
    },
    {
      id: 4,
      parentId: 0,
      label: "LP 4"
    },
    {
      id: 5,
      parentId: 0,
      label: "LP 5"
    },
    {
      id: 6,
      parentId: 0,
      label: "LP 6"
    },
    {
      id: 10,
      parentId: 1,
      label: "Arbeitspaket 1"
    },
    {
      id: 11,
      parentId: 1,
      label: "Arbeitspaket 2"
    },
    {
      id: 12,
      parentId: 2,
      label: "Arbeitspaket 3"
    },
    {
      id: 13,
      parentId: 3,
      label: "Arbeitspaket 4"
    },
    {
      id: 14,
      parentId: 3,
      label: "Arbeitspaket 5"
    },
    {
      id: 15,
      parentId: 3,
      label: "Arbeitspaket 6"
    }
  ];
};
