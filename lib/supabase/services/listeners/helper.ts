import { EMPTY_STR, UNKNOWN, HYPHENS, ZERO } from "@/constants";
//
import { BaseHelper } from "../base/helper";
import { ListenerEntity } from "./types";

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

  get device() {
    return this.c?.screen?.device || HYPHENS;
  }

  get location() {
    const city = this.c?.geolocation?.city || UNKNOWN;
    const region = this.c?.geolocation?.region || UNKNOWN;
    const country =
      this.c?.geolocation?.country_name ||
      this.c?.geolocation?.country ||
      UNKNOWN;

    return `${city}, ${region}, ${country}`;
  }

  get geolocation() {
    const latitude = this.c?.geolocation?.latitude || ZERO;
    const longitude = this.c?.geolocation?.longitude || ZERO;

    return `Lat: ${latitude} Lng: ${longitude}`;
  }
}
