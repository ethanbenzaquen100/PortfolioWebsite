/* This component scrolls to the top of the website */

//Grabbing the react components
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Running the action to bring the user to the top of the page
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  });

  return null; // This component doesn't render anything
}
