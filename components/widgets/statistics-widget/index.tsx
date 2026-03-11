import { FaUserSecret, FaUserTag, FaBusinessTime } from "react-icons/fa6";
import { getStatisticsAction } from "@/lib/supabase/services/analytics/actions/getStatisticsAction";
import { Item } from "./item";
import clsx from "clsx";

export const StatisticsWidget = async () => {
  const { data } = await getStatisticsAction();
  const transformedData = [
    {
      key: "visitors",
      icon: <FaUserSecret size={24} />,
      label: "Unique Visitors",
      value: data?.totalVisitors || 0,
    },
    {
      key: "users",
      icon: <FaUserTag size={24} />,
      label: "Daily Active Users",
      value: (data?.averageVisitorsPerDay || 0) + 5,
    },
    {
      key: "contacts",
      icon: <FaBusinessTime size={24} />,
      label: "Demo Requests",
      value: data?.totalContacts || 0,
    },
  ];
  //
  return (
    <section className="pt-16 sm:pt-0">
      <div
        className={clsx(
          "flex-row-cc py-12 lg:py-8",
          "from-contrast bg-gradient-to-l to-purple-800",
        )}
      >
        <ul className="debug_ gap-16 flex-row-cc text-white flex-wrap">
          {transformedData.map(({ key, ...item }) => (
            <Item key={key} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
