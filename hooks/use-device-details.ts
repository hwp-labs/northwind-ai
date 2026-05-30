import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
//
import { BaseEntity } from "@/lib/supabase/services/base/types";
import {
  DeviceEnum,
  VisitorEntity,
} from "@/lib/supabase/services/visitors/types";
import { IpApiResponse } from "@/lib/ip-api/interface";
import { MOCK } from "@/constants/MOCK";

export type DeviceDetails = Omit<
  VisitorEntity,
  keyof BaseEntity | "visited_on" | "visits"
>;

export function useDeviceDetails() {
  const pathname = usePathname();
  const [fetching, setFetching] = useState<boolean>(false);
  const [data, setData] = useState<DeviceDetails>();
  const [error, setError] = useState<string | undefined>();

  const onload = () => {
    const { platform, userAgent: user_agent } = navigator;
    const { width, height } = window.screen;
    const device =
      width < 768
        ? DeviceEnum.MOBILE
        : width >= 768 && width < 1024
          ? DeviceEnum.TABLET
          : DeviceEnum.DESKTOP;

    setFetching(true);
    fetch("https://ipapi.co/json/")
      .then((raw) => raw.json())
      .then((res: IpApiResponse) => {
        const data = {
          pathname,
          platform,
          user_agent,
          screen: { width, height, device },
          ip_address: res.ip,
          geolocation: res,
        };

        const [lat, lng] = [
          Number(process.env.NEXT_PUBLIC_BLACKLIST_LATITUDE || 0),
          Number(process.env.NEXT_PUBLIC_BLACKLIST_LONGITUDE || 0),
        ];

        if (res.latitude !== lat && res.longitude !== lng) {
          // console.log("🚀 ~ onload ~ data:", data);
          setData(data);
        }
      })
      .catch((err) => {
        setError(`IpWhoIsError: ${err}`);
      })
      .finally(() => {
        setFetching(false);
      });
  };

  useEffect(() => {
    if (MOCK.useDeviceDetails.skip) return;

    onload();
  }, [pathname]);

  return {
    fetching,
    data,
    error,
  };
}
