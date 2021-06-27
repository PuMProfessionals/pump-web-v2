/*
 * Media util to help with media queries and save lines
   @param {string, number} breakpoint - string for themes, numbere for px for breakpoint
   @param {string} styles - css styles wanted to add
 */
export const media =
  (breakpoint, styles) =>
  ({ theme }) =>
    `
     @media (max-width: ${theme.media[breakpoint] || breakpoint}px) {
             ${styles}
 }`;
