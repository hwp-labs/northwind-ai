import { useState, useEffect } from "react";
import * as Location from "expo-location";

/**
# COMMIT MESSAGE: Fixed the rider location hook
- Extracted startLocationWatcher logic to separate function - line 18, 53
- Added subscription clean up function to the useEffect - line 36
*/

export function useRiderLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    let subscription = null;

    startLocationWatcher(mounted).then((sub) => {
      if (!mounted) {
        if (sub) {
          if (typeof sub.remove === "function") {
            try {
              sub.remove();
            } catch (_) {}
          } else if (typeof sub.unsubscribe === "function") {
            try {
              sub.unsubscribe();
            } catch (_) {}
          }
        }
        return;
      }
      subscription = sub;
    });

    return () => {
      mounted = false;
      if (subscription) {
        if (typeof subscription.remove === "function") {
          try {
            subscription.remove();
          } catch (_) {}
        } else if (typeof subscription.unsubscribe === "function") {
          try {
            subscription.unsubscribe();
          } catch (_) {}
        }
        subscription = null;
      }
    };
  }, []);

  function startLocationWatcher(mounted) {
    return Location.requestForegroundPermissionsAsync()
      .then(({ status }) => {
        if (!mounted) return null;
        if (status !== "granted") {
          setError("Permission denied");
          return null;
        }

        return Location.watchPositionAsync(
          { accuracy: Location.Accuracy.High, timeInterval: 5000 },
          (loc) => {
            if (!mounted) return;
            setLocation(loc.coords);
          },
        );
      })
      .catch((err) => {
        if (mounted) setError(err?.message || "Failed to start location watch");
        return null;
      });
  }

  return { location, error };
}
