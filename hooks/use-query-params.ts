import {
  useRouter,
  useSearchParams,
  usePathname,
  useParams,
} from "next/navigation";

type Query = Record<string, unknown>;
type QueryOptions = {
  replace?: boolean;
  scroll?: boolean;
};

export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const id = Number(params.id || 1);
  const uuid = params.id ? String(params.id) : undefined;
  const slug = (params.slug as string[]) ?? [];
  const urlSearchParams = new URLSearchParams(searchParams.toString());

  const getSlug = (i: number, defaultValue: unknown) =>
    slug[i] || String(defaultValue);

  const getSlugId = (i = 0, defaultValue = 1) =>
    Number(slug[i] || defaultValue);

  const get = (query: Query) => {
    const obj: Record<string, string> = {};

    Object.entries(query).forEach(([key, defaultValue]) => {
      obj[key] = searchParams.get(key) || String(defaultValue);
    });

    return obj;
  };

  const add = (query: Query, options?: QueryOptions) => {
    Object.entries(query).forEach(([key, value]) =>
      urlSearchParams.set(key, String(value)),
    );

    const href = `${pathname}?${urlSearchParams.toString()}`;
    const { scroll = true, replace = false } = options || {};
    replace ? router.replace(href, { scroll }) : router.push(href, { scroll });
  };

  const remove = (query: string | string[], options?: QueryOptions) => {
    if (Array.isArray(query)) {
      query.forEach((key) => urlSearchParams.delete(key));
    } else {
      urlSearchParams.delete(query);
    }

    const href = `${pathname}?${urlSearchParams.toString()}`;
    const { scroll = true, replace = false } = options || {};
    replace ? router.replace(href, { scroll }) : router.push(href, { scroll });
  };

  return {
    router,
    pathname,
    id,
    uuid,
    slug,
    getSlug,
    getSlugId,
    get,
    add,
    remove,
  };
}
