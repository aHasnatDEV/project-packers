import { useEffect } from "react"

/**
 * Set title
 */
export const useTitle = (headerTitle = String) => {
  useEffect(() => {
    document.title = `${headerTitle} | Product-Project`;
  }, [headerTitle]);
}
