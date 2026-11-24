/**
 * Google mixes the original comment with its translation, in either order:
 * "texte\n\n(Translated by Google)\ntext" or
 * "(Translated by Google) text\n\n(Original)\ntexte". Keeps the original only.
 */
export const cleanComment = (comment?: string): string => {
  const text = comment ?? "";
  const original = text.split(/\(Original\)\s*/)[1];
  return (original ?? text.split(/\s*\(Translated by Google\)/)[0]).trim();
};
