export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: any;
};

export type AccountVerificationInput = {
    confirmationToken: Scalars["String"];
};

export type AccountVerificationOutput = {
    __typename?: "AccountVerificationOutput";
    success: Scalars["Boolean"];
};

export type ApparatusDto = {
    __typename?: "ApparatusDto";
    id: Scalars["ID"];
    name: Scalars["String"];
    gender: Gender;
    events?: Maybe<Array<EventDto>>;
    finalStartingLists?: Maybe<Array<FinalStartingListDto>>;
    amountOfLineJuries: Scalars["Int"];
    amountOfTimeJuries: Scalars["Int"];
    artisticGymnastics: Scalars["Boolean"];
};

export type ApparatusDtoFinalStartingListsArgs = {
    filter: FinalStartingListFilter;
};

export type ApparatusInput = {
    name: Scalars["String"];
    gender: Gender;
};

export type ApparatusJuryRoleDto = {
    __typename?: "ApparatusJuryRoleDto";
    apparatusId: Scalars["String"];
    apparatusName: Scalars["String"];
    juryRoles: Array<JuryRoleDto>;
};

export enum ArtisticGymnasticsBranch {
    Wag = "WAG",
    Mag = "MAG",
}

export type AssistantJuryDto = {
    __typename?: "AssistantJuryDto";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    judge?: Maybe<JudgeDto>;
    apparatus?: Maybe<ApparatusDto>;
    event?: Maybe<EventDto>;
    online: Scalars["Boolean"];
    juryRole: JuryAssistantRole;
};

export type AssistantJuryStatsDto = {
    __typename?: "AssistantJuryStatsDto";
    unassignedJudges: AssistantJuryStatsPairDto;
    neededJudges: AssistantJuryStatsPairDto;
    allExecutionJudgesAssigned: Scalars["Boolean"];
    minimumNumberOfJudgesAvailable: Scalars["Boolean"];
};

export type AssistantJuryStatsPairDto = {
    __typename?: "AssistantJuryStatsPairDto";
    mag?: Maybe<Scalars["Int"]>;
    wag?: Maybe<Scalars["Int"]>;
};

export type AutoLoginTokenDto = {
    __typename?: "AutoLoginTokenDto";
    autoLoginToken: Scalars["String"];
};

export type AutoLoginTokenInput = {
    autoLoginToken: Scalars["String"];
};

export type ChatRoomDto = {
    __typename?: "ChatRoomDto";
    room: Scalars["String"];
    token: Scalars["String"];
    uid: Scalars["String"];
};

export enum Country {
    MyCountry = "MyCountry",
    Af = "AF",
    Ax = "AX",
    Al = "AL",
    Dz = "DZ",
    As = "AS",
    Ad = "AD",
    Ao = "AO",
    Ai = "AI",
    Aq = "AQ",
    Ag = "AG",
    Ar = "AR",
    Am = "AM",
    Aw = "AW",
    Au = "AU",
    At = "AT",
    Az = "AZ",
    Bs = "BS",
    Bh = "BH",
    Bd = "BD",
    Bb = "BB",
    By = "BY",
    Be = "BE",
    Bz = "BZ",
    Bj = "BJ",
    Bm = "BM",
    Bt = "BT",
    Bo = "BO",
    Bq = "BQ",
    Ba = "BA",
    Bw = "BW",
    Bv = "BV",
    Br = "BR",
    Io = "IO",
    Bn = "BN",
    Bg = "BG",
    Bf = "BF",
    Bi = "BI",
    Kh = "KH",
    Cm = "CM",
    Ca = "CA",
    Cv = "CV",
    Ky = "KY",
    Cf = "CF",
    Td = "TD",
    Cl = "CL",
    Cn = "CN",
    Cx = "CX",
    Cc = "CC",
    Co = "CO",
    Km = "KM",
    Cg = "CG",
    Cd = "CD",
    Ck = "CK",
    Cr = "CR",
    Ci = "CI",
    Hr = "HR",
    Cu = "CU",
    Cw = "CW",
    Cy = "CY",
    Cz = "CZ",
    Dk = "DK",
    Dj = "DJ",
    Dm = "DM",
    Do = "DO",
    Ec = "EC",
    Eg = "EG",
    Sv = "SV",
    Gq = "GQ",
    Er = "ER",
    Ee = "EE",
    Et = "ET",
    Fk = "FK",
    Fo = "FO",
    Fj = "FJ",
    Fi = "FI",
    Fr = "FR",
    Gf = "GF",
    Pf = "PF",
    Tf = "TF",
    Ga = "GA",
    Gm = "GM",
    Ge = "GE",
    De = "DE",
    Gh = "GH",
    Gi = "GI",
    Gr = "GR",
    Gl = "GL",
    Gd = "GD",
    Gp = "GP",
    Gu = "GU",
    Gt = "GT",
    Gg = "GG",
    Gn = "GN",
    Gw = "GW",
    Gy = "GY",
    Ht = "HT",
    Hm = "HM",
    Va = "VA",
    Hn = "HN",
    Hk = "HK",
    Hu = "HU",
    Is = "IS",
    In = "IN",
    Id = "ID",
    Ir = "IR",
    Iq = "IQ",
    Ie = "IE",
    Im = "IM",
    Il = "IL",
    It = "IT",
    Jm = "JM",
    Jp = "JP",
    Je = "JE",
    Jo = "JO",
    Kz = "KZ",
    Ke = "KE",
    Ki = "KI",
    Kr = "KR",
    Kp = "KP",
    Kw = "KW",
    Kg = "KG",
    La = "LA",
    Lv = "LV",
    Lb = "LB",
    Ls = "LS",
    Lr = "LR",
    Ly = "LY",
    Li = "LI",
    Lt = "LT",
    Lu = "LU",
    Mo = "MO",
    Mk = "MK",
    Mg = "MG",
    Mw = "MW",
    My = "MY",
    Mv = "MV",
    Ml = "ML",
    Mt = "MT",
    Mh = "MH",
    Mq = "MQ",
    Mr = "MR",
    Mu = "MU",
    Yt = "YT",
    Mx = "MX",
    Fm = "FM",
    Md = "MD",
    Mc = "MC",
    Mn = "MN",
    Me = "ME",
    Ms = "MS",
    Ma = "MA",
    Mz = "MZ",
    Mm = "MM",
    Na = "NA",
    Nr = "NR",
    Np = "NP",
    Nl = "NL",
    Nc = "NC",
    Nz = "NZ",
    Ni = "NI",
    Ne = "NE",
    Ng = "NG",
    Nu = "NU",
    Nf = "NF",
    Mp = "MP",
    No = "NO",
    Om = "OM",
    Pk = "PK",
    Pw = "PW",
    Ps = "PS",
    Pa = "PA",
    Pg = "PG",
    Py = "PY",
    Pe = "PE",
    Ph = "PH",
    Pn = "PN",
    Pl = "PL",
    Pt = "PT",
    Pr = "PR",
    Qa = "QA",
    Re = "RE",
    Ro = "RO",
    Ru = "RU",
    Rw = "RW",
    Bl = "BL",
    Sh = "SH",
    Kn = "KN",
    Lc = "LC",
    Mf = "MF",
    Pm = "PM",
    Vc = "VC",
    Ws = "WS",
    Sm = "SM",
    St = "ST",
    Sa = "SA",
    Sn = "SN",
    Rs = "RS",
    Sc = "SC",
    Sl = "SL",
    Sg = "SG",
    Sk = "SK",
    Si = "SI",
    Sb = "SB",
    So = "SO",
    Za = "ZA",
    Gs = "GS",
    Es = "ES",
    Lk = "LK",
    Sd = "SD",
    Ss = "SS",
    Sr = "SR",
    Sj = "SJ",
    Sz = "SZ",
    Se = "SE",
    Ch = "CH",
    Sx = "SX",
    Sy = "SY",
    Tw = "TW",
    Tj = "TJ",
    Tz = "TZ",
    Th = "TH",
    Tl = "TL",
    Tg = "TG",
    Tk = "TK",
    To = "TO",
    Tt = "TT",
    Tn = "TN",
    Tr = "TR",
    Tm = "TM",
    Tc = "TC",
    Tv = "TV",
    Ug = "UG",
    Ua = "UA",
    Ae = "AE",
    Gb = "GB",
    Us = "US",
    Um = "UM",
    Uy = "UY",
    Uz = "UZ",
    Vu = "VU",
    Ve = "VE",
    Vn = "VN",
    Vg = "VG",
    Vi = "VI",
    Wf = "WF",
    Eh = "EH",
    Ye = "YE",
    Zm = "ZM",
    Zw = "ZW",
}

