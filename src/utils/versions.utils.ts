export const getVersionFromTag = (tag: string) =>
  // @ts-ignore
  tag.match(/\d{1,2}.\d{1,2}.\d{1,2}/g)[0];

export const getVersionsArray = (version: string) =>
  version.split('.').map((item: string) => Number(item));

export const getNewTag = (
  tag: string,
  oldVersion: string,
  newVersion: string,
) => tag.replace(oldVersion, newVersion);

export const upMajorVersion = (tag: string) => {
  const oldVersion = getVersionFromTag(tag);
  const version = getVersionsArray(oldVersion);
  const newVersion = `${version[0]}.${version[1] + 1}.0`;

  return getNewTag(tag, oldVersion, newVersion);
};

export const getUpMinorVersion = (tag: string) => {
  const oldVersion = getVersionFromTag(tag);
  const version = getVersionsArray(oldVersion);
  const newVersion = `${version[0]}.${version[1]}.${version[2] + 1}`;

  return getNewTag(tag, oldVersion, newVersion);
};

export const getTagFromDescription = (desc: string) => {
  const search = desc.match(/elk\S+(\d)/gm);

  return search !== null ? String(search) : null;
};
