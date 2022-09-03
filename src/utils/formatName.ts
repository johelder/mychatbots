const REGEX_TO_REMOVE_BLANK_SPACING = /\s/;

export const formatName = (name: string) => {
  return name.replace(REGEX_TO_REMOVE_BLANK_SPACING, '_').toLowerCase();
};