export type DifficultyJuryCreateInput = {
    apparatus: Scalars["String"];
    event: Scalars["String"];
    juryRole: JuryDifficultyRole;
    judge: Scalars["String"];
};

export type DifficultyJuryDto = {
    __typename?: "DifficultyJuryDto";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    judge?: Maybe<JudgeDto>;
    apparatus?: Maybe<ApparatusDto>;
    event?: Maybe<EventDto>;
    online: Scalars["Boolean"];
    juryRole: JuryDifficultyRole;
};

export type DifficultyJuryUpdateInput = {
    apparatus: Scalars["String"];
    event: Scalars["String"];
    juryRole: JuryDifficultyRole;
};

export type DifficultyScoreDto = {
    __typename?: "DifficultyScoreDto";
    id: Scalars["ID"];
    difficultyScore: Scalars["Float"];
    neutralDeduction: Scalars["Float"];
    difficultyNeutralDeduction: Scalars["Float"];
    judge: JudgeDto;
    score: ScoreDto;
    inquiry?: Maybe<InquiryDto>;
};

export type DifficultyScoreInput = {
    difficultyScore: Scalars["Float"];
    neutralDeduction: Scalars["Float"];
    slot: Scalars["String"];
};

export type DifficultyScoreUpdateInput = {
    id: Scalars["ID"];
    slot: Scalars["String"];
    difficultyScore?: Maybe<Scalars["Float"]>;
    neutralDeduction?: Maybe<Scalars["Float"]>;
};

export type DraftStartingList = {
    __typename?: "DraftStartingList";
    apparatuses: Array<DraftStartingListApparatus>;
};

export type DraftStartingListApparatus = {
    __typename?: "DraftStartingListApparatus";
    id: Scalars["ID"];
    lots: Array<DraftStartingListLot>;
    participantsPerLeagues: Array<LeagueParticipants>;
};

export type DraftStartingListGymnastApplication = {
    __typename?: "DraftStartingListGymnastApplication";
    id: Scalars["String"];
    gymnastId: Scalars["String"];
};

export type DraftStartingListLot = {
    __typename?: "DraftStartingListLot";
    lotNumber: Scalars["Float"];
    startingTime: Scalars["DateTime"];
    slots: Array<DraftStartingListSlot>;
    gymsOccupied: Array<Scalars["String"]>;
};

export type DraftStartingListSlot = {
    __typename?: "DraftStartingListSlot";
    gymnastApplication?: Maybe<DraftStartingListGymnastApplication>;
};

export enum EliminateSlotReason {
    DidNotFinish = "DID_NOT_FINISH",
    InappropriateContent = "INAPPROPRIATE_CONTENT",
    RecordingNotUploaded = "RECORDING_NOT_UPLOADED",
    InvalidUniqueCode = "INVALID_UNIQUE_CODE",
}

export type EventApparatusSubscriptionInput = {
    event: Scalars["String"];
    apparatus: Scalars["String"];
};

export type EventDto = {
    __typename?: "EventDto";
    id: Scalars["ID"];
    name: Scalars["String"];
    eventStartDateTime: Scalars["DateTime"];
    entryFee?: Maybe<Scalars["Float"]>;
    internalPriceFund?: Maybe<Scalars["Float"]>;
    minApplicantsPerLeague?: Maybe<Scalars["Int"]>;
    maxApplicantsPerLeague?: Maybe<Scalars["Int"]>;
    status: EventStatus;
    eventImage?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    apparatuses?: Maybe<Array<ApparatusDto>>;
    leagues?: Maybe<Array<LeagueDto>>;
    gymnastApplications?: Maybe<Array<GymnastApplicationDto>>;
    judgeApplications?: Maybe<Array<JudgeApplicationDto>>;
    difficultyJuries?: Maybe<Array<DifficultyJuryDto>>;
    executionJuries?: Maybe<Array<ExecutionJuryDto>>;
    superiorJuries?: Maybe<Array<SuperiorJuryDto>>;
    assistantJuries?: Maybe<Array<AssistantJuryDto>>;
    draftStartingList?: Maybe<DraftStartingList>;
    finalStartingLists?: Maybe<Array<FinalStartingListDto>>;
    approvedGymnastApplicationsStats?: Maybe<Array<GymnastApplicationStats>>;
};

export type EventDtoGymnastApplicationsArgs = {
    gymnastApplicationFilter: GymnastApplicationFilter;
};

export type EventFilter = {
    status?: Maybe<EventStatus>;
    startedBeforeDate?: Maybe<Scalars["String"]>;
};

