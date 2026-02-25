"use client";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/shadcn/ui/avatar";
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { Skeleton } from "@/components/shadcn/ui/skeleton";
import { useAuthGuard } from "@/hooks/use-auth-guard";
//
import { Nav } from "./nav";

export const Header = () => {
  const { user, fetching, loading, auth, ready, handleSignIn, handleSignOut } =
    useAuthGuard();
  //
  return (
    <section className="flex-row-cb gap-4 p-6">
      {fetching ? (
        <Skeleton className="size-[32px] rounded-full bg-white/20" />
      ) : (
        <figure className="flex-row-cs gap-3">
          <Avatar className="size-[32px]">
            <AvatarImage
              src={auth ? "/images/photo-etugbeh" : undefined}
              alt=""
            />
            <AvatarFallback className="text-xs">
              {auth ? "ET" : "UN"}
            </AvatarFallback>
          </Avatar>
          {user?.email ? (
            <figcaption className="text-sm">{user.email}</figcaption>
          ) : null}
        </figure>
      )}
      <Nav />
      <div className="flex-row-ce gap-4">
        {auth ? (
          <Button
            variant="destructive"
            size="sm"
            onClick={handleSignOut}
            disabled={loading}
            className=""
          >
            {loading && <Spinner />}
            Sign out
          </Button>
        ) : (
          <Button
            variant="secondary"
            size="sm"
            onClick={handleSignIn}
            disabled={fetching}
            className=""
          >
            Sign in
          </Button>
        )}
      </div>
    </section>
  );
};
