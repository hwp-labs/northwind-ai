import { EMPTY_STR, UNKNOWN, HYPHENS, ZERO } from "@/constants";
//
import { BaseHelper } from "../base/helper";
import { ListenerEntity } from "./types";
import { transformEpisode } from "@/lib/podcast/episodes/utils";

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
    return transformEpisode(this.c?.podcast_id);
  }
}
