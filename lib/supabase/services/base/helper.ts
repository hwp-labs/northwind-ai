/**
# This is a Presenter/viewModel design pattern class

## Ruleset
- Use type `T` to avoid rewriting the model interface (BaseEntity)
- Use private property `p` to avoid rewriting the model name (base)
- Accept model as `unknown` and then type-cast to avoid model DTO conflicts
- Create explicit setClassName method immediately after constructor for memoized usage within a loop ~ setBase()
- Additionally, in derived classes, call this.setBase(instanceName) in their respective setClassName method
- Create setter methods for transformed field values ONLY ~ get createdAt()
- Create PascalCase methods for transformed and computed non-field values ~ get IsDeleted()`
- All getter and computed methods should return appropriate fallback values ~ EMPTY_STR, HYPHENS
- Derived helpers should also extend BaseHelper where applicable, with super(), setBase()
*/

import { momentUtil } from "@/utils/moment-util";
import { CUR_DATE, HYPHENS } from "@/constants";
//
import { BaseEntity } from "./types";

type T = BaseEntity;

export class BaseHelper {
  private p?: T;

  constructor(base?: unknown) {
    if (base) this.p = base as T;
  }

  setBase(base: unknown) {
    this.p = base as T;
  }
  // ////////////////////////////////////////////////////////////////////////

  get createdAt() {
    return this.p?.created_at ? momentUtil.verbose(this.p.created_at) : HYPHENS;
  }

  get updatedAt() {
    return this.p?.updated_at ? momentUtil.verbose(this.p.updated_at) : HYPHENS;
  }

  get deletedAt() {
    return this.p?.deleted_at ? momentUtil.verbose(this.p.deleted_at) : HYPHENS;
  }
  // ////////////////////////////////////////////////////////////////////////

  IsCreatedToday = () =>
    this.p?.created_at && this.p.created_at.slice(0, 10) === CUR_DATE
      ? true
      : false;

  IsUpdatedToday = () =>
    this.p?.updated_at && this.p.updated_at.slice(0, 10) === CUR_DATE
      ? true
      : false;

  IsDeleted = () => (this.p?.deleted_at ? true : false);
}
