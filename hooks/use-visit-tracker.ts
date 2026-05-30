import { useEffect, useState } from "react";
//
import { DeviceDetails, useDeviceDetails } from "./use-device-details";
import { getVisitorByIpAddressPathnameTodayAction } from "@/lib/supabase/services/visitors/actions/getVisitorByIpAddressPathnameTodayAction";
import { createVisitorAction } from "@/lib/supabase/services/visitors/actions/createVisitorAction";
import { updateVisitorAction } from "@/lib/supabase/services/visitors/actions/updateVisitorAction";

export function useVisitTracker() {
  const deviceDetails = useDeviceDetails();
  const [error, setError] = useState<string | undefined>();
  const [fetching, setFetching] = useState(false);
  const [creating, setCreating] = useState(false);
  const [updating, setUpdating] = useState(false);

  const onload = async (data: DeviceDetails) => {
    const { ip_address, pathname, platform, user_agent, screen, geolocation } =
      data as Required<DeviceDetails>;

    setFetching(true);
    const { data: visitor, error } =
      await getVisitorByIpAddressPathnameTodayAction({
        ip_address,
        pathname,
      });

    if (error) {
      setError(`GetVisitorByIpAddressPathnameTodayActionError: ${error}`);
      setFetching(false);
      return;
    }

    setFetching(false);

    if (visitor) {
      setUpdating(true);
      const { error } = await updateVisitorAction({
        id: visitor.id,
        body: {
          visits: visitor.visits + 1,
          platform,
          user_agent,
          screen,
          geolocation,
        },
      });

      if (error) setError(`UpdateVisitorActionError: ${error}`);
      setUpdating(false);
    } else {
      setCreating(true);
      const { error } = await createVisitorAction({
        ip_address,
        pathname,
        platform,
        user_agent,
        screen,
        geolocation,
      });

      if (error) setError(`CreateVisitorActionError: ${error}`);
      setCreating(false);
    }
  };

  useEffect(() => {
    if (deviceDetails?.data) {
      // console.log("🚀 ~ useVisitTracker ~ deviceDetails:", deviceDetails);
      onload(deviceDetails.data);
    }
  }, [deviceDetails?.data]);

  return {
    deviceDetails,
    error,
    fetching,
    creating,
    updating,
  };
}
