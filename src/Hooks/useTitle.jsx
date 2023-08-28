import { useEffect } from "react"

/**
 * Set title in page
 * @param {String} headerTitle text for page title
 * @returns Set title
 */
export const useTitle = (headerTitle = String) => {
  useEffect(() => {
    document.title = `${headerTitle} | Product-Project`;
  }, [headerTitle]);
}
