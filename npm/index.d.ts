declare module '@apiverve/usernameprofanity' {
  export interface usernameprofanityOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface usernameprofanityResponse {
    status: string;
    error: string | null;
    data: UsernameProfanityData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface UsernameProfanityData {
      username:  null | string;
      isProfane: boolean | null;
  }

  export default class usernameprofanityWrapper {
    constructor(options: usernameprofanityOptions);

    execute(callback: (error: any, data: usernameprofanityResponse | null) => void): Promise<usernameprofanityResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: usernameprofanityResponse | null) => void): Promise<usernameprofanityResponse>;
    execute(query?: Record<string, any>): Promise<usernameprofanityResponse>;
  }
}
