import { useRef } from "react";

const useFullScreen = () => {
  const elementRef = useRef();

  const openFullScreen = () => {
    if (elementRef.current.requestFullscreen) {
      elementRef.current.requestFullscreen();
    } else if (elementRef.current.webkitRequestFullscreen) {
      /* Safari */
      elementRef.current.webkitRequestFullscreen();
    } else if (elementRef.current.msRequestFullscreen) {
      /* IE11 */
      elementRef.current.msRequestFullscreen();
    }
  };

  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  }

  return [elementRef, openFullScreen, closeFullscreen];
};

export default useFullScreen;