export type EventInputPublished = {
    name: Scalars["String"];
    eventStartDateTime: Scalars["DateTime"];
    entryFee: Scalars["Float"];
    internalPriceFund: Scalars["Float"];
    minApplicantsPerLeague: Scalars["Int"];
    maxApplicantsPerLeague: Scalars["Int"];
    eventImage: Scalars["String"];
    description: Scalars["String"];
    apparatuses: Array<Scalars["String"]>;
    leagues: Array<Scalars["String"]>;
};

export type EventJuryDto = {
    __typename?: "EventJuryDto";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    judge?: Maybe<JudgeDto>;
    apparatus?: Maybe<ApparatusDto>;
    event?: Maybe<EventDto>;
    online: Scalars["Boolean"];
    difficultyJuryRole?: Maybe<JuryDifficultyRole>;
    executionJuryRole?: Maybe<JuryExecutionRole>;
    superiorJuryRole?: Maybe<JurySuperiorRole>;
    assistantJuryRole?: Maybe<JuryAssistantRole>;
};

export type EventJuryOnlineStatusChangedInput = {
    event: Scalars["String"];
};

export type EventJuryRolesDto = {
    __typename?: "EventJuryRolesDto";
    apparatusRoles: Array<ApparatusJuryRoleDto>;
};

export type EventPaginatedOutput = {
    __typename?: "EventPaginatedOutput";
    itemCount: Scalars["Int"];
    items: Array<EventDto>;
};

export enum EventStatus {
    Published = "PUBLISHED",
    Scheduled = "SCHEDULED",
    Started = "STARTED",
    Ended = "ENDED",
}

export type EventStatusUpdatedSubscriptionInput = {
    event: Scalars["String"];
};

export type ExecutionJuryDto = {
    __typename?: "ExecutionJuryDto";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    judge?: Maybe<JudgeDto>;
    apparatus?: Maybe<ApparatusDto>;
    event?: Maybe<EventDto>;
    online: Scalars["Boolean"];
    juryRole: JuryExecutionRole;
};

export type ExecutionJuryInput = {
    apparatus: Scalars["String"];
    event: Scalars["String"];
    juryRole: JuryExecutionRole;
    judge: Scalars["String"];
};

export type ExecutionJuryStatsDto = {
    __typename?: "ExecutionJuryStatsDto";
    unassignedJudges: ExecutionJuryStatsPairDto;
    neededJudges: ExecutionJuryStatsPairDto;
    neededJudgesForFullJury: ExecutionJuryStatsPairDto;
    allDifficultyJudgesAssigned: Scalars["Boolean"];
    minimumNumberOfJudgesAvailable: Scalars["Boolean"];
};

export type ExecutionJuryStatsPairDto = {
    __typename?: "ExecutionJuryStatsPairDto";
    mag?: Maybe<Scalars["Int"]>;
    wag?: Maybe<Scalars["Int"]>;
};

export type ExecutionScoreDto = {
    __typename?: "ExecutionScoreDto";
    id: Scalars["ID"];
    executionScore: Scalars["Float"];
    judge?: Maybe<JudgeDto>;
    score: ScoreDto;
    createdByJuror?: Maybe<JuryExecutionRole>;
};

export type ExecutionScoreInput = {
    executionScore: Scalars["Float"];
    artistryScore?: Maybe<Scalars["Float"]>;
    slot: Scalars["String"];
    createdByJuror?: Maybe<JuryExecutionRole>;
};

export type ExecutionScoreUpdateInput = {
    id: Scalars["ID"];
    slot: Scalars["String"];
    executionScore: Scalars["Float"];
};

export type FinalStartingListDto = {
    __typename?: "FinalStartingListDto";
    id: Scalars["ID"];
    apparatus: ApparatusDto;
    event: EventDto;
    lots: Array<LotDto>;
};

export type FinalStartingListFilter = {
    event?: Maybe<Scalars["String"]>;
};

export enum Gender {
    Male = "MALE",
    Female = "FEMALE",
}

export type GymDto = {
    __typename?: "GymDto";
    id: Scalars["ID"];
    name: Scalars["String"];
    country: Country;
    city: Scalars["String"];
    address: Scalars["String"];
};

export type GymInput = {
    name: Scalars["String"];
    country: Scalars["String"];
    city: Scalars["String"];
    address: Scalars["String"];
};

export type GymnastApplicationDto = {
    __typename?: "GymnastApplicationDto";
    id: Scalars["ID"];
    zone: GymnastApplicationTimeZone;
    status?: Maybe<GymnastApplicationStatus>;
    event: EventDto;
    apparatus: ApparatusDto;
    league: LeagueDto;
    gymnast: GymnastDto;
    gym: GymDto;
    createdAt: Scalars["DateTime"];
    scheduled: Scalars["Boolean"];
    slot?: Maybe<SlotDto>;
};

export type GymnastApplicationFilter = {
    apparatuses?: Maybe<Array<Scalars["String"]>>;
    gymnast?: Maybe<Scalars["String"]>;
};

export type GymnastApplicationInput = {
    zone: GymnastApplicationTimeZone;
    event: Scalars["String"];
    apparatus: Scalars["String"];
    league: Scalars["String"];
    gym: Scalars["String"];
};

export type GymnastApplicationReviewInput = {
    status: GymnastApplicationStatus;
};

export type GymnastApplicationStats = {
    __typename?: "GymnastApplicationStats";
    league?: Maybe<LeagueDto>;
    apparatus?: Maybe<ApparatusDto>;
    amountOfApprovedGymnastApplications?: Maybe<Scalars["Int"]>;
};

export enum GymnastApplicationStatus {
    Approved = "APPROVED",
    Rejected = "REJECTED",
}

export enum GymnastApplicationTimeZone {
    Europe = "EUROPE",
}

