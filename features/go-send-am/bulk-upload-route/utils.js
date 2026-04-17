import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { BulkUploadPage } from "../pages/BulkUploadPage";

/**
# COMMIT MESSAGE: Protected the enterprise routes
- Implemented roleGuard function on the beforeLoad prop - line15
- Extended roleGuard function to accept multiple roles as params - line 18
*/

export const bulkUploadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bulk-upload",
  component: BulkUploadPage,
  beforeLoad: roleGuard(["admin"]),
});

function roleGuard(allowedRoles = []) {
  return () => {
    const roleFound = allowedRoles.includes(window?.APP?.user?.role || "");
    if (!roleFound) {
      throw redirect({ to: "/unauthorized" });
    }
    return true;
  };
}
