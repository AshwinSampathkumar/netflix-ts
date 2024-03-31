export interface UserDataType {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  isAnonymous: boolean;
  photoURL: string;
  providerData?: ProviderDataEntity[] | null;
  stsTokenManager: StsTokenManager;
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
}
export interface ProviderDataEntity {
  providerId: string;
  uid: string;
  displayName: string;
  email: string;
  phoneNumber?: null;
  photoURL: string;
}
export interface StsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

export interface ProfileTileType {
  id: string | number;
  name: string;
  resource: string;
}
export interface ProfileSliceType {
  selectedProfile: ProfileTileType | null;
}