export type GymnastDto = {
    __typename?: "GymnastDto";
    id: Scalars["ID"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    email: Scalars["String"];
    country: Country;
    phone: Scalars["String"];
    gender?: Maybe<Gender>;
    artisticGymnasticsBranch?: Maybe<ArtisticGymnasticsBranch>;
    approved?: Maybe<Scalars["Boolean"]>;
    role: Scalars["String"];
    dateOfBirth?: Maybe<Scalars["DateTime"]>;
    gymnastApplications?: Maybe<Array<GymnastApplicationDto>>;
};

export type GymnastRecordingDto = {
    __typename?: "GymnastRecordingDto";
    id: Scalars["ID"];
    videoLocation?: Maybe<Scalars["String"]>;
    status: GymnastRecordingStatus;
    slot: SlotDto;
};

export enum GymnastRecordingStatus {
    RecordingPerformance = "RECORDING_PERFORMANCE",
    Uploading = "UPLOADING",
    Uploaded = "UPLOADED",
    UrlForUploadCreated = "URL_FOR_UPLOAD_CREATED",
    Failed = "FAILED",
}

export type ImpersonateD1Dto = {
    __typename?: "ImpersonateD1Dto";
    expiresIn: Scalars["String"];
    accessToken: Scalars["String"];
    refreshToken: Scalars["String"];
};

export type ImpersonateD1Input = {
    difficultyJuryId: Scalars["ID"];
};

export type InquiryDto = {
    __typename?: "InquiryDto";
    id: Scalars["ID"];
    state: InquiryStateEnum;
    isScoreValid?: Maybe<Scalars["Boolean"]>;
    difficultyScore?: Maybe<Scalars["Float"]>;
    neutralDeduction?: Maybe<Scalars["Float"]>;
    reason?: Maybe<Scalars["String"]>;
    createdAt: Scalars["DateTime"];
    parent: DifficultyScoreDto;
};

export type InquiryInput = {
    slot: Scalars["String"];
};

export type InquiryResolveInput = {
    inquiry: Scalars["String"];
    isScoreValid: Scalars["Boolean"];
    difficultyScore?: Maybe<Scalars["Float"]>;
    neutralDeduction?: Maybe<Scalars["Float"]>;
    reason?: Maybe<Scalars["String"]>;
};

export type InquiryStartResolvingInput = {
    inquiry: Scalars["String"];
};

export enum InquiryStateEnum {
    InQueue = "IN_QUEUE",
    CurrentlyResolving = "CURRENTLY_RESOLVING",
    Resolved = "RESOLVED",
}

export type JudgeApplicationCreateInput = {
    event: Scalars["String"];
};

export type JudgeApplicationCreateInviteInput = {
    event: Scalars["String"];
    judge: Scalars["String"];
};

export type JudgeApplicationDto = {
    __typename?: "JudgeApplicationDto";
    id: Scalars["ID"];
    event: EventDto;
    judge: JudgeDto;
    createdAt: Scalars["DateTime"];
};

export type JudgeApplicationInput = {
    event: Scalars["String"];
};

export type JudgeApplicationInviteInput = {
    event: Scalars["String"];
};

export type JudgeApplicationPaginatedOutput = {
    __typename?: "JudgeApplicationPaginatedOutput";
    itemCount: Scalars["Int"];
    items: Array<JudgeApplicationDto>;
};

export type JudgeApplicationSortInput = {
    column: JudgeApplicationSortable;
    order: SortOrderInput;
};

export enum JudgeApplicationSortable {
    DateApplied = "DateApplied",
    Category = "Category",
}

export type JudgeDto = {
    __typename?: "JudgeDto";
    id: Scalars["ID"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    email: Scalars["String"];
    country: Country;
    phone: Scalars["String"];
    gender?: Maybe<Gender>;
    artisticGymnasticsBranch?: Maybe<ArtisticGymnasticsBranch>;
    approved?: Maybe<Scalars["Boolean"]>;
    role: Scalars["String"];
    judgeCategory?: Maybe<Scalars["Int"]>;
    figLicenceId?: Maybe<Scalars["String"]>;
    judgeApplications?: Maybe<Array<JudgeApplicationDto>>;
};

export type JudgePaginatedOutput = {
    __typename?: "JudgePaginatedOutput";
    itemCount: Scalars["Int"];
    items: Array<JudgeDto>;
};

export type JudgeSearchFilter = {
    lastName?: Maybe<Scalars["String"]>;
};

export type JudgeSortInput = {
    column: JudgeSortable;
    order: SortOrderInput;
};

export enum JudgeSortable {
    Approved = "Approved",
}

export enum JuryAssistantRole {
    L1 = "L1",
    L2 = "L2",
    T1 = "T1",
    T2 = "T2",
}

export enum JuryDifficultyRole {
    D1 = "D1",
    D2 = "D2",
    Supervisor = "SUPERVISOR",
}

export enum JuryExecutionRole {
    E1 = "E1",
    E2 = "E2",
    E3 = "E3",
    E4 = "E4",
    E5 = "E5",
    E6 = "E6",
}

export type JuryRoleDto = {
    __typename?: "JuryRoleDto";
    juryRole: Scalars["String"];
    filled: Scalars["Boolean"];
};

export enum JurySuperiorRole {
    I1 = "I1",
    I2 = "I2",
}

export type LeagueDto = {
    __typename?: "LeagueDto";
    id: Scalars["ID"];
    name: Scalars["String"];
    minScore?: Maybe<Scalars["Float"]>;
    maxScore?: Maybe<Scalars["Float"]>;
    events?: Maybe<Array<EventDto>>;
};

export type LeagueInput = {
    name: Scalars["String"];
    minScore?: Maybe<Scalars["Float"]>;
    maxScore?: Maybe<Scalars["Float"]>;
};

export type LeagueParticipants = {
    __typename?: "LeagueParticipants";
    leagueId: Scalars["String"];
    amountOfParticipants: Scalars["Float"];
    maxParticipants: Scalars["Float"];
};

export type LineScoreDto = {
    __typename?: "LineScoreDto";
    id: Scalars["ID"];
    lineScoreDeduction: Scalars["Float"];
    judge: JudgeDto;
    score: ScoreDto;
    createdByJuror?: Maybe<JuryAssistantRole>;
};

export type LineScoreInput = {
    lineScoreDeduction: Scalars["Float"];
    slot: Scalars["String"];
};

export type LineScoreUpdateInput = {
    id: Scalars["ID"];
    slot: Scalars["String"];
    lineScoreDeduction: Scalars["Float"];
};

export type LoginUserDto = {
    __typename?: "LoginUserDto";
    expiresIn: Scalars["String"];
    accessToken: Scalars["String"];
    refreshToken: Scalars["String"];
};

export type LoginUserInput = {
    email: Scalars["String"];
    password: Scalars["String"];
};

export type LotDto = {
    __typename?: "LotDto";
    id: Scalars["ID"];
    lotNumber: Scalars["Int"];
    startingTime?: Maybe<Scalars["DateTime"]>;
    slots: Array<SlotDto>;
};

export type Mutation = {
    __typename?: "Mutation";
    registerGymnast: GymnastDto;
    registerJudge: JudgeDto;
    login: LoginUserDto;
    loginMobile: LoginUserDto;
    autoLoginWithToken: LoginUserDto;
    refresh: RefreshedAccessTokenDto;
    verifyAccount: AccountVerificationOutput;
    impersonateD1: ImpersonateD1Dto;
    createApparatus: ApparatusDto;
    imOnline: Scalars["String"];
    createGym: GymDto;
    createGymnastApplication: GymnastApplicationDto;
    gymnastApplicationReview: GymnastApplicationDto;
    createInquiry: InquiryDto;
    startResolvingInquiry: InquiryDto;
    resolveInquiry: InquiryDto;
    createJudgeApplication: JudgeApplicationDto;
    createJudgeApplicationInvite: JudgeApplicationDto;
    createLeague: LeagueDto;
    startPlayStream: PlayStreamDto;
    pausePlayStream: PlayStreamDto;
    playSlot: PlayStreamDto;
    nextSlot: PlayStreamDto;
    stopPlayStream: PlayStreamDto;
    eliminateCurrentSlot: PlayStreamDto;
    startScoring: ScoreDto;
    confirmScore: ScoreDto;
    createDifficultyScore: DifficultyScoreDto;
    createExecutionScore: ExecutionScoreDto;
    createExecutionScoreForExecutionJuror: ExecutionScoreDto;
    createLineScore: LineScoreDto;
    createTimeScore: TimeScoreDto;
    createDifficultyJury: DifficultyJuryDto;
    updateDifficultyJury: DifficultyJuryDto;
    deleteDifficultyJury: Scalars["String"];
    createExecutionJury: ExecutionJuryDto;
    randomizeExecutionJury: Array<ExecutionJuryDto>;
    createSuperiorJury: SuperiorJuryDto;
    updateSuperiorJury: SuperiorJuryDto;
    deleteSuperiorJury: Scalars["String"];
    approveJudge: JudgeDto;
    randomizeAssistantJury: Array<AssistantJuryDto>;
    requestPasswordReset: RequestPasswordResetOutput;
    resetPassword: ResetPasswordOutput;
    updateExecutionScore: ExecutionScoreDto;
    createPublishedEvent: EventDto;
    validateEventForScheduling: Scalars["Boolean"];
    scheduleEvent: EventDto;
    updateLineScore: LineScoreDto;
    updateTimeScore: TimeScoreDto;
    updateDifficultyScore: DifficultyScoreDto;
    createUrlToUploadGymnastRecording: UploadRecordingUrlDto;
    updateGymnastRecordingStatus: GymnastRecordingDto;
    getTestPresignedUrl: Scalars["String"];
    requestAutoLoginToken: AutoLoginTokenDto;
};

export type MutationRegisterGymnastArgs = {
    input: RegisterGymnastInput;
};

export type MutationRegisterJudgeArgs = {
    input: RegisterJudgeInput;
};

export type MutationLoginArgs = {
    input: LoginUserInput;
};

export type MutationLoginMobileArgs = {
    input: LoginUserInput;
};

export type MutationAutoLoginWithTokenArgs = {
    input: AutoLoginTokenInput;
};

export type MutationRefreshArgs = {
    input: RefreshAccessTokenInput;
};

export type MutationVerifyAccountArgs = {
    input: AccountVerificationInput;
};

export type MutationImpersonateD1Args = {
    input: ImpersonateD1Input;
};

export type MutationCreateApparatusArgs = {
    input: ApparatusInput;
};

export type MutationImOnlineArgs = {
    event: Scalars["String"];
};

export type MutationCreateGymArgs = {
    input: GymInput;
};

export type MutationCreateGymnastApplicationArgs = {
    input: GymnastApplicationInput;
};

export type MutationGymnastApplicationReviewArgs = {
    input: GymnastApplicationReviewInput;
    id: Scalars["String"];
};

export type MutationCreateInquiryArgs = {
    input: InquiryInput;
};

export type MutationStartResolvingInquiryArgs = {
    input: InquiryStartResolvingInput;
};

export type MutationResolveInquiryArgs = {
    input: InquiryResolveInput;
};

export type MutationCreateJudgeApplicationArgs = {
    input: JudgeApplicationCreateInput;
};

export type MutationCreateJudgeApplicationInviteArgs = {
    input: JudgeApplicationCreateInviteInput;
};

export type MutationCreateLeagueArgs = {
    input: LeagueInput;
};

export type MutationStartPlayStreamArgs = {
    input: PlayStreamDirectingInput;
};

export type MutationPausePlayStreamArgs = {
    input: PlayStreamDirectingInput;
};

export type MutationPlaySlotArgs = {
    input: PlayStreamDirectingInput;
};

export type MutationNextSlotArgs = {
    input: PlayStreamDirectingInput;
};

export type MutationStopPlayStreamArgs = {
    input: PlayStreamDirectingInput;
};

export type MutationEliminateCurrentSlotArgs = {
    input: PlayStreamEliminateSlotInput;
};

export type MutationStartScoringArgs = {
    input: ScoreInput;
};

export type MutationConfirmScoreArgs = {
    slot: Scalars["String"];
};

export type MutationCreateDifficultyScoreArgs = {
    input: DifficultyScoreInput;
};

export type MutationCreateExecutionScoreArgs = {
    input: ExecutionScoreInput;
};

export type MutationCreateExecutionScoreForExecutionJurorArgs = {
    input: ExecutionScoreInput;
};

export type MutationCreateLineScoreArgs = {
    input: LineScoreInput;
};

export type MutationCreateTimeScoreArgs = {
    input: TimeScoreInput;
};

export type MutationCreateDifficultyJuryArgs = {
    input: DifficultyJuryCreateInput;
};

export type MutationUpdateDifficultyJuryArgs = {
    input: DifficultyJuryUpdateInput;
    id: Scalars["String"];
};

export type MutationDeleteDifficultyJuryArgs = {
    id: Scalars["String"];
};

export type MutationCreateExecutionJuryArgs = {
    input: ExecutionJuryInput;
};

export type MutationRandomizeExecutionJuryArgs = {
    event: Scalars["String"];
};

export type MutationCreateSuperiorJuryArgs = {
    input: SuperiorJuryCreateInput;
};

export type MutationUpdateSuperiorJuryArgs = {
    input: SuperiorJuryUpdateInput;
    id: Scalars["String"];
};

export type MutationDeleteSuperiorJuryArgs = {
    id: Scalars["String"];
};

export type MutationApproveJudgeArgs = {
    judge: Scalars["String"];
};

export type MutationRandomizeAssistantJuryArgs = {
    event: Scalars["String"];
};

export type MutationRequestPasswordResetArgs = {
    input: RequestPasswordResetInput;
};

export type MutationResetPasswordArgs = {
    input: ResetPasswordInput;
};

export type MutationUpdateExecutionScoreArgs = {
    input: ExecutionScoreUpdateInput;
};

export type MutationCreatePublishedEventArgs = {
    input: EventInputPublished;
};

export type MutationValidateEventForSchedulingArgs = {
    id: Scalars["String"];
};

export type MutationScheduleEventArgs = {
    id: Scalars["String"];
};

export type MutationUpdateLineScoreArgs = {
    input: LineScoreUpdateInput;
};

export type MutationUpdateTimeScoreArgs = {
    input: TimeScoreUpdateInput;
};

export type MutationUpdateDifficultyScoreArgs = {
    input: DifficultyScoreUpdateInput;
};

export type MutationCreateUrlToUploadGymnastRecordingArgs = {
    slotId: Scalars["String"];
};

export type MutationUpdateGymnastRecordingStatusArgs = {
    input: UpdateGymnastRecordingInput;
};

export type MutationGetTestPresignedUrlArgs = {
    slotId: Scalars["String"];
};

export type PaginationInput = {
    take?: Maybe<Scalars["Int"]>;
    skip?: Maybe<Scalars["Int"]>;
};

export type PlayStreamDirectingInput = {
    playStream: Scalars["String"];
};

export type PlayStreamDto = {
    __typename?: "PlayStreamDto";
    id: Scalars["ID"];
    status: PlayStreamStatus;
    slotPlaylist: Array<SlotDto>;
    currentSlot?: Maybe<SlotDto>;
    nextSlot?: Maybe<SlotDto>;
    event: EventDto;
    apparatus: ApparatusDto;
};

export type PlayStreamEliminateSlotInput = {
    playStream: Scalars["String"];
    reason: EliminateSlotReason;
};

export type PlayStreamFilter = {
    event: Scalars["String"];
    apparatus: Scalars["String"];
};

export enum PlayStreamStatus {
    NotStarted = "NOT_STARTED",
    Playing = "PLAYING",
    Paused = "PAUSED",
    Stopped = "STOPPED",
}

export type PlayStreamUpdatedSubscriptionInput = {
    playStream: Scalars["String"];
};

export type PublicApparatusDto = {
    __typename?: "PublicApparatusDto";
    id: Scalars["ID"];
    name: Scalars["String"];
    gender: Gender;
    finalStartingList?: Maybe<PublicFinalStartingListDto>;
};

export type PublicDifficultyScoreDto = {
    __typename?: "PublicDifficultyScoreDto";
    id: Scalars["ID"];
    difficultyScore: Scalars["Float"];
    neutralDeduction: Scalars["Float"];
    difficultyNeutralDeduction: Scalars["Float"];
};

export type PublicEventDto = {
    __typename?: "PublicEventDto";
    id: Scalars["ID"];
    name: Scalars["String"];
    description: Scalars["String"];
    eventStartDateTime?: Maybe<Scalars["DateTime"]>;
    status: EventStatus;
    eventImage?: Maybe<Scalars["String"]>;
    leagues: Array<PublicLeagueDto>;
    apparatuses: Array<PublicApparatusDto>;
};

export type PublicFinalStartingListDto = {
    __typename?: "PublicFinalStartingListDto";
    id: Scalars["ID"];
    lots: Array<PublicLotDto>;
};

export type PublicGymnastApplicationDto = {
    __typename?: "PublicGymnastApplicationDto";
    id: Scalars["ID"];
    gymnast: PublicGymnastDto;
};

export type PublicGymnastDto = {
    __typename?: "PublicGymnastDto";
    id: Scalars["ID"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    country: Country;
};

export type PublicGymnastRecordingDto = {
    __typename?: "PublicGymnastRecordingDto";
    id: Scalars["ID"];
    videoLocation?: Maybe<Scalars["String"]>;
};

export type PublicLeagueDto = {
    __typename?: "PublicLeagueDto";
    id: Scalars["ID"];
    name: Scalars["String"];
};

export type PublicLotDto = {
    __typename?: "PublicLotDto";
    id: Scalars["ID"];
    lotNumber: Scalars["Int"];
    slots: Array<PublicSlotDto>;
};

export type PublicPlayStreamDto = {
    __typename?: "PublicPlayStreamDto";
    id: Scalars["ID"];
    status: PlayStreamStatus;
    currentSlot?: Maybe<PublicSlotDto>;
    apparatus: PublicApparatusDto;
    event: PublicEventDto;
};

export type PublicPlayStreamFilter = {
    event: Scalars["String"];
    apparatus: Scalars["String"];
};

export type PublicScoreDto = {
    __typename?: "PublicScoreDto";
    id: Scalars["ID"];
    confirmed: Scalars["Boolean"];
    executionScoreAverage?: Maybe<Scalars["Float"]>;
    finalScore?: Maybe<Scalars["Float"]>;
    difficultyScore?: Maybe<PublicDifficultyScoreDto>;
    eliminateReason?: Maybe<EliminateSlotReason>;
};

export type PublicSlotDto = {
    __typename?: "PublicSlotDto";
    id: Scalars["ID"];
    slotNumber: Scalars["Float"];
    gymnastApplication: PublicGymnastApplicationDto;
    gymnastRecording?: Maybe<PublicGymnastRecordingDto>;
    score?: Maybe<PublicScoreDto>;
};

export type PublicWebApparatusDto = {
    __typename?: "PublicWebApparatusDto";
    id: Scalars["ID"];
    name: Scalars["String"];
    gender: Gender;
};

export type PublicWebEventDto = {
    __typename?: "PublicWebEventDto";
    id: Scalars["ID"];
    name: Scalars["String"];
    eventStartDateTime?: Maybe<Scalars["DateTime"]>;
    entryFee?: Maybe<Scalars["Float"]>;
    internalPriceFund?: Maybe<Scalars["Float"]>;
    status: EventStatus;
    eventImage?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    apparatuses?: Maybe<Array<PublicWebApparatusDto>>;
    leagues?: Maybe<Array<PublicWebLeagueDto>>;
};

export type PublicWebEventPaginatedOutput = {
    __typename?: "PublicWebEventPaginatedOutput";
    itemCount: Scalars["Int"];
    items: Array<PublicWebEventDto>;
};

export type PublicWebLeagueDto = {
    __typename?: "PublicWebLeagueDto";
    id: Scalars["ID"];
    name: Scalars["String"];
};

export type Query = {
    __typename?: "Query";
    me: UserDto;
    apparatuses: Array<ApparatusDto>;
    apparatus: ApparatusDto;
    events: EventPaginatedOutput;
    myNextApplicableEvent?: Maybe<EventDto>;
    event?: Maybe<EventDto>;
    eventSingle?: Maybe<EventDto>;
    eventJuryDifficultyRoles: EventJuryRolesDto;
    eventJurySuperiorRoles: EventJuryRolesDto;
    myEvents: Array<EventDto>;
    allEvents: Array<EventDto>;
    pastEvents: Array<EventDto>;
    judgeRoleOnEvent?: Maybe<EventJuryDto>;
    judgeRolesOnEvents?: Maybe<Array<EventJuryDto>>;
    gyms: Array<GymDto>;
    gymSearch: Array<GymDto>;
    gymnastApplications: Array<GymnastApplicationDto>;
    gymnastApplication: GymnastApplicationDto;
    gymnastApplicationsForUpcomingEvents: Array<GymnastApplicationDto>;
    inquiries: Array<InquiryDto>;
    inquiry?: Maybe<InquiryDto>;
    judgeApplications: JudgeApplicationPaginatedOutput;
    judgeApplication?: Maybe<JudgeApplicationDto>;
    judgeApplicationsInvited: Array<JudgeApplicationDto>;
    judgeApplicationsApplied: JudgeApplicationPaginatedOutput;
    leagues: Array<LeagueDto>;
    league: LeagueDto;
    playStreamById?: Maybe<PlayStreamDto>;
    playStream?: Maybe<PlayStreamDto>;
    rankingList: Array<RankingDto>;
    slots: Array<SlotDto>;
    difficultyJury?: Maybe<DifficultyJuryDto>;
    executionJury?: Maybe<ExecutionJuryDto>;
    executionJuries: Array<ExecutionJuryDto>;
    executionJuryStats: ExecutionJuryStatsDto;
    superiorJury?: Maybe<SuperiorJuryDto>;
    judges: JudgePaginatedOutput;
    judgesNotIncludedInEvent: JudgePaginatedOutput;
    judge: JudgeDto;
    assistantJuryStats: AssistantJuryStatsDto;
    publicPlayStream?: Maybe<PublicPlayStreamDto>;
    publicEvent?: Maybe<PublicEventDto>;
    eventsHomepage: PublicWebEventPaginatedOutput;
    eventsLanding: PublicWebEventPaginatedOutput;
    chatRoom: ChatRoomDto;
};

export type QueryApparatusArgs = {
    id: Scalars["String"];
};

export type QueryEventsArgs = {
    filter: EventFilter;
    pagination: PaginationInput;
};

export type QueryEventArgs = {
    id: Scalars["String"];
};

export type QueryEventSingleArgs = {
    id: Scalars["String"];
};

export type QueryEventJuryDifficultyRolesArgs = {
    id: Scalars["String"];
};

export type QueryEventJurySuperiorRolesArgs = {
    id: Scalars["String"];
};

export type QueryJudgeRoleOnEventArgs = {
    event: Scalars["String"];
};

export type QueryJudgeRolesOnEventsArgs = {
    events: Array<Scalars["String"]>;
};

export type QueryGymSearchArgs = {
    queryString: Scalars["String"];
};

export type QueryGymnastApplicationArgs = {
    id: Scalars["String"];
};

export type QueryInquiriesArgs = {
    event: Scalars["String"];
};

export type QueryInquiryArgs = {
    inquiry: Scalars["String"];
};

export type QueryJudgeApplicationsArgs = {
    pagination: PaginationInput;
};

export type QueryJudgeApplicationArgs = {
    input: JudgeApplicationInput;
};

export type QueryJudgeApplicationsInvitedArgs = {
    input: JudgeApplicationInviteInput;
};

export type QueryJudgeApplicationsAppliedArgs = {
    sort: JudgeApplicationSortInput;
    pagination: PaginationInput;
    input: JudgeApplicationInviteInput;
};

export type QueryLeagueArgs = {
    id: Scalars["String"];
};

export type QueryPlayStreamByIdArgs = {
    playStream: Scalars["String"];
};

export type QueryPlayStreamArgs = {
    filter: PlayStreamFilter;
};

export type QueryRankingListArgs = {
    rankingListInput: RankingListInput;
};

export type QueryDifficultyJuryArgs = {
    id: Scalars["String"];
};

export type QueryExecutionJuryArgs = {
    id: Scalars["String"];
};

export type QueryExecutionJuryStatsArgs = {
    event: Scalars["String"];
};

export type QuerySuperiorJuryArgs = {
    id: Scalars["String"];
};

export type QueryJudgesArgs = {
    filter: JudgeSearchFilter;
    sort: JudgeSortInput;
    pagination: PaginationInput;
};

export type QueryJudgesNotIncludedInEventArgs = {
    pagination: PaginationInput;
    eventId: Scalars["String"];
};

export type QueryJudgeArgs = {
    id: Scalars["String"];
};

export type QueryAssistantJuryStatsArgs = {
    event: Scalars["String"];
};

export type QueryPublicPlayStreamArgs = {
    filter: PublicPlayStreamFilter;
};

export type QueryPublicEventArgs = {
    event: Scalars["String"];
};

export type QueryEventsHomepageArgs = {
    pagination: PaginationInput;
};

export type QueryEventsLandingArgs = {
    pagination: PaginationInput;
};

export type QueryChatRoomArgs = {
    apparatus: Scalars["String"];
    event: Scalars["String"];
};

export type RankingDto = {
    __typename?: "RankingDto";
    name: Scalars["String"];
    country: Country;
    finalScore: Scalars["Float"];
    difficultyScore: Scalars["Float"];
    neutralDeduction: Scalars["Float"];
    executionScoreAverage: Scalars["Float"];
    inquiryState?: Maybe<InquiryStateEnum>;
    gymnastId: Scalars["String"];
};

export type RankingListInput = {
    event: Scalars["String"];
    apparatus: Scalars["String"];
    league: Scalars["String"];
};

export type RankingUpdatedSubscriptionInput = {
    event: Scalars["String"];
    apparatus: Scalars["String"];
    league: Scalars["String"];
};

export type RefreshAccessTokenInput = {
    refreshToken: Scalars["String"];
};

export type RefreshedAccessTokenDto = {
    __typename?: "RefreshedAccessTokenDto";
    expiresIn: Scalars["String"];
    accessToken: Scalars["String"];
    refreshToken: Scalars["String"];
};

export type RegisterGymnastInput = {
    password: Scalars["String"];
    email: Scalars["String"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    phone: Scalars["String"];
    country: Country;
    gender: Gender;
    dateOfBirth: Scalars["DateTime"];
};

export type RegisterJudgeInput = {
    password: Scalars["String"];
    email: Scalars["String"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    phone: Scalars["String"];
    country: Country;
    judgeCategory: Scalars["Int"];
    figLicenceId: Scalars["String"];
    artisticGymnasticsBranch: ArtisticGymnasticsBranch;
};

export type RequestPasswordResetInput = {
    email: Scalars["String"];
};

export type RequestPasswordResetOutput = {
    __typename?: "RequestPasswordResetOutput";
    success: Scalars["Boolean"];
};

export type ResetPasswordInput = {
    password: Scalars["String"];
    confirmationToken: Scalars["String"];
};

export type ResetPasswordOutput = {
    __typename?: "ResetPasswordOutput";
    success: Scalars["Boolean"];
};

export type ScoreDto = {
    __typename?: "ScoreDto";
    id: Scalars["ID"];
    confirmed: Scalars["Boolean"];
    executionScoreAverage?: Maybe<Scalars["Float"]>;
    finalScore?: Maybe<Scalars["Float"]>;
    difficultyScore?: Maybe<DifficultyScoreDto>;
    executionScores?: Maybe<Array<ExecutionScoreDto>>;
    lineScore?: Maybe<LineScoreDto>;
    timeScore?: Maybe<TimeScoreDto>;
    slot: SlotDto;
    eliminateReason?: Maybe<EliminateSlotReason>;
    confirmedAt?: Maybe<Scalars["DateTime"]>;
};

export type ScoreInput = {
    slot: Scalars["String"];
};

export type SlotDto = {
    __typename?: "SlotDto";
    id: Scalars["ID"];
    slotNumber: Scalars["Float"];
    uniqueCode?: Maybe<Scalars["String"]>;
    lot?: Maybe<LotDto>;
    gymnastApplication: GymnastApplicationDto;
    gymnastRecording?: Maybe<GymnastRecordingDto>;
    score?: Maybe<ScoreDto>;
    /** Timestamp which says from when can we expect recording to be uploaded, because from this datetime, unique code starts to be visible to gymnast */
    recordingExpectedFrom: Scalars["DateTime"];
};

export enum SortOrderInput {
    Ascending = "Ascending",
    Descending = "Descending",
}

export type Subscription = {
    __typename?: "Subscription";
    gymnastRecordingStatusUpdated: SlotDto;
    eventJuryOnlineStatusChanged: EventJuryDto;
    inquiryCreated: InquiryDto;
    finalStartingListUpdated: FinalStartingListDto;
    inquiryStartedResolving: InquiryDto;
    inquiryResolved: InquiryDto;
    playStreamUpdated: PlayStreamDto;
    rankingListUpdatedForEventApparatusLeague: Array<RankingDto>;
    scoringFinalized: ScoreDto;
    scoringStarted: Scalars["String"];
    scoringUpdated: Scalars["Boolean"];
    scoreCreated: ScoreDto;
    eventStatusUpdated: EventDto;
    eventInquiryUpdated: EventDto;
    publicPlayStreamUpdated: PublicPlayStreamDto;
};

export type SubscriptionGymnastRecordingStatusUpdatedArgs = {
    input: EventApparatusSubscriptionInput;
};

export type SubscriptionEventJuryOnlineStatusChangedArgs = {
    input: EventJuryOnlineStatusChangedInput;
};

export type SubscriptionInquiryCreatedArgs = {
    event: Scalars["String"];
};

export type SubscriptionFinalStartingListUpdatedArgs = {
    apparatus: Scalars["String"];
    event: Scalars["String"];
};

export type SubscriptionInquiryStartedResolvingArgs = {
    inquiry: Scalars["String"];
};

export type SubscriptionInquiryResolvedArgs = {
    inquiry: Scalars["String"];
};

export type SubscriptionPlayStreamUpdatedArgs = {
    input: PlayStreamUpdatedSubscriptionInput;
};

export type SubscriptionRankingListUpdatedForEventApparatusLeagueArgs = {
    input: RankingUpdatedSubscriptionInput;
};

export type SubscriptionScoringFinalizedArgs = {
    slot: Scalars["String"];
};

export type SubscriptionScoringStartedArgs = {
    slot: Scalars["String"];
};

export type SubscriptionScoringUpdatedArgs = {
    slot: Scalars["String"];
};

export type SubscriptionScoreCreatedArgs = {
    slot: Scalars["String"];
};

export type SubscriptionEventStatusUpdatedArgs = {
    input: EventStatusUpdatedSubscriptionInput;
};

export type SubscriptionEventInquiryUpdatedArgs = {
    input: EventStatusUpdatedSubscriptionInput;
};

export type SubscriptionPublicPlayStreamUpdatedArgs = {
    input: PlayStreamUpdatedSubscriptionInput;
};

export type SuperiorJuryCreateInput = {
    apparatus: Scalars["String"];
    event: Scalars["String"];
    juryRole: JurySuperiorRole;
    judge: Scalars["String"];
};

export type SuperiorJuryDto = {
    __typename?: "SuperiorJuryDto";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    judge?: Maybe<JudgeDto>;
    apparatus?: Maybe<ApparatusDto>;
    event?: Maybe<EventDto>;
    online: Scalars["Boolean"];
    juryRole: JurySuperiorRole;
};

export type SuperiorJuryUpdateInput = {
    apparatus: Scalars["String"];
    event: Scalars["String"];
    juryRole: JurySuperiorRole;
};

export type TimeScoreDto = {
    __typename?: "TimeScoreDto";
    id: Scalars["ID"];
    timeScoreDeduction: Scalars["Float"];
    judge: JudgeDto;
    score: ScoreDto;
    createdByJuror?: Maybe<JuryAssistantRole>;
};

export type TimeScoreInput = {
    timeScoreDeduction: Scalars["Float"];
    slot: Scalars["String"];
};

export type TimeScoreUpdateInput = {
    id: Scalars["ID"];
    slot: Scalars["String"];
    timeScoreDeduction: Scalars["Float"];
};

export type UpdateGymnastRecordingInput = {
    status: GymnastRecordingStatus;
    slotId: Scalars["String"];
};

export type UploadRecordingUrlDto = {
    __typename?: "UploadRecordingUrlDto";
    url: Scalars["String"];
};

export type UserDto = {
    __typename?: "UserDto";
    id: Scalars["ID"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    email: Scalars["String"];
    country: Country;
    phone: Scalars["String"];
    gender?: Maybe<Gender>;
    artisticGymnasticsBranch?: Maybe<ArtisticGymnasticsBranch>;
    approved?: Maybe<Scalars["Boolean"]>;
};
