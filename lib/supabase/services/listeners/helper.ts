import { EMPTY_STR, UNKNOWN, HYPHENS, ZERO } from "@/constants";
//
import { BaseHelper } from "../base/helper";
import { ListenerEntity } from "./types";
import { EpisodeHelper } from "../podcasts/helper";

type T = ListenerEntity;

export class ListenerHelper extends BaseHelper {
  private c?: T;

  constructor(visitor?: unknown) {
    super(visitor);
    if (visitor) this.c = visitor as T;
  }

  setListener(visitor: unknown) {
    this.setBase(visitor);
    this.c = visitor as T;
  }
  // ////////////////////////////////////////////////////////////////////////

  get podcast() {
    return EpisodeHelper.GetPageItem(this.c?.podcast_id);
  }
}
