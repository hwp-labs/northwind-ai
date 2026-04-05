interface IBaseEntity {
  id: number; // for public iteration
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

enum CaseStatus {
  OPEN = "open",
  CLOSED = "closed",
  SUSPENDED = "suspended",
}

type CaseSearchBy = Pick<
  ICase,
  "headline" | "plaintiff" | "defendant" | "location" | "stateId"
>;
type CaseSortBy = Pick<
  ICase,
  "id" | "plaintiff" | "defendant" | "stateId" | "happenedAt"
>;
type CaseFilterBy = Pick<ICase, "stateId" | "status">;

interface ICase extends IBaseEntity {
  ref: string; //20260404122000
  thumbnail?: string;
  headline: string;
  plaintiff: string;
  defendant: string;
  location: string;
  stateId: number;
  urls: IUrl;
  attachments: IAttachment[] | null;
  status: CaseStatus;
  happenedAt: string;
}

interface ICaseUpdate extends IBaseEntity {
  caseId: number;
  comment: string;
  urls: IUrl;
  happenedAt: string;
}

interface ICaseImpression extends IBaseEntity {
  caseId: number;
  views: number;
  likes: number;
}

interface IAttachment {
  id: number;
  label: string;
  value: string; // filename, blob
}

interface IUrl {
  facebookUrl: string | null;
  instagramUrl: string | null;
  youtubeUrl: string | null;
  tiktokUrl: string | null;
}